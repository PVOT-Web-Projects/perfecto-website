const HIGHLIGHTS = [
  'Exclusive association with Nicomac Far East',
  '550+ operating theatres delivered',
  'EU-certified, USFDA-compliant systems',
  'In-house design, build & execution',
];

export default function WhoWeAre() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap who reveal">
        <div>
          <h2 className="who-title">
            <span className="who-mark" />
            Who We Are
          </h2>
          <p className="lead">
            Perfect Engitech &amp; Healthcare Solutions Pvt. Ltd. (PEHSPL), in
            exclusive association with Nicomac Far East, was established to bring
            world-class cleanroom partition technology to the healthcare sector.
          </p>
          <p>
            With over 550 operating theatres and 50 IVF labs delivered across
            150+ hospitals in India and abroad, we bring deep expertise in OT
            complex design, patient flow and systems integration — working
            alongside India&apos;s leading hospital architects and consultants.
          </p>
          <p>
            From concept and design through supply, installation and
            commissioning, we deliver turnkey infection-control environments —
            engineered to European standards and built to perform for decades.
          </p>
          <ul className="who-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <span className="hl-ico">✓</span>
                {h}
              </li>
            ))}
          </ul>
          <a href="#about" className="text-link">
            Know More
          </a>
        </div>
        <div
          className="media"
          role="img"
          aria-label="Sterile operating theatre interior"
        />
      </div>
    </section>
  );
}
