import { asset } from '@/lib/assetPath';

const HIGHLIGHTS = [
  'Scheduled preventive maintenance',
  'Rapid-response repairs & support',
  'Upgrades without full rebuilds',
  'Serviced by the team that built it',
];

export default function ServicesIntro() {
  return (
    <section id="intro" className="section-pad">
      <div className="wrap who reveal">
        <div>
          <h2 className="who-title">
            <span className="who-mark" />
            Beyond Handover
          </h2>
          <p className="lead">
            PEHSPL&apos;s relationship with a hospital doesn&apos;t end at
            handover. Our post-sales services are designed to protect the
            performance, compliance, and longevity of every sterile space we
            build.
          </p>
          <p>
            Scheduled maintenance, upgrades, and expert on-call support — all
            delivered by the same in-house team that installed your space, so
            nothing gets lost between contractors.
          </p>
          <ul className="who-highlights">
            {HIGHLIGHTS.map((h) => (
              <li key={h}>
                <span className="hl-ico">✓</span>
                {h}
              </li>
            ))}
          </ul>
          <a href="/#contact" className="text-link">
            Talk to Our Service Team
          </a>
        </div>
        <div
          className="media"
          role="img"
          aria-label="Sterile modular operating theatre maintained by PEHSPL"
          style={{
            background: `url(${asset('/2nd_section.png')}) center/cover`,
            borderBottom: 0,
          }}
        />
      </div>
    </section>
  );
}
