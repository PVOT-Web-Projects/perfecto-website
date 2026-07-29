# PEHSPL Email API

Tiny serverless endpoint that receives the website's form submissions and
sends them via **Brevo SMTP** to `coordination@pehspl.co.in` (CC
`info@pehspl.co.in`). The main site is a static export (GitHub Pages), so
email sending must live in a small hosted function like this one.

## Deploy (Vercel, free)

```bash
cd email-api
npx vercel            # log in / create the project when prompted
npx vercel --prod
```

Then in the Vercel dashboard → Project → **Settings → Environment Variables**, add:

| Name | Value |
|---|---|
| `SMTP_LOGIN` | `pvotweb3@gmail.com` |
| `SMTP_KEY` | the Brevo SMTP key (starts with `xsmtpsib-…`) |
| `MAIL_TO` | `coordination@pehspl.co.in` *(optional, this is the default)* |
| `MAIL_CC` | `info@pehspl.co.in` *(optional, default)* |
| `MAIL_FROM` | `PEHSPL Website <pvotweb3@gmail.com>` *(optional)* |
| `ALLOW_ORIGIN` | your site origin, e.g. `https://jaypatel52970.github.io` *(optional, defaults to `*`)* |

Redeploy after saving the variables (`npx vercel --prod` again).

⚠️ **Never commit the SMTP key** to this (or any) repository — it stays in
environment variables only. If it ever leaks, rotate it in the Brevo
dashboard (SMTP & API → SMTP keys).

Note: the `MAIL_FROM` address must be a **verified sender** in the Brevo
account, otherwise Brevo rejects the send.

## Deploy (cPanel — plain PHP, no Node.js needed)

Use this when cPanel has **no "Setup Node.js App"** icon. The `php/`
folder is a self-contained PHP port of the same endpoint (raw Brevo SMTP,
no PHPMailer/Composer required).

1. In cPanel **File Manager**, create a folder `api` inside
   `public_html` and upload **`php/contact.php`** and
   **`php/config.sample.php`** into it.
2. On the server, **copy `config.sample.php` → `config.php`** (Right
   click → Copy) and edit `config.php`: paste the real Brevo SMTP key
   into `SMTP_KEY`. Optionally set `ALLOW_ORIGIN` to the site origin.
3. That's it — the endpoint is live at:
   `https://<your-domain>/api/contact.php`
4. Test: open the URL in a browser — you should get
   `{"error":"Method not allowed"}` (proves PHP runs and config loads).
5. Paste the URL into `lib/siteConfig.js` `CONTACT_ENDPOINT` and push.

⚠️ `config.php` holds the SMTP key — it must exist **only on the
server**, never in the repo (it is gitignored). PHP files are executed,
not served, so the key is not exposed to visitors — but do not rename the
file to `.txt`/`.bak`, which WOULD expose it.

If sends fail: some shared hosts block outbound port 587. Check the
cPanel error log; if you see "connect … failed", ask the host to open
port 587 to `smtp-relay.brevo.com`.

## Deploy (cPanel — "Setup Node.js App")

Requires the **Setup Node.js App** feature in cPanel (most CloudLinux
hosts have it). If your cPanel doesn't show it, use the Vercel path above.

1. **Upload the code**: zip this `email-api` folder (WITHOUT
   `node_modules` or `.env`) and upload/extract it via cPanel **File
   Manager** to e.g. `/home/<user>/email-api` (outside `public_html`).
2. cPanel → **Setup Node.js App → Create Application**:
   - Node.js version: 18+ (pick the newest available)
   - Application mode: `Production`
   - Application root: `email-api` (the folder you uploaded)
   - Application URL: pick the domain/subpath, e.g. `pehspl.co.in` + `api`
   - Application startup file: `server.js`
3. Still on that screen, add the **environment variables** (same table as
   above: `SMTP_LOGIN`, `SMTP_KEY`, optionally `MAIL_TO`, `MAIL_CC`,
   `MAIL_FROM`, `ALLOW_ORIGIN`).
4. Click **Create**, then **Run NPM Install** (installs express +
   nodemailer). If the button is missing, use the terminal command cPanel
   shows (`source /home/<user>/nodevenv/...`) and run `npm install`.
5. **Restart** the app. Opening the Application URL in a browser should
   show `{"ok":true,"service":"pehspl-email-api"}`.

Your endpoint is then the Application URL, e.g.
`https://pehspl.co.in/api/contact` (any path under the app URL accepts the
POST — `https://pehspl.co.in/api` works too).

⚠️ Note: some shared hosts **block outbound SMTP ports** (587) to external
relays like Brevo. If sends fail with a connection/timeout error in the
app's log (`stderr.log` in the app root), ask the host to open port 587 to
`smtp-relay.brevo.com` — or deploy on Vercel instead.

## Connect the website

Your production endpoint will be:

```
https://<your-project>.vercel.app/api/contact
```

Paste it into `lib/siteConfig.js` at the repo root:

```js
export const CONTACT_ENDPOINT = 'https://<your-project>.vercel.app/api/contact';
```

Commit + push (GitHub Pages rebuilds), and the forms switch from the
mailto fallback to real email sending.

## Request format

`POST` JSON: `{ type: 'contact' | 'consultation' | 'newsletter', name, email, phone, message }`
Responses: `200 {ok:true}` · `400 {error}` (validation) · `502 {error}` (SMTP failure).
