const LOGOS = [
  'Aster',
  'Apollo',
  'Fortis',
  'CIMS',
  'Manipal',
  'Aster',
  'HCG',
  'Cytecare',
  'Narayana',
  'Zydus',
];

export default function TrustedBy() {
  return (
    <section
      id="insights"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="wrap trusted reveal">
        <span className="eyebrow">Trusted By</span>
        <div className="logo-row">
          {LOGOS.map((name, i) => (
            <div className="logo-chip" key={`${name}-${i}`}>
              {name}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
