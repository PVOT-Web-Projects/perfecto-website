const ROWS = [
  {
    dir: 'left',
    logos: ['Aster', 'Amrita Hospitals', 'Sakra World', 'Zydus Hospitals', 'Apollo', 'Sigma', 'Manipal', 'HCG'],
  },
  {
    dir: 'right',
    logos: ['Narayana', 'CIMS', 'AIIMS', 'Aster', 'Amrita Hospitals', 'Sakra World', 'Zydus Hospitals', 'Apollo'],
  },
  {
    dir: 'left',
    logos: ['Manipal', 'HCG', 'Narayana', 'CIMS', 'Sigma', 'AIIMS', 'Aster', 'Zydus Hospitals'],
  },
];

export default function TrustedBy() {
  return (
    <section
      id="insights"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="wrap">
        <h2 className="who-title trusted-title reveal">
          <span className="who-mark" />
          Trusted By India&apos;s Leading Hospital Groups
        </h2>
      </div>
      <div className="marquee-wrap reveal">
        {ROWS.map((row, r) => (
          <div className={`marquee${row.dir === 'right' ? ' right' : ''}`} key={r}>
            <div className="marquee-track">
              {/* rendered twice so the scroll loops seamlessly */}
              {[...row.logos, ...row.logos].map((name, k) => (
                <div className="logo-chip" key={`${name}-${k}`}>
                  {name}
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
