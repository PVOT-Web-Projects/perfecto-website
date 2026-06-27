const COLS = [
  [
    ['About', '#about'],
    ['Solutions', '#solutions'],
    ['Services', '#services'],
    ['Projects', '#projects'],
    ['Insights', '#insights'],
  ],
  [
    ['Modular OT', '#solutions'],
    ['ICUs', '#solutions'],
    ['IVF Labs', '#solutions'],
  ],
  [
    ['Privacy Policy', '#'],
    ['Terms & Conditions', '#'],
  ],
];

const SOCIALS = [
  ['X', '/x.png'],
  ['LinkedIn', '/linkedin.png'],
  ['Instagram', '/instagram.png'],
  ['Facebook', '/facebook.png'],
];

export default function Footer() {
  return (
    <footer>
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
            {SOCIALS.map(([label, src]) => (
              <a href="#" key={label} aria-label={label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={src} alt={label} />
              </a>
            ))}
          </div>
        </div>

        <div className="foot-links">
          {COLS.map((col, c) => (
            <div className="foot-col" key={c}>
              <ul>
                {col.map(([label, href]) => (
                  <li key={label}>
                    <a href={href}>{label}</a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </footer>
  );
}
