const STATS = [
  { num: '550+', lbl: 'Operating Theatres Completed', fill: false },
  { num: '50+', lbl: 'IVF Labs Delivered', fill: true },
  { num: '150+', lbl: 'Hospitals Served in India & Abroad', fill: true },
  { num: '300+', lbl: 'SQM Manufacturing Capacity Per Day', fill: false },
];

export default function StatCounters() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap stats reveal">
        <div className="stats-intro">
          <span className="eyebrow">Stat Counters</span>
          <h2>Proven at scale, certified by results</h2>
          <p>
            Numbers that reflect deep expertise across hundreds of sterile
            healthcare environments.
          </p>
        </div>
        <div className="stat-grid">
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
