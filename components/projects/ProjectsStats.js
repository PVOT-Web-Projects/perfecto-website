'use client';

import { useEffect, useRef } from 'react';

const STATS = [
  [900, 'Operating Theatres Completed'],
  [450, 'ICUs'],
  [50, 'IVF Labs Delivered'],
  [150, 'Hospitals Served'],
];

export default function ProjectsStats() {
  const ref = useRef(null);

  // Count each number up from 0 the first time the band scrolls into view.
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const nums = el.querySelectorAll('.pstat-num');
    const reduce = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (!entry.isIntersecting) return;
          io.disconnect();
          nums.forEach((n) => {
            const target = Number(n.dataset.target);
            if (reduce) {
              n.textContent = `${target}+`;
              return;
            }
            const t0 = performance.now();
            const dur = 1400;
            const tick = (t) => {
              const p = Math.min(1, (t - t0) / dur);
              const eased = 1 - Math.pow(1 - p, 3);
              n.textContent = `${Math.round(eased * target)}+`;
              if (p < 1) requestAnimationFrame(tick);
            };
            requestAnimationFrame(tick);
          });
        });
      },
      { threshold: 0.35 }
    );

    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <section className="pstats" ref={ref}>
      <div className="wrap pstats-row">
        {STATS.map(([num, lbl]) => (
          <div className="pstat" key={lbl}>
            <div className="pstat-num" data-target={num}>
              0+
            </div>
            <div className="pstat-lbl">{lbl}</div>
          </div>
        ))}
      </div>
    </section>
  );
}
