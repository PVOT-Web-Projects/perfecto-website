// Site-wide contact configuration.
//
// CONTACT_ENDPOINT: after deploying the serverless mailer in /email-api
// (see email-api/README.md), paste its URL here, e.g.
//   'https://pehspl-email-api.vercel.app/api/contact'
// While it is empty, the forms fall back to opening the visitor's email
// client (mailto) pre-addressed to the addresses below.
export const CONTACT_ENDPOINT = 'https://pehspl.co.in/email-api/php/contact.php';

export const CONTACT_TO = 'coordination@pehspl.co.in';
export const CONTACT_CC = 'info@pehspl.co.in';
