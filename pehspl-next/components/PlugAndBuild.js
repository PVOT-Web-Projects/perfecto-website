const FEATURES = [
  'Faster than civil construction',
  'Hassle-free site installation',
  'EU certified, USFDA compliant',
  'Infection-free, easy-clean surfaces',
  'Patented panel profiles',
  'Lower lifetime cost',
];

export default function PlugAndBuild() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap plug reveal">
        <div>
          <span className="eyebrow">The PEHSPL Advantage</span>
          <h2>
            Plug-and-build healthcare infrastructure, one sterile space at a time
          </h2>
          <div className="feat-grid">
            {FEATURES.map((f, i) => (
              <div className="feat" key={f}>
                <div className="n">{i + 1}</div>
                <p>{f}</p>
              </div>
            ))}
          </div>
          <a href="#solutions" className="btn btn-primary">
            Explore Our Solutions <span className="arrow">→</span>
          </a>
        </div>
        <div className="ph-box">3D SECTION</div>
      </div>
    </section>
  );
}
