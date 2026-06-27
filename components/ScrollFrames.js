'use client';

import { useEffect, useRef } from 'react';

/* =====================================================================
   SCROLL-DRIVEN 3D FRAME SEQUENCE
   ---------------------------------------------------------------------
   When your frames arrive, set enabled:true and fill in the details.
   Drop the frames in  public/frames/3d/  named with a zero-padded
   counter, e.g.  frame_0001.jpg ... frame_0120.jpg
   => path:'/frames/3d/', prefix:'frame_', pad:4, ext:'jpg', frameCount:120
   Tip: export ~90–150 frames as WebP/optimized JPG (1600px wide is plenty).
   ===================================================================== */
const SCROLL_3D = {
  enabled: false, // <-- flip to true once frames are in place
  frameCount: 0, // total number of frames
  path: '/frames/3d/', // folder under /public
  prefix: 'frame_', // filename prefix
  pad: 4, // zero-padding width -> frame_0001.jpg
  ext: 'jpg', // 'jpg' | 'png' | 'webp'
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

    const sticky = el.querySelector('.scroll3d__sticky');
    const ctx = canvas.getContext('2d');
    const dpr = Math.min(window.devicePixelRatio || 1, 2);

    el.classList.add('is-active');
    el.style.height = cfg.scrollHeightVh + 'vh';

    const url = (i) =>
      `${cfg.path}${cfg.prefix}${String(i).padStart(cfg.pad, '0')}.${cfg.ext}`;
    const images = [];
    for (let i = 1; i <= cfg.frameCount; i++) {
      const img = new Image();
      img.src = url(i);
      images.push(img);
    }

    function resize() {
      const r = sticky.getBoundingClientRect();
      canvas.width = Math.round(r.width * dpr);
      canvas.height = Math.round(r.height * dpr);
      draw();
    }

    function currentIndex() {
      const scrollable = el.offsetHeight - window.innerHeight;
      const progress =
        scrollable > 0 ? -el.getBoundingClientRect().top / scrollable : 0;
      const clamped = Math.min(1, Math.max(0, progress));
      return Math.min(cfg.frameCount - 1, Math.round(clamped * (cfg.frameCount - 1)));
    }

    function draw() {
      const img = images[currentIndex()];
      if (!img || !img.complete || !img.naturalWidth) return;
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
