'use client';

import { useState } from 'react';
import { SERVICES } from '@/lib/servicesData';

export default function ServicesAccordion() {
  const [open, setOpen] = useState(0); // first service expanded by default
  const [mediaIdx, setMediaIdx] = useState(0); // image shown in the sticky panel

  const toggle = (i) => {
    if (i === open) {
      setOpen(-1); // collapse; keep showing the last image
      return;
    }
    setOpen(i);
    setMediaIdx(i);
  };

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

          {/* Sticky crossfading image (desktop) */}
          <div className="svc-media" aria-hidden="true">
            {SERVICES.map((s, i) => (
              <div
                key={s.title}
                className={`svc-media-img${mediaIdx === i ? ' active' : ''}`}
                style={{ backgroundImage: `url(${s.img})` }}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
