const STATS = [
  { num: '900+', lbl: 'Operating Theatres' },
  { num: '500+', lbl: 'ICUs Delivered' },
  { num: '50+', lbl: 'IVF Labs' },
  { num: '150+', lbl: 'Hospitals Served' },
];

export default function AboutStats() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Proven at Scale
          </h2>
          <p>
            Delivered across 150+ hospitals in India and abroad — trusted by
            leading hospital architects, consultants, and healthcare providers.
          </p>
        </div>
        <div className="stat-grid about-stats-grid reveal-stagger">
          {STATS.map((s) => (
            <div className="stat" key={s.lbl}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
