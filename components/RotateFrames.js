'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/assetPath';

/* =====================================================================
   ROTATING 3D FRAME SEQUENCE (Plug-and-Build section)
   ---------------------------------------------------------------------
   Frames live in public/frames/rotate as 000.png ... 299.png.
   The parent .plug-track pins the section; scroll progress through the
   track scrubs the rotation while the left content stays in place.
   Outside a track (e.g. stacked mobile layout), it scrubs based on the
   element's own journey through the viewport instead.
   ===================================================================== */
const ROTATE = {
  frameCount: 291,
  path: '/frames/rotate/',
  startIndex: 0,
  pad: 3,
  ext: 'webp',
};

export default function RotateFrames() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cfg = ROTATE;
    const el = wrapRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas) return;

    const track = el.closest('.plug-track');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    const url = (i) =>
      asset(
        `${cfg.path}${String(cfg.startIndex + i).padStart(cfg.pad, '0')}.${cfg.ext}`
      );
    // Frames load in coarse-to-fine waves, and only once the visitor gets
    // near this section (see the IntersectionObserver below) so they don't
    // compete with the hero/first-section downloads on page load.
    const images = new Array(cfg.frameCount).fill(null);
    let disposed = false;

    function loadFrames(indices, next) {
      let pending = 0;
      const settle = () => {
        if (--pending === 0 && !disposed) {
          draw();
          if (next) next();
        }
      };
      indices.forEach((i) => {
        if (images[i]) return;
        const img = new Image();
        images[i] = img;
        pending++;
        img.onload = i === 0 ? () => { resize(); settle(); } : settle;
        img.onerror = settle;
        img.src = url(i);
      });
      if (pending === 0 && next) next();
    }
    const every = (step) => {
      const list = [];
      for (let i = 0; i < cfg.frameCount; i += step) list.push(i);
      list.push(cfg.frameCount - 1);
      return list;
    };
    const startLoading = () =>
      loadFrames(every(16), () => loadFrames(every(4), () => loadFrames(every(1))));

    const ready = (img) => img && img.complete && img.naturalWidth > 0;

    function progress() {
      if (track) {
        const scrollable = track.offsetHeight - window.innerHeight;
        if (scrollable > 60) {
          return Math.min(
            1,
            Math.max(0, -track.getBoundingClientRect().top / scrollable)
          );
        }
      }
      // Fallback: scrub across the element's own pass through the viewport.
      const r = el.getBoundingClientRect();
      const total = window.innerHeight + r.height;
      return Math.min(1, Math.max(0, (window.innerHeight - r.top) / total));
    }

    function currentIndex() {
      return Math.min(
        cfg.frameCount - 1,
        Math.round(progress() * (cfg.frameCount - 1))
      );
    }

    function draw() {
      // Fall back to the nearest loaded frame so fast scrolling never blanks.
      let i = currentIndex();
      while (i > 0 && !ready(images[i])) i--;
      const img = images[i];
      if (!ready(img)) return;
      const cw = canvas.width;
      const ch = canvas.height;
      ctx.clearRect(0, 0, cw, ch);
      const ir = img.naturalWidth / img.naturalHeight;
      const cr = cw / ch;
      let w, h;
      if (ir > cr) {
        w = cw;
        h = cw / ir;
      } else {
        h = ch;
        w = ch * ir;
      }
      ctx.drawImage(img, (cw - w) / 2, (ch - h) / 2, w, h);
    }

    function resize() {
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      draw();
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        draw();
        ticking = false;
      });
    }

    // Kick off frame downloads when the section is within ~1.5 viewports.
    let io = null;
    if ('IntersectionObserver' in window) {
      io = new IntersectionObserver(
        (entries) => {
          if (entries.some((e) => e.isIntersecting)) {
            io.disconnect();
            io = null;
            startLoading();
          }
        },
        { rootMargin: '150% 0%' }
      );
      io.observe(track || el);
    } else {
      startLoading();
    }

    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    return () => {
      disposed = true;
      if (io) io.disconnect();
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="rotate-frames" ref={wrapRef}>
      <canvas ref={canvasRef} aria-label="Rotating cleanroom panel system" />
    </div>
  );
}
