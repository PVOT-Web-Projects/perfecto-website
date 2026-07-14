'use client';

import { useEffect, useRef } from 'react';

const LINES = [
  { text: 'Infection-free, sterile' },
  { text: 'healthcare infrastructure —', accent: true },
  { text: 'accessible, fast, built to last.' },
];

const THRESHOLDS = [0.04, 0.34, 0.62];

export default function MissionReveal() {
  const trackRef = useRef(null);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;
    const lines = track.querySelectorAll('.statement-heading .line');
    let ticking = false;

    function update() {
      const scrollable = track.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollable))
          : 0;
      lines.forEach((line, i) =>
        line.classList.toggle('show', progress >= THRESHOLDS[i])
      );
      ticking = false;
    }

    function onScroll() {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  return (
    <section className="statement" style={{ background: 'var(--bg-soft)' }}>
      <div className="statement-track" ref={trackRef}>
        <div className="statement-sticky">
          <div className="wrap">
            <span
              className="eyebrow"
              style={{ display: 'flex', justifyContent: 'center', marginBottom: 26 }}
            >
              Our Mission
            </span>
            <h2 className="statement-heading">
              {LINES.map((l, i) => (
                <span key={i} className={l.accent ? 'line accent' : 'line'}>
                  {l.text}
                </span>
              ))}
            </h2>
          </div>
        </div>
      </div>
    </section>
  );
}
