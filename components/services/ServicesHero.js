import { asset } from '@/lib/assetPath';

export default function ServicesHero() {
  return (
    <section className="about-hero">
      <div className="wrap">
        <div
          className="about-hero-card"
          style={{
            background: `linear-gradient(90deg, rgba(18,27,36,.82) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${asset('/pages/service/Service_Banner.png')}) center/cover`,
          }}
        >
          <div className="about-hero-content">
            <span className="about-hero-tag intro d1">Services</span>
            <h1 className="intro d2">
              We Don&apos;t Just Build. We Stand By What We Build.
            </h1>
            <p className="intro d3">
              End-to-end post-installation support to keep your sterile
              environments performing at their best — for years after handover.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
