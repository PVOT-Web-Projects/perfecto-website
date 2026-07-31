<?php
/**
 * Copy this file to config.php ON THE SERVER (same folder as contact.php)
 * and fill in the real values there.
 *
 * NEVER commit config.php to the repository — it holds the Brevo SMTP key.
 * If the key ever leaks, rotate it in the Brevo dashboard
 * (SMTP & API → SMTP keys).
 */
return [
  'SMTP_HOST'    => 'smtp-relay.brevo.com',
  'SMTP_PORT'    => 587,
  'SMTP_LOGIN'   => 'pvotweb3@gmail.com',
  'SMTP_KEY'     => 'PASTE-THE-BREVO-SMTP-KEY-HERE',

  'MAIL_TO'      => 'coordination@pehspl.co.in',
  'MAIL_CC'      => 'info@pehspl.co.in',
  // Must be a verified sender in the Brevo account.
  'MAIL_FROM'    => 'pvotweb3@gmail.com',

  // Lock the API to the website origin once live, e.g.
  // 'https://jaypatel52970.github.io' — '*' allows any origin.
  'ALLOW_ORIGIN' => '*',
];
