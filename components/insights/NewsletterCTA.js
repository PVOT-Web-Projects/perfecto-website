'use client';

import { useState } from 'react';
import { CONTACT_ENDPOINT, CONTACT_TO, CONTACT_CC } from '@/lib/siteConfig';

export default function NewsletterCTA() {
  const [status, setStatus] = useState('idle'); // idle | sending | ok | error
  const [error, setError] = useState('');

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget;
    const email = new FormData(form).get('email');

    if (!CONTACT_ENDPOINT) {
      // Fallback until the mailer endpoint is deployed.
      window.location.href = `mailto:${CONTACT_TO}?cc=${encodeURIComponent(
        CONTACT_CC
      )}&subject=${encodeURIComponent('Newsletter Subscription')}&body=${encodeURIComponent(
        `Please subscribe this email to PEHSPL Insights: ${email}`
      )}`;
      return;
    }

    setStatus('sending');
    setError('');
    try {
      const res = await fetch(CONTACT_ENDPOINT, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ type: 'newsletter', email }),
      });
      if (!res.ok) {
        const info = await res.json().catch(() => ({}));
        throw new Error(info.error || 'Failed to subscribe. Please try again.');
      }
      setStatus('ok');
      form.reset();
    } catch (err) {
      setStatus('error');
      setError(err.message || 'Something went wrong. Please try again.');
    }
  }

  return (
    <section id="subscribe" className="cta">
      <div
        className="wrap cta-inner reveal"
        style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}
      >
        <div className="cta-copy" style={{ maxWidth: 760, width: '100%' }}>
          <h2>
            Stay ahead of the
            <br />
            sterile space curve
          </h2>
          <p className="sub" style={{ margin: '20px auto 0' }}>
            Want to stay updated on the latest in sterile healthcare
            infrastructure?
          </p>

          {status === 'ok' ? (
            <div className="form-success" style={{ marginTop: 30 }}>
              <h3>You&apos;re on the list.</h3>
              <p>We&apos;ll send new insights straight to your inbox.</p>
            </div>
          ) : (
            <>
              <form className="nl-form" onSubmit={handleSubmit}>
                <input
                  type="email"
                  name="email"
                  placeholder="Your email address"
                  aria-label="Email address"
                  required
                />
                <button
                  type="submit"
                  className="btn btn-light"
                  disabled={status === 'sending'}
                >
                  {status === 'sending' ? 'Subscribing…' : 'Subscribe to Our Insights'}
                </button>
              </form>
              {status === 'error' && (
                <p className="form-error" style={{ marginTop: 14 }}>{error}</p>
              )}
            </>
          )}
        </div>
      </div>
    </section>
  );
}
