import Link from 'next/link';
import { asset } from '@/lib/assetPath';

const COLS = [
  [
    ['About', '/about'],
    // ['Solutions', '/#solutions'],
    ['Services', '/services'],
    ['Projects', '/projects'],
    // ['Insights', '/insights'],
  ],
  [
    ['Modular OT', '/solutions/modular-operating-theatres'],
    ['ICUs', '/solutions/icus'],
    ['IVF Labs', '/solutions/ivf-labs'],
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
          <Link href="/" className="brand" aria-label="PEHSPL home">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              className="brand-logo"
              src={asset('/Logo.png')}
              alt="PEHSPL — Perfect Engitech & Healthcare Solutions"
            />
          </Link>
          <p>
            Perfect Engitech &amp; Healthcare Solutions Private Limited
            exclusively uses cleanroom panels, and was established to bring
            world-class cleanroom partition technology to the healthcare
            sector.
          </p>
          <div className="foot-social">
            {SOCIALS.map(([label, src]) => (
              <a href="#" key={label} aria-label={label}>
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img src={asset(src)} alt={label} />
              </a>
            ))}
          </div>
        </div>

        <div className="foot-contact">
          <div className="foot-contact-item">
            <span className="foot-contact-lbl">Email</span>
            <a href="mailto:info@pehspl.co.in">info@pehspl.co.in</a>
          </div>
          <div className="foot-contact-item">
            <span className="foot-contact-lbl">Contact Number</span>
            <a href="tel:+917940192417">079-40192417</a>
          </div>
          <div className="foot-contact-item">
            <span className="foot-contact-lbl">Address</span>
            <a
              href="https://maps.google.com/?q=Elanza+Crest,+Sindhu+Bhavan+Road,+Bodakdev,+Ahmedabad,+Gujarat+380059"
              target="_blank"
              rel="noopener noreferrer"
            >
              C-003/004, Elanza Crest, Sindhu Bhavan Road, behind Rajpath
              Rangoli Road, Bodakdev, Ahmedabad, Gujarat 380059
            </a>
          </div>
        </div>

        <div className="foot-links">
          {COLS.map((col, c) => (
            <div className="foot-col" key={c}>
              <ul>
                {col.map(([label, href]) => (
                  <li key={label}>
                    {href.startsWith('/') ? (
                      <Link href={href}>{label}</Link>
                    ) : (
                      <a href={href}>{label}</a>
                    )}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      <div className="foot-bottom">
        <span>
          © 2026 Perfect Engitech &amp; Healthcare Solutions Pvt. Ltd. All
          rights reserved.
        </span>
        <a
          href="https://pvotdesigns.com/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="PVOT Designs"
        >
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img className="foot-credit" src={asset('/pvot_logo.png')} alt="PVOT Designs" />
        </a>
      </div>
    </footer>
  );
}
