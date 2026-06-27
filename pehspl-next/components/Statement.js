import ScrollFrames from '@/components/ScrollFrames';

export default function Statement() {
  return (
    <section className="statement">
      <div className="wrap reveal">
        <h2>
          Designed for sterility
          <br />
          <span className="accent">Engineered to perform</span>
          <br />
          Sterile. Seamless. Certified
        </h2>
      </div>

      {/* Scroll-frame scrubber (full-bleed when active).
          Stays a placeholder until frames are configured in ScrollFrames. */}
      <ScrollFrames />
    </section>
  );
}
