'use client';

import { useEffect, useState } from 'react';
import { asset } from '@/lib/assetPath';

const NAV = [
  ['HOME', '#home'],
  ['ABOUT', '#about'],
  ['SOLUTIONS', '#solutions'],
  ['SERVICES', '#services'],
  ['PROJECTS', '#projects'],
  ['INSIGHTS', '#insights'],
];

export default function Header() {
  const [open, setOpen] = useState(false);
  const [hidden, setHidden] = useState(false);

  // Hide the header once scrolled beyond the hero; show it again within the hero.
  useEffect(() => {
    const hero = document.querySelector('.hero');
    if (!hero) return;
    let ticking = false;
    const update = () => {
      setHidden(hero.getBoundingClientRect().bottom < 120);
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

  // When open on mobile, drop the nav links into a panel below the card.
  const dropdownStyle = open
    ? {
        display: 'flex',
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        right: 0,
        flexDirection: 'column',
        background: '#fff',
        padding: '20px 24px',
        gap: '18px',
        borderRadius: '16px',
        boxShadow: '0 18px 40px -20px rgba(40,56,70,.25)',
      }
    : undefined;

  return (
    <header className={hidden ? 'nav-hidden' : undefined}>
      <div className="wrap">
        <div className="nav intro d1">
          <a href="#home" className="brand" aria-label="PEHSPL home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo"
              src={asset('/Logo.png')}
              alt="PEHSPL — Perfect Engitech & Healthcare Solutions"
            />
          </a>

          <nav className="nav-links" style={dropdownStyle}>
            {NAV.map(([label, href]) => (
              <a key={href} href={href} onClick={() => setOpen(false)}>
                {label}
              </a>
            ))}
          </nav>

          <a href="#contact" className="nav-cta">
            CONTACT US
          </a>

          <button
            className="menu-toggle"
            aria-label="Menu"
            aria-expanded={open}
            onClick={() => setOpen((o) => !o)}
          >
            <span />
            <span />
            <span />
          </button>
        </div>
      </div>
    </header>
  );
}
