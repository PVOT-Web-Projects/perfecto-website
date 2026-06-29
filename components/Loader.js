'use client';

import { useEffect, useState } from 'react';
import { asset } from '@/lib/assetPath';

const MIN_MS = 2000; // minimum time the loader stays on screen

export default function Loader() {
  const [hidden, setHidden] = useState(false);

  useEffect(() => {
    let timer;
    const reveal = () => {
      const wait = Math.max(0, MIN_MS - performance.now());
      timer = setTimeout(() => {
        setHidden(true);
        document.body.classList.add('loaded');
      }, wait);
    };

    if (document.readyState === 'complete') reveal();
    else window.addEventListener('load', reveal, { once: true });

    return () => {
      clearTimeout(timer);
      window.removeEventListener('load', reveal);
    };
  }, []);

  return (
    <div className={`loader${hidden ? ' hidden' : ''}`} aria-hidden={hidden}>
      <div className="loader-inner">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img className="loader-logo" src={asset('/Logo.png')} alt="PEHSPL" />
        <div className="loader-bar">
          <span />
        </div>
      </div>
    </div>
  );
}
