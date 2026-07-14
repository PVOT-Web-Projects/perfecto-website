'use client';

import { useEffect } from 'react';
import { usePathname } from 'next/navigation';

/**
 * Mounted once in the root layout: reveals every `.reveal` / `.reveal-stagger`
 * element as it scrolls into view. Re-runs on route change so newly-rendered
 * page content (e.g. /about) is observed too.
 */
export default function ScrollReveal() {
  const pathname = usePathname();

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) {
            e.target.classList.add('in');
            io.unobserve(e.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    document
      .querySelectorAll('.reveal, .reveal-stagger')
      .forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [pathname]);

  return null;
}
