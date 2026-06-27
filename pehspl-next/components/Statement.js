'use client';

import { useEffect, useRef } from 'react';
import ScrollFrames from '@/components/ScrollFrames';

const LINES = [
  { text: 'Designed for sterility', accent: false },
  { text: 'Engineered to perform', accent: true },
  { text: 'Sterile. Seamless. Certified', accent: false },
];

// Scroll progress at which each line appears.
const THRESHOLDS = [0.04, 0.34, 0.62];

export default function Statement() {
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
      lines.forEach((line, i) => line.classList.toggle('show', progress >= THRESHOLDS[i]));
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
    <section className="statement">
      <div className="statement-track" ref={trackRef}>
        <div className="statement-sticky">
          <div className="wrap">
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

      {/* Scroll-frame scrubber (placeholder until frames are configured) */}
      <ScrollFrames />
    </section>
  );
}
