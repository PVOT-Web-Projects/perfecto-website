'use client';

import { useState } from 'react';
import { asset } from '@/lib/assetPath';
import { CONTACT_ENDPOINT, CONTACT_TO, CONTACT_CC } from '@/lib/siteConfig';

const TABS = [
  ['contact', 'Contact Us'],
  ['consult', 'Request Consultation'],
  ['schedule', 'Schedule a Discussion'],
  ['profile', 'Download Company Profile'],
];

// POSTs to the serverless mailer when configured; otherwise opens the
// visitor's email client pre-addressed to the PEHSPL inboxes.
async function submitEnquiry(type, data) {
  if (!CONTACT_ENDPOINT) {
    const subject =
      type === 'consultation'
        ? `Consultation Request — ${data.name || ''}`
        : `Website Enquiry — ${data.name || ''}`;
    const body = [
      `Name: ${data.name || ''}`,
      `Email: ${data.email || ''}`,
      `Phone: ${data.phone || ''}`,
      '',
      data.message || '',
    ].join('\n');
    window.location.href = `mailto:${CONTACT_TO}?cc=${encodeURIComponent(
      CONTACT_CC
    )}&subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    return { mailto: true };
  }

  const res = await fetch(CONTACT_ENDPOINT, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({ type, ...data }),
  });
  if (!res.ok) {
    const info = await res.json().catch(() => ({}));
    throw new Error(info.error || 'Failed to send. Please try again.');
  }
  return { mailto: false };
}

export default function ContactCTA() {
  const [tab, setTab] = useState('contact');
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [error, setError] = useState('');

  const switchTab = (key) => {
    setTab(key);
    setStatus('idle');
    setError('');
  };

  const handleSubmit = (type) => async (e) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = Object.fromEntries(new FormData(form).entries());
    setStatus('sending');
    setError('');
    try {
      const result = await submitEnquiry(type, data);
      if (result.mailto) {
        setStatus('idle'); // the visitor's mail client took over
        return;
      }
      setStatus('ok');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  };

  const sending = status === 'sending';

  return (
    <section id="contact" className="cta">
      <div className="wrap cta-inner reveal">
        <div className="cta-copy">
          <h2>
            Let&apos;s make a
            <br />
            sterile
            <br />
            space
          </h2>
          <span className="cta-big">Together</span>
          <p className="sub" style={{ marginTop: 26 }}>
            Planning a new OT, ICU or IVF lab? Talk to PEHSPL&apos;s team about
            EU-certified, engineered cleanroom infrastructure for your
            hospital.
          </p>
        </div>

        <div>
          {/* Engagement-path tabs */}
          <div className="cta-tabs">
            {TABS.map(([key, label]) => (
              <button
                key={key}
                type="button"
                className={`cta-tab${tab === key ? ' active' : ''}`}
                onClick={() => switchTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Success panel (contact + consultation) */}
          {status === 'ok' && (tab === 'contact' || tab === 'consult') ? (
            <div className="form-success">
              <h3>Thank you — your enquiry is on its way.</h3>
              <p>
                Our team will get back to you shortly on the details you
                shared.
              </p>
              <button
                type="button"
                className="btn btn-light"
                onClick={() => setStatus('idle')}
              >
                Send Another Enquiry
              </button>
            </div>
          ) : (
            <>
              {/* Contact Us — full enquiry form */}
              {tab === 'contact' && (
                <form className="form" onSubmit={handleSubmit('contact')}>
                  <div className="field">
                    <input type="text" id="cta-name" name="name" placeholder=" " required />
                    <label htmlFor="cta-name">Full Name</label>
                  </div>
                  <div className="field">
                    <input type="email" id="cta-email" name="email" placeholder=" " required />
                    <label htmlFor="cta-email">Email</label>
                  </div>
                  <div className="field">
                    <input type="tel" id="cta-phone" name="phone" placeholder=" " />
                    <label htmlFor="cta-phone">Phone</label>
                  </div>
                  <div className="field">
                    <textarea id="cta-msg" name="message" placeholder=" " rows={1} />
                    <label htmlFor="cta-msg">Message</label>
                  </div>
                  {status === 'error' && <p className="form-error">{error}</p>}
                  <button type="submit" className="btn btn-light" disabled={sending}>
                    {sending ? 'Sending…' : 'Submit'}{' '}
                    {!sending && <span className="arrow">→</span>}
                  </button>
                </form>
              )}

              {/* Request Consultation — short callback form */}
              {tab === 'consult' && (
                <form className="form" onSubmit={handleSubmit('consultation')}>
                  <p className="cta-panel-note">
                    Ready to discuss a project? Leave your details and
                    PEHSPL&apos;s design team will call you back.
                  </p>
                  <div className="field">
                    <input type="text" id="rc-name" name="name" placeholder=" " required />
                    <label htmlFor="rc-name">Full Name</label>
                  </div>
                  <div className="field">
                    <input type="tel" id="rc-phone" name="phone" placeholder=" " required />
                    <label htmlFor="rc-phone">Phone</label>
                  </div>
                  {status === 'error' && <p className="form-error">{error}</p>}
                  <button type="submit" className="btn btn-light" disabled={sending}>
                    {sending ? 'Sending…' : 'Request Callback'}{' '}
                    {!sending && <span className="arrow">→</span>}
                  </button>
                </form>
              )}

              {/* Schedule a Discussion — calendar link */}
              {tab === 'schedule' && (
                <div>
                  <p className="cta-panel-note">
                    Lock in a specific date and time for a call or site visit
                    with our team.
                  </p>
                  {/* TODO: replace with the live calendar-booking URL */}
                  <a href="#contact" className="btn btn-light">
                    Open Scheduling Calendar <span className="arrow">→</span>
                  </a>
                </div>
              )}

              {/* Download Company Profile */}
              {tab === 'profile' && (
                <div>
                  <p className="cta-panel-note">
                    Doing early-stage research? Get the PEHSPL company profile
                    with our capabilities, certifications and delivered
                    projects.
                  </p>
                  <a
                    href={asset('/company-profile.pdf')}
                    className="btn btn-light"
                    download="PEHSPL-Company-Profile.pdf"
                  >
                    Download Profile (PDF) <span className="arrow">→</span>
                  </a>
                </div>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
