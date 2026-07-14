const CERTS = [
  {
    title: 'EU-Certified Panel Technology',
    body: 'Manufactured to European cleanroom standards for sterility and durability.',
  },
  {
    title: 'USFDA-Compliant Systems',
    body: 'Meets US regulatory benchmarks for healthcare environments.',
  },
  {
    title: 'Infection-Free Surfaces',
    body: 'Engineered for seamless, easy-clean surface performance.',
  },
];

export default function Certifications() {
  return (
    <section className="section-pad">
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Certifications &amp; Compliance
          </h2>
          <p>
            Every system we deliver is built on globally certified technology and
            held to strict compliance standards.
          </p>
        </div>

        <div className="cert-row reveal-stagger">
          {CERTS.map((c) => (
            <div className="cert-item" key={c.title}>
              <span className="cert-check">✓</span>
              <div>
                <h4>{c.title}</h4>
                <p>{c.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
