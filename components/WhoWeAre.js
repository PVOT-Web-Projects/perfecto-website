import Link from 'next/link';
import { asset } from '@/lib/assetPath';

export default function WhoWeAre() {
  return (
    <section id="about" className="section-pad">
      <div className="wrap who reveal">
        <div>
          <h2 className="who-title">
            <span className="who-mark" />
            Who We Are
          </h2>
          <h3 className="who-sub">
            India&apos;s Trusted Name in Cleanroom Healthcare Infrastructure
          </h3>
          <p className="lead">
            Perfect Engitech &amp; Healthcare Solutions Pvt. Ltd. (PEHSPL)
            designs and executes projects for modular operation theatres, ICUs
            and IVF labs across India, using exclusive cleanroom panels.
          </p>
          <p>
            With over <strong>900 operating theatres</strong>,{' '}
            <strong>450+ ICUs</strong> and <strong>50+ IVF labs</strong>{' '}
            delivered across <strong>150+ hospitals</strong> in India and
            abroad, our work goes far beyond panels and partitions. We bring
            deep expertise in OT complex design, patient flow planning and
            systems integration — collaborating closely with India&apos;s
            leading hospital architects and consultants to deliver
            infection-free, sterile environments that perform for decades.
          </p>
          <p>
            Because we use only genuine panels, every project carries
            the same EU-certified quality benchmark, batch after batch,
            hospital after hospital.
          </p>
          <div className="about-cta-actions" style={{ marginTop: 24 }}>
            <Link href="/about" className="btn btn-primary">
              Know More
            </Link>
            <a
              href={asset('/company-profile.pdf')}
              className="btn btn-ghost"
              download="PEHSPL-Company-Profile.pdf"
            >
              Download Company Profile
            </a>
          </div>
        </div>
        <div
          className="media"
          role="img"
          aria-label="Modular operating theatre by PEHSPL built with cleanroom panels"
        />
      </div>
    </section>
  );
}
