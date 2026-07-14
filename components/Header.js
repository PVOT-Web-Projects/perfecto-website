'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { asset } from '@/lib/assetPath';

const SOLUTION_LINKS = [
  ['Modular Operating Theatres', '/solutions/modular-operating-theatres'],
  ['ICUs', '/solutions/icus'],
  ['IVF Labs', '/solutions/ivf-labs'],
];

export default function Header() {
  const [open, setOpen] = useState(false); // mobile menu panel
  const [subOpen, setSubOpen] = useState(false); // solutions submenu
  const [hidden, setHidden] = useState(false);
  const pathname = usePathname();

  const closeAll = () => {
    setOpen(false);
    setSubOpen(false);
  };

  // Hide the header once scrolled beyond the hero; re-evaluate on route change.
  useEffect(() => {
    const hero = document.querySelector('.hero, .about-hero');
    if (!hero) {
      setHidden(false);
      return;
    }
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
  }, [pathname]);

  // Close the submenu when navigating.
  useEffect(() => {
    closeAll();
  }, [pathname]);

  // When open on mobile, drop the nav links into a panel below the card.
  const dropdownStyle = open
    ? {
        display: 'flex',
        position: 'absolute',
        top: 'calc(100% + 8px)',
        left: 0,
        right: 0,
        flexDirection: 'column',
        alignItems: 'flex-start',
        background: '#fff',
        padding: '20px 24px',
        gap: '18px',
        borderRadius: '16px',
        boxShadow: '0 18px 40px -20px rgba(40,56,70,.25)',
      }
    : undefined;

  const navItemClass = `nav-item${subOpen ? ' open' : ''}${open ? ' static' : ''}`;

  return (
    <header className={hidden ? 'nav-hidden' : undefined}>
      <div className="wrap">
        <div className="nav intro d1">
          <Link href="/" className="brand" aria-label="PEHSPL home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo"
              src={asset('/Logo.png')}
              alt="PEHSPL — Perfect Engitech & Healthcare Solutions"
            />
          </Link>

          <nav className="nav-links" style={dropdownStyle}>
            <Link href="/" onClick={closeAll}>
              HOME
            </Link>
            <Link href="/about" onClick={closeAll}>
              ABOUT
            </Link>

            <div
              className={navItemClass}
              onMouseEnter={() => !open && setSubOpen(true)}
              onMouseLeave={() => !open && setSubOpen(false)}
            >
              <button
                type="button"
                className="nav-sub-toggle"
                aria-expanded={subOpen}
                aria-haspopup="true"
                onClick={() => setSubOpen((o) => !o)}
              >
                SOLUTIONS <span className="nav-caret">▼</span>
              </button>
              <div className="nav-sub">
                <div className="nav-sub-card">
                  {SOLUTION_LINKS.map(([label, href]) => (
                    <Link key={href} href={href} onClick={closeAll}>
                      {label}
                    </Link>
                  ))}
                </div>
              </div>
            </div>

            <Link href="/services" onClick={closeAll}>
              SERVICES
            </Link>
            <Link href="/projects" onClick={closeAll}>
              PROJECTS
            </Link>
            <Link href="/insights" onClick={closeAll}>
              INSIGHTS
            </Link>
          </nav>

          <Link href="/#contact" className="nav-cta">
            CONTACT US
          </Link>

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
