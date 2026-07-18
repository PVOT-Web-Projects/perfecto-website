'use client';

import { useEffect, useRef } from 'react';
import { asset } from '@/lib/assetPath';

/* =====================================================================
   SCROLL-DRIVEN 3D FRAME SEQUENCE
   ---------------------------------------------------------------------
   Frames live in public/frames/3d/first_section as 000.png ... 299.png.
   The section pins full-screen and vertical scroll scrubs the sequence.
   ===================================================================== */
const SCROLL_3D = {
  enabled: true,
  frameCount: 221, // frames 028 ... 299
  path: '/frames/3d/first_section/', // under /public (base path added via asset())
  startIndex: 0, // sequence starts at 028.png
  pad: 3, // 028.png
  ext: 'png',
  scrollHeightVh: 320, // scrub distance; larger = slower
};

export default function ScrollFrames() {
  const wrapRef = useRef(null);
  const canvasRef = useRef(null);

  useEffect(() => {
    const cfg = SCROLL_3D;
    const el = wrapRef.current;
    const canvas = canvasRef.current;
    if (!el || !canvas || !cfg.enabled || cfg.frameCount < 1) return; // stays a placeholder

    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    el.classList.add('is-active');
    el.style.height = cfg.scrollHeightVh + 'vh';

    const url = (i) =>
      asset(
        `${cfg.path}${String(cfg.startIndex + i).padStart(cfg.pad, '0')}.${cfg.ext}`
      );
    const images = [];
    for (let i = 0; i < cfg.frameCount; i++) {
      const img = new Image();
      img.src = url(i);
      images.push(img);
    }

    const ready = (img) => img && img.complete && img.naturalWidth > 0;

    function resize() {
      // Size the pixel buffer from the canvas's own laid-out (60%) box.
      const r = canvas.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      draw();
    }

    function currentIndex() {
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? -el.getBoundingClientRect().top / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      return Math.min(
        cfg.frameCount - 1,
        Math.round(clamped * (cfg.frameCount - 1))
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

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        draw();
        ticking = false;
      });
    }

    // Draw the first frame as soon as it loads so there's no blank flash.
    if (images[0]) images[0].addEventListener('load', resize, { once: true });
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', resize);
    resize();

    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', resize);
    };
  }, []);

  return (
    <div className="scroll3d" ref={wrapRef}>
      <div className="scroll3d__sticky">
        <canvas className="scroll3d__canvas" ref={canvasRef} />
        <div className="scroll3d__placeholder">3D SECTION</div>
        <div className="scroll3d__hint">Scroll to explore</div>
      </div>
    </div>
  );
}
