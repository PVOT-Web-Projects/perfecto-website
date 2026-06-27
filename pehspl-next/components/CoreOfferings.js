const OFFERS = [
  {
    cls: 'o1',
    title: 'Modular Operating Theatres',
    body: 'Self-standing, pre-engineered OT panels delivering EU-grade sterility, seamless surfaces and rapid, civil-free installation.',
  },
  {
    cls: 'o2',
    title: 'ICUs & Critical Care',
    body: 'Antimicrobial, easy-clean partition systems engineered for high-acuity infection-controlled environments.',
  },
  {
    cls: 'o3',
    title: 'IVF Labs',
    body: 'VOC-free, controlled-environment labs designed for embryology with precision airflow and material safety.',
  },
];

export default function CoreOfferings() {
  return (
    <section id="solutions" className="section-pad">
      <div className="wrap">
        <div className="core-head reveal">
          <span className="eyebrow">Core Offerings</span>
          <h2>End-to-end design, supply &amp; execution</h2>
          <p>
            Infection-free, sterile healthcare environments — engineered from
            concept to commissioning.
          </p>
        </div>
        <div className="offer-track reveal-stagger">
          {OFFERS.map((o) => (
            <article key={o.cls} className={`offer-card ${o.cls}`}>
              <div className="offer-body">
                <h3>{o.title}</h3>
                <p>{o.body}</p>
                <a href="#contact" className="offer-link">
                  Learn more →
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
