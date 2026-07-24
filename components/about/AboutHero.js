import { asset } from '@/lib/assetPath';

export default function AboutHero() {
  return (
    <section className="about-hero">
      <div className="wrap">
        <div
          className="about-hero-card"
          style={{
            background: `linear-gradient(90deg, rgba(18,27,36,.82) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${asset('/pages/aboutus/About_Banner.png')}) center/cover`,
          }}
        >
          <div className="about-hero-content">
            <span className="about-hero-tag intro d1">About PEHSPL</span>
            <h1 className="intro d2">
              Engineering Trust, One Sterile Space at a Time
            </h1>
            <p className="intro d3">
              Two decades of cleanroom expertise, backed by Nicomac&apos;s global
              technology and India&apos;s largest dedicated installation expertise.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
