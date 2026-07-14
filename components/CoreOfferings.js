'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';

const OFFERS = [
  {
    cls: 'o1',
    title: 'Modular Operating Theatres',
    href: '/solutions/modular-operating-theatres',
    body: 'We design and execute modular operating theatre projects using EU-certified, USFDA-compliant Nicomac panels. Our self-standing HPL, PCGS and glass panel systems eliminate civil work delays, deliver hermetically sealed, easy-clean surfaces, and are engineered for fast-track hospital projects without compromising sterility or finish.',
  },
  {
    cls: 'o2',
    title: 'ICUs',
    href: '/solutions/icus',
    body: 'Specialised cleanroom infrastructure for general ICUs, transplant units and HSCT (Hematopoietic Stem Cell Transplant) wards. We design pressure-controlled, infection-free environments with integrated HVAC, monitoring and patient-flow planning that meet the demanding hygiene standards of critical care.',
  },
  {
    cls: 'o3',
    title: 'IVF Labs',
    href: '/solutions/ivf-labs',
    body: 'Class 10,000 cleanroom infrastructure for IVF units, including embryology labs and transfer rooms. Built to the precise air quality, temperature and contamination-control standards that protect embryo viability and lab outcomes.',
  },
];

export default function CoreOfferings() {
  const trackRef = useRef(null);
  const viewportRef = useRef(null);
  const rowRef = useRef(null);
  const [active, setActive] = useState(0);

  // Drive the horizontal translate from the vertical scroll position while pinned.
  useEffect(() => {
    const track = trackRef.current;
    const viewport = viewportRef.current;
    const row = rowRef.current;
    if (!track || !viewport || !row) return;

    let ticking = false;
    const maxShift = () => Math.max(0, row.scrollWidth - viewport.clientWidth);
    const update = () => {
      const scrollable = track.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0
          ? Math.min(1, Math.max(0, -track.getBoundingClientRect().top / scrollable))
          : 0;
      row.style.transform = `translate3d(${-progress * maxShift()}px,0,0)`;
      setActive(Math.round(progress * (OFFERS.length - 1)));
      ticking = false;
    };
    const onScroll = () => {
      if (!ticking) {
        ticking = true;
        requestAnimationFrame(update);
      }
    };

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    update();
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, []);

  const goTo = (i) => {
    const track = trackRef.current;
    if (!track) return;
    const scrollable = track.offsetHeight - window.innerHeight;
    const p = OFFERS.length > 1 ? i / (OFFERS.length - 1) : 0;
    window.scrollTo({ top: track.offsetTop + p * scrollable, behavior: 'smooth' });
  };

  return (
    <section id="solutions" className="offers">
      <div className="offers-track" ref={trackRef}>
        <div className="offers-sticky">
          <div className="wrap offers-head">
            <div className="core-head">
              <h2>Core Offerings</h2>
              <p>
                End-to-End Design and Execution of Infection-Free, Sterile
                Healthcare Environments
              </p>
            </div>
          </div>

          <div className="offers-viewport" ref={viewportRef}>
            <div className="offers-row" ref={rowRef}>
              {OFFERS.map((o) => (
                <article className="offer-slide" key={o.cls}>
                  <div className="offer-head">
                    <h3>{o.title}</h3>
                  </div>
                  <div className={`offer-visual ${o.cls}`}>
                    <div className="offer-overlay">
                      <p>{o.body}</p>
                      <Link href={o.href} className="offer-btn">
                        Learn more
                      </Link>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>

          <div className="offer-dots offers-dots">
            {OFFERS.map((o, i) => (
              <button
                key={o.cls}
                type="button"
                className={`offer-dot${i === active ? ' active' : ''}`}
                aria-label={`Go to offering ${i + 1}`}
                onClick={() => goTo(i)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
