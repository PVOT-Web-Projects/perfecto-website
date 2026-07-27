'use client';

import { useState } from 'react';
import { asset } from '@/lib/assetPath';

const TABS = [
  ['contact', 'Contact Us'],
  ['consult', 'Request Consultation'],
  ['schedule', 'Schedule a Discussion'],
  ['profile', 'Download Company Profile'],
];

export default function ContactCTA() {
  const [tab, setTab] = useState('contact');

  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your form/email backend (e.g. an API route or service).
  }

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
                onClick={() => setTab(key)}
              >
                {label}
              </button>
            ))}
          </div>

          {/* Contact Us — full enquiry form */}
          {tab === 'contact' && (
            <form className="form" onSubmit={handleSubmit}>
              <div className="field">
                <input type="text" id="cta-name" placeholder=" " required />
                <label htmlFor="cta-name">Full Name</label>
              </div>
              <div className="field">
                <input type="email" id="cta-email" placeholder=" " required />
                <label htmlFor="cta-email">Email</label>
              </div>
              <div className="field">
                <input type="tel" id="cta-phone" placeholder=" " />
                <label htmlFor="cta-phone">Phone</label>
              </div>
              <div className="field">
                <textarea id="cta-msg" placeholder=" " rows={1} />
                <label htmlFor="cta-msg">Message</label>
              </div>
              <button type="submit" className="btn btn-light">
                Submit <span className="arrow">→</span>
              </button>
            </form>
          )}

          {/* Request Consultation — short callback form */}
          {tab === 'consult' && (
            <form className="form" onSubmit={handleSubmit}>
              <p className="cta-panel-note">
                Ready to discuss a project? Leave your details and PEHSPL&apos;s
                design team will call you back.
              </p>
              <div className="field">
                <input type="text" id="rc-name" placeholder=" " required />
                <label htmlFor="rc-name">Full Name</label>
              </div>
              <div className="field">
                <input type="tel" id="rc-phone" placeholder=" " required />
                <label htmlFor="rc-phone">Phone</label>
              </div>
              <button type="submit" className="btn btn-light">
                Request Callback <span className="arrow">→</span>
              </button>
            </form>
          )}

          {/* Schedule a Discussion — calendar link */}
          {tab === 'schedule' && (
            <div>
              <p className="cta-panel-note">
                Lock in a specific date and time for a call or site visit with
                our team.
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
                Doing early-stage research? Get the PEHSPL company profile with
                our capabilities, certifications and delivered projects.
              </p>
              <a
                href={asset('/company-profile.pdf')}
                className="btn btn-light"
                download
              >
                Download Profile (PDF) <span className="arrow">→</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
