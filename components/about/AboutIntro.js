import { asset } from '@/lib/assetPath';

const HIGHLIGHTS = [
  'Exclusive Nicomac EU-certified panels',
  'Modular OTs, ICUs & IVF labs',
  'Zero civil-work dependency',
  'In-house design & installation',
];

export default function AboutIntro() {
  return (
    <section id="who" className="section-pad">
      <div className="wrap who reveal">
        <div>
          <h2 className="who-title">
            <span className="who-mark" />
            Who We Are
          </h2>
          <p className="lead">
            Perfect Engitech &amp; Healthcare Solutions Pvt. Ltd. (PEHSPL) was
            established to bring world-class cleanroom partition technology to
            India&apos;s healthcare sector. We exclusively use Nicomac panels,
            ensuring every project is built on a single, EU-certified panel
            system from end to end.
          </p>
          <p>
            We specialize in the design and execution of modular operating
            theatres, ICUs, and IVF labs — engineered to EU standards and built
            for the realities of Indian hospital construction: faster timelines,
            zero civil-work dependency, and infection control that doesn&apos;t
            compromise.
          </p>
          <ul className="who-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <span className="hl-ico">✓</span>
                {h}
              </li>
            ))}
          </ul>
          <a href="/#solutions" className="text-link">
            Explore Our Solutions
          </a>
        </div>
        <div
          className="media"
          role="img"
          aria-label="Modular operating theatre interior"
          style={{
            background: `url(${asset('/2nd_section.png')}) center/cover`,
            borderBottom: 0,
          }}
        />
      </div>
    </section>
  );
}
