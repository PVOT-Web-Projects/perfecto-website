/**
 * PEHSPL contact endpoint — Vercel serverless function.
 * Sends form submissions via Brevo SMTP. All credentials come from
 * environment variables; never hardcode the SMTP key in this repo.
 */
const nodemailer = require('nodemailer');

const TO = process.env.MAIL_TO || 'coordination@pehspl.co.in';
const CC = process.env.MAIL_CC || 'info@pehspl.co.in';
const ALLOW_ORIGIN = process.env.ALLOW_ORIGIN || '*';

const SUBJECTS = {
  contact: (d) => `New Website Enquiry — ${d.name}`,
  consultation: (d) => `Consultation Request — ${d.name}`,
  newsletter: () => 'New Insights Newsletter Subscription',
};

const esc = (s = '') =>
  String(s).replace(/[&<>"']/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[c]));

module.exports = async (req, res) => {
  res.setHeader('Access-Control-Allow-Origin', ALLOW_ORIGIN);
  res.setHeader('Access-Control-Allow-Methods', 'POST, OPTIONS');
  res.setHeader('Access-Control-Allow-Headers', 'Content-Type');
  if (req.method === 'OPTIONS') return res.status(204).end();
  if (req.method !== 'POST') return res.status(405).json({ error: 'Method not allowed' });

  const { type = 'contact', name = '', email = '', phone = '', message = '' } = req.body || {};

  if (type !== 'newsletter' && !String(name).trim())
    return res.status(400).json({ error: 'Name is required' });
  if ((type === 'contact' || type === 'newsletter') && !/.+@.+\..+/.test(String(email)))
    return res.status(400).json({ error: 'A valid email is required' });
  if (type === 'consultation' && !String(phone).trim())
    return res.status(400).json({ error: 'Phone is required' });

  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_HOST || 'smtp-relay.brevo.com',
    port: Number(process.env.SMTP_PORT || 587),
    secure: false, // STARTTLS on 587
    auth: { user: process.env.SMTP_LOGIN, pass: process.env.SMTP_KEY },
  });

  const rows = [
    ['Enquiry Type', type],
    ['Full Name', name],
    ['Email', email],
    ['Phone', phone],
    ['Message', message],
  ].filter(([, v]) => String(v).trim());

  const html = `
    <h2 style="font-family:Arial,sans-serif;color:#2C5165;">PEHSPL Website — ${esc(
      (SUBJECTS[type] || SUBJECTS.contact)({ name })
    )}</h2>
    <table cellpadding="8" style="font-family:Arial,sans-serif;font-size:14px;border-collapse:collapse;">
      ${rows
        .map(
          ([k, v]) =>
            `<tr><td style="border:1px solid #ddd;font-weight:bold;background:#f5f6f7;">${esc(k)}</td><td style="border:1px solid #ddd;">${esc(v)}</td></tr>`
        )
        .join('')}
    </table>
    <p style="font-family:Arial,sans-serif;font-size:12px;color:#888;">Sent automatically from the PEHSPL website contact form.</p>`;

  const text = rows.map(([k, v]) => `${k}: ${v}`).join('\n');

  try {
    await transporter.sendMail({
      from: process.env.MAIL_FROM || `PEHSPL Website <${process.env.SMTP_LOGIN}>`,
      to: TO,
      cc: CC,
      replyTo: /.+@.+\..+/.test(String(email)) ? email : undefined,
      subject: (SUBJECTS[type] || SUBJECTS.contact)({ name }),
      html,
      text,
    });
    return res.status(200).json({ ok: true });
  } catch (err) {
    console.error('sendMail failed:', err && err.message);
    return res.status(502).json({ error: 'Failed to send. Please try again later.' });
  }
};
