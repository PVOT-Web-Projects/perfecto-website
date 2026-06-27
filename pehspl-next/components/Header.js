'use client';

import { useState } from 'react';

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
    <header>
      <div className="wrap">
        <div className="nav">
          <a href="#home" className="brand" aria-label="PEHSPL home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo"
              src="/Logo.png"
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
