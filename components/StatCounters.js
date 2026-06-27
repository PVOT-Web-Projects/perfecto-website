const STATS = [
  { num: '550+', lbl: 'Operating Theatres Completed', fill: false },
  { num: '50+', lbl: 'IVF Labs Delivered', fill: false },
  { num: '150+', lbl: 'Hospitals Served in India & Abroad', fill: false },
  { num: '300+', lbl: 'SQM Manufacturing Capacity Per Day', fill: true },
];

export default function StatCounters() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap stats reveal">
        <div className="stats-left">
          <div className="stats-intro">
            <h2 className="who-title">
              <span className="who-mark" />
              Stat Counters
            </h2>
            <p className="stats-sub">
              Proven delivery at scale across hundreds of sterile healthcare
              environments.
            </p>
          </div>
          <div
            className="stats-media"
            role="img"
            aria-label="Sterile operating theatre interior"
          />
        </div>

        <div className="stat-grid reveal-stagger">
          {STATS.map((s) => (
            <div key={s.lbl} className={s.fill ? 'stat fill' : 'stat'}>
              <div className="num">{s.num}</div>
              <div className="lbl">{s.lbl}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
