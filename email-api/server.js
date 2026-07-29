/**
 * PEHSPL contact endpoint — standalone server for cPanel ("Setup Node.js App"
 * / Phusion Passenger) or any plain Node host. Reuses the same handler as the
 * Vercel function in api/contact.js.
 *
 * cPanel: set this file as the Application Startup File. Credentials come
 * from environment variables set in the cPanel Node.js app UI — never
 * hardcode the SMTP key.
 */
const express = require('express');
const contact = require('./api/contact');

const app = express();
app.use(express.json());

// Simple liveness check in the browser.
app.get('/', (req, res) => res.json({ ok: true, service: 'pehspl-email-api' }));

// Passenger may mount the app at "/", "/api", or another subpath depending on
// the cPanel Application URL — accept the form POST on any path.
app.all(/.*/, (req, res) => contact(req, res));

const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`PEHSPL email API listening on port ${port}`);
});
