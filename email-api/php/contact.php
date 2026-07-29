<?php
/**
 * PEHSPL contact endpoint — plain-PHP version for cPanel hosts without
 * Node.js support. Mirrors api/contact.js: receives the website form as
 * JSON and sends it via Brevo SMTP (STARTTLS on port 587) with no
 * external libraries.
 *
 * Credentials live in config.php next to this file (copy
 * config.sample.php on the server and fill it in). NEVER commit
 * config.php — it holds the Brevo SMTP key.
 */

$configFile = __DIR__ . '/config.php';
if (!file_exists($configFile)) {
  http_response_code(500);
  header('Content-Type: application/json');
  echo json_encode(['error' => 'Server not configured (config.php missing)']);
  exit;
}
$config = require $configFile;

header('Access-Control-Allow-Origin: ' . (isset($config['ALLOW_ORIGIN']) ? $config['ALLOW_ORIGIN'] : '*'));
header('Access-Control-Allow-Methods: POST, OPTIONS');
header('Access-Control-Allow-Headers: Content-Type');
header('Content-Type: application/json');

if ($_SERVER['REQUEST_METHOD'] === 'OPTIONS') {
  http_response_code(204);
  exit;
}
if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
  http_response_code(405);
  echo json_encode(['error' => 'Method not allowed']);
  exit;
}

$body = json_decode(file_get_contents('php://input'), true);
if (!is_array($body)) $body = [];

$type    = isset($body['type']) ? (string)$body['type'] : 'contact';
$name    = isset($body['name']) ? trim((string)$body['name']) : '';
$email   = isset($body['email']) ? trim((string)$body['email']) : '';
$phone   = isset($body['phone']) ? trim((string)$body['phone']) : '';
$message = isset($body['message']) ? trim((string)$body['message']) : '';

if ($type !== 'newsletter' && $name === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Name is required']);
  exit;
}
if (($type === 'contact' || $type === 'newsletter') && !filter_var($email, FILTER_VALIDATE_EMAIL)) {
  http_response_code(400);
  echo json_encode(['error' => 'A valid email is required']);
  exit;
}
if ($type === 'consultation' && $phone === '') {
  http_response_code(400);
  echo json_encode(['error' => 'Phone is required']);
  exit;
}

switch ($type) {
  case 'consultation':
    $subject = "Consultation Request — $name";
    break;
  case 'newsletter':
    $subject = 'New Insights Newsletter Subscription';
    break;
  default:
    $subject = "New Website Enquiry — $name";
}

$rows = array_filter([
  ['Enquiry Type', $type],
  ['Full Name', $name],
  ['Email', $email],
  ['Phone', $phone],
  ['Message', $message],
], function ($row) { return $row[1] !== ''; });

$esc = function ($s) { return htmlspecialchars($s, ENT_QUOTES, 'UTF-8'); };

$tableRows = '';
$textLines = [];
foreach ($rows as $row) {
  $tableRows .= '<tr><td style="border:1px solid #ddd;padding:8px;font-weight:bold;background:#f5f6f7;">'
    . $esc($row[0]) . '</td><td style="border:1px solid #ddd;padding:8px;">'
    . nl2br($esc($row[1])) . '</td></tr>';
  $textLines[] = $row[0] . ': ' . $row[1];
}

$html = '<h2 style="font-family:Arial,sans-serif;color:#2C5165;">PEHSPL Website — ' . $esc($subject) . '</h2>'
  . '<table cellpadding="0" cellspacing="0" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">'
  . $tableRows . '</table>'
  . '<p style="font-family:Arial,sans-serif;font-size:12px;color:#888;">Sent automatically from the PEHSPL website contact form.</p>';
$text = implode("\n", $textLines);

$to      = isset($config['MAIL_TO']) ? $config['MAIL_TO'] : 'coordination@pehspl.co.in';
$cc      = isset($config['MAIL_CC']) ? $config['MAIL_CC'] : 'info@pehspl.co.in';
$from    = isset($config['MAIL_FROM']) ? $config['MAIL_FROM'] : $config['SMTP_LOGIN'];
$replyTo = filter_var($email, FILTER_VALIDATE_EMAIL) ? $email : '';

try {
  smtp_send($config, $from, $to, $cc, $replyTo, $subject, $html, $text);
  echo json_encode(['ok' => true]);
} catch (Exception $e) {
  error_log('PEHSPL mailer failed: ' . $e->getMessage());
  http_response_code(502);
  echo json_encode(['error' => 'Failed to send. Please try again later.']);
}

/**
 * Minimal SMTP client: EHLO → STARTTLS → AUTH LOGIN → send. Throws on any
 * unexpected server response.
 */
function smtp_send($cfg, $from, $to, $cc, $replyTo, $subject, $html, $text) {
  $host = isset($cfg['SMTP_HOST']) ? $cfg['SMTP_HOST'] : 'smtp-relay.brevo.com';
  $port = isset($cfg['SMTP_PORT']) ? (int)$cfg['SMTP_PORT'] : 587;

  $fp = @stream_socket_client("tcp://$host:$port", $errno, $errstr, 20);
  if (!$fp) throw new Exception("connect to $host:$port failed: $errstr");
  stream_set_timeout($fp, 20);

  $expect = function ($code) use ($fp) {
    do {
      $line = fgets($fp, 1024);
      if ($line === false) throw new Exception('SMTP read failed (connection dropped or blocked)');
    } while (isset($line[3]) && $line[3] === '-'); // skip multiline continuation
    if ((int)substr($line, 0, 3) !== $code) throw new Exception('SMTP: ' . trim($line));
  };
  $send = function ($cmd) use ($fp) { fwrite($fp, $cmd . "\r\n"); };

  $expect(220);
  $send('EHLO pehspl-website'); $expect(250);
  $send('STARTTLS'); $expect(220);
  if (!stream_socket_enable_crypto($fp, true, STREAM_CRYPTO_METHOD_TLS_CLIENT)) {
    throw new Exception('TLS negotiation failed');
  }
  $send('EHLO pehspl-website'); $expect(250);
  $send('AUTH LOGIN'); $expect(334);
  $send(base64_encode($cfg['SMTP_LOGIN'])); $expect(334);
  $send(base64_encode($cfg['SMTP_KEY'])); $expect(235);

  $send("MAIL FROM:<$from>"); $expect(250);
  $send("RCPT TO:<$to>"); $expect(250);
  if ($cc !== '') { $send("RCPT TO:<$cc>"); $expect(250); }

  $boundary = 'b' . md5(uniqid('', true));
  $headers = array_filter([
    "From: PEHSPL Website <$from>",
    "To: $to",
    $cc !== '' ? "Cc: $cc" : null,
    $replyTo !== '' ? "Reply-To: $replyTo" : null,
    'Subject: =?UTF-8?B?' . base64_encode($subject) . '?=',
    'Date: ' . date('r'),
    'MIME-Version: 1.0',
    "Content-Type: multipart/alternative; boundary=\"$boundary\"",
  ]);
  $data = implode("\r\n", $headers) . "\r\n\r\n"
    . "--$boundary\r\nContent-Type: text/plain; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$text\r\n"
    . "--$boundary\r\nContent-Type: text/html; charset=UTF-8\r\nContent-Transfer-Encoding: 8bit\r\n\r\n$html\r\n"
    . "--$boundary--";
  $data = preg_replace('/^\./m', '..', $data); // SMTP dot-stuffing

  $send('DATA'); $expect(354);
  fwrite($fp, $data . "\r\n.\r\n");
  $expect(250);
  $send('QUIT');
  fclose($fp);
}
