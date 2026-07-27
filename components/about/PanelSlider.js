'use client';

import { useEffect, useRef, useState } from 'react';

const BENEFITS = [
  {
    title: 'EU-Certified Sterility',
    body: 'EU-manufactured panel technology consistently meets the sterility benchmarks our projects demand.',
    icon: (
      <>
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Long-Term Durability',
    body: 'A single, proven panel system built to last — with predictable performance across every space.',
    icon: (
      <>
        <path d="M12 3l8 4.5v9L12 21l-8-4.5v-9z" />
        <path d="M12 12l8-4.5M12 12v9M12 12L4 7.5" />
      </>
    ),
  },
  {
    title: 'Full Compliance',
    body: 'EU-certified and USFDA-compliant technology that clears the toughest regulatory benchmarks.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M8.5 12.5l2.2 2.2 4.8-4.8" />
      </>
    ),
  },
  {
    title: 'Consistent Quality',
    body: 'Standardizing on one system means the same trusted quality in every OT, ICU, and IVF lab.',
    icon: (
      <>
        <rect x="4" y="4" width="7" height="7" rx="1" />
        <rect x="13" y="4" width="7" height="7" rx="1" />
        <rect x="4" y="13" width="7" height="7" rx="1" />
        <rect x="13" y="13" width="7" height="7" rx="1" />
      </>
    ),
  },
  {
    title: 'Predictable Performance',
    body: 'One panel standard removes surprises — timelines, sterility, and finish are engineered upfront.',
    icon: (
      <>
        <path d="M3 17a9 9 0 0 1 18 0" />
        <path d="M12 17l4-4" />
        <circle cx="12" cy="17" r="1.4" />
      </>
    ),
  },
  {
    title: 'Simpler Maintenance',
    body: 'A single system means simpler, more affordable long-term maintenance for every hospital.',
    icon: (
      <path d="M14.5 6.5a3.5 3.5 0 0 0-4.9 4.2l-5.3 5.3a1.5 1.5 0 0 0 2.1 2.1l5.3-5.3a3.5 3.5 0 0 0 4.2-4.9l-2 2-1.8-1.8z" />
    ),
  },
];

export default function PanelSlider() {
  const trackRef = useRef(null);
  const [active, setActive] = useState(0);

  function nearestIndex() {
    const sc = trackRef.current;
    if (!sc) return 0;
    const cards = Array.from(sc.children);
    const base = cards[0].offsetLeft;
    let best = 0;
    let bd = Infinity;
    cards.forEach((c, i) => {
      const d = Math.abs(c.offsetLeft - base - sc.scrollLeft);
      if (d < bd) {
        bd = d;
        best = i;
      }
    });
    return best;
  }

  function go(i) {
    const sc = trackRef.current;
    if (!sc) return;
    const cards = Array.from(sc.children);
    const clamped = Math.max(0, Math.min(cards.length - 1, i));
    const base = cards[0].offsetLeft;
    sc.scrollTo({ left: cards[clamped].offsetLeft - base, behavior: 'smooth' });
  }

  useEffect(() => {
    const sc = trackRef.current;
    if (!sc) return;
    let ticking = false;
    const onScroll = () => {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        setActive(nearestIndex());
        ticking = false;
      });
    };
    sc.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      sc.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Why We Use Cleanroom Panels — Exclusively
          </h2>
          <p>
            By standardizing on a single, proven EU-manufactured system, PEHSPL
            ensures consistent quality, predictable performance, and simpler
            long-term maintenance across every project we deliver.
          </p>
        </div>

        <div className="reveal">
          <div className="nico-viewport" ref={trackRef}>
            {BENEFITS.map((b) => (
              <article className="nico-card" key={b.title}>
                <div className="nc-ico">
                  <svg
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    {b.icon}
                  </svg>
                </div>
                <h3>{b.title}</h3>
                <p>{b.body}</p>
              </article>
            ))}
          </div>

          <div className="nico-nav">
            <div className="nico-dots">
              {BENEFITS.map((b, i) => (
                <button
                  key={b.title}
                  type="button"
                  className={`nico-dot${i === active ? ' active' : ''}`}
                  aria-label={`Go to benefit ${i + 1}`}
                  onClick={() => go(i)}
                />
              ))}
            </div>
            <div className="nico-arrows">
              <button
                className="nico-arrow"
                type="button"
                aria-label="Previous"
                disabled={active === 0}
                onClick={() => go(active - 1)}
              >
                ←
              </button>
              <button
                className="nico-arrow"
                type="button"
                aria-label="Next"
                disabled={active === BENEFITS.length - 1}
                onClick={() => go(active + 1)}
              >
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
