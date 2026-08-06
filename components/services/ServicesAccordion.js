'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/servicesData';

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0); // first service expanded by default

  const toggle = (i) => setOpen(i === open ? -1 : i);

  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Our Services
          </h2>
          <p>
            Six ways we keep your sterile spaces performing — delivered by the
            same in-house team that built them.
          </p>
        </div>

        <div className="svc-layout reveal">
          {/* Accordion list */}
          <div className="svc-acc">
            {SERVICES.map((s, i) => (
              <div className={`svc-item${open === i ? ' open' : ''}`} key={s.title}>
                <button
                  type="button"
                  className="svc-head"
                  aria-expanded={open === i}
                  onClick={() => toggle(i)}
                >
                  <span className="svc-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{s.title}</h3>
                  <span className="svc-plus">+</span>
                </button>
                <div className="svc-body" role="region">
                  <div className="svc-body-inner">
                    <div
                      className="svc-inline-img"
                      style={{ backgroundImage: `url(${s.img})` }}
                    />
                    <p>{s.intro}</p>
                    <div className="svc-cover">{s.coverLabel}</div>
                    <ul className="svc-list">
                      {s.points.map((p) => (
                        <li key={p}>
                          <span className="hl-ico">✓</span>
                          {p}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Sticky image (desktop) — static overview illustration */}
          <div className="svc-media" aria-hidden="true">
            <div
              className="svc-media-img active"
              style={{ backgroundImage: `url(${SERVICES[0].img})` }}
            />
          </div>
        </div>
      </div>
    </section>
  );
}
