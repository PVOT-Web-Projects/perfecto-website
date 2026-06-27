const COLS = [
  {
    title: 'Company',
    links: [
      ['About', '#about'],
      ['Solutions', '#solutions'],
      ['Services', '#services'],
      ['Projects', '#projects'],
      ['Insights', '#insights'],
    ],
  },
  {
    title: 'Solutions',
    links: [
      ['Modular OT', '#solutions'],
      ['ICUs', '#solutions'],
      ['IVF Labs', '#solutions'],
    ],
  },
  {
    title: 'Legal',
    links: [
      ['Privacy Policy', '#'],
      ['Terms & Conditions', '#'],
    ],
  },
];

const SOCIALS = [
  ['LinkedIn', 'in'],
  ['Instagram', 'ig'],
  ['YouTube', '▶'],
  ['X', 'x'],
];

export default function Footer() {
  return (
    <footer>
      <div className="wrap">
        <div className="foot-grid">
          <div className="foot-about">
            <a href="#home" className="brand" aria-label="PEHSPL home">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                className="brand-logo"
                src="/Logo.png"
                alt="PEHSPL — Perfect Engitech & Healthcare Solutions"
              />
            </a>
            <p>
              Perfect Engitech &amp; Healthcare Solutions Private Limited, in an
              exclusive association with Nicomac Far East, was established to
              advocate for cleanroom partitions in the healthcare sector.
            </p>
            <div className="foot-social">
              {SOCIALS.map(([label, glyph]) => (
                <a href="#" key={label} aria-label={label}>
                  {glyph}
                </a>
              ))}
            </div>
          </div>

          {COLS.map((col) => (
            <div className="foot-col" key={col.title}>
              <h4>{col.title}</h4>
              <ul>
                {col.links.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="foot-bottom">
          <span>
            © 2026 Perfect Engitech &amp; Healthcare Solutions Pvt. Ltd. All
            rights reserved.
          </span>
          <span>Engineered to EU standards · Make in India</span>
        </div>
      </div>
    </footer>
  );
}
