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
          <h2 className="who-title">
            <span className="who-mark" />
            Plug-and-build healthcare infrastructure, one sterile space at a time
          </h2>
          <div className="feat-grid reveal-stagger">
            {FEATURES.map((f, i) => (
              <div className="feat" key={f}>
                <span className="feat-n">{i + 1}</span>
                <p>{f}</p>
              </div>
            ))}
          </div>
          <a href="#solutions" className="btn btn-primary">
            Explore Our Solutions
          </a>
        </div>
        <div className="ph-box">3D SECTION</div>
      </div>
    </section>
  );
}
