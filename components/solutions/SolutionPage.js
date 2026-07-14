import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { STAND_OUT } from '@/lib/solutionsData';

export default function SolutionPage({ sol, others }) {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <section className="about-hero">
          <div className="wrap">
            <div
              className="about-hero-card"
              style={{
                background: `linear-gradient(90deg, rgba(18,27,36,.82) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${sol.heroImg}) center/cover`,
              }}
            >
              <div className="about-hero-content">
                <span className="about-hero-tag intro d1">Solutions</span>
                <h1 className="intro d2">{sol.name}</h1>
                <p className="intro d3">{sol.heroSub}</p>
              </div>
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-pad">
          <div className="wrap who reveal">
            <div>
              <h2 className="who-title">
                <span className="who-mark" />
                Overview
              </h2>
              <p className="lead">{sol.overview[0]}</p>
              <p>{sol.overview[1]}</p>
              <a href="/#contact" className="text-link">
                Discuss Your Project
              </a>
            </div>
            <div
              className="media"
              role="img"
              aria-label={sol.name}
              style={{ background: `url(${sol.overviewImg}) center/cover` }}
            />
          </div>
        </section>

        {/* Key features */}
        <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                Key Features
              </h2>
            </div>
            <div className="kf-grid reveal-stagger">
              {sol.features.map((f) => (
                <div className="kf-item" key={f}>
                  <span className="kf-check">✓</span>
                  <p>{f}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Build process */}
        <section className="section-pad">
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                {sol.processTitle}
              </h2>
              <p>
                One accountable partner from first consultation to final
                handover — every stage handled by our in-house team.
              </p>
            </div>
            <div className="process-grid">
              <div className="process-list reveal-stagger">
                {sol.steps.map((s, i) => (
                  <div className="process-step" key={s.title}>
                    <div className="step-n">{i + 1}</div>
                    <div>
                      <h3>{s.title}</h3>
                      <p>{s.body}</p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                className="process-media reveal"
                role="img"
                aria-label={sol.name}
                style={{ backgroundImage: `url(${sol.processImg || sol.heroImg})` }}
              />
            </div>
          </div>
        </section>

        {/* Why our solutions stand out */}
        <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                Why Our Solutions Stand Out
              </h2>
            </div>
            <div className="feature-grid reveal-stagger">
              {STAND_OUT.map(([title, body], i) => (
                <div className="feature-card" key={title}>
                  <span className="so-num">{String(i + 1).padStart(2, '0')}</span>
                  <h3>{title}</h3>
                  <p>{body}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Other solutions */}
        <section className="section-pad">
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                Explore Other Solutions
              </h2>
            </div>
            <div className="xsol-grid reveal-stagger">
              {others.map((o) => (
                <Link
                  href={`/solutions/${o.slug}`}
                  className="xsol-card"
                  key={o.slug}
                  style={{ backgroundImage: `url(${o.heroImg})` }}
                >
                  <div className="xsol-meta">
                    <h3>{o.name}</h3>
                    <span className="xsol-arrow">→</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* CTA */}
        <section id="contact" className="cta">
          <div
            className="wrap cta-inner reveal"
            style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}
          >
            <div className="cta-copy" style={{ maxWidth: 780 }}>
              <h2>Have a project in mind?</h2>
              <p className="sub" style={{ margin: '20px auto 0' }}>
                Let&apos;s design your sterile space together.
              </p>
              <div className="about-cta-actions" style={{ justifyContent: 'center' }}>
                <a href="/#contact" className="btn btn-light">
                  Contact Our Team <span className="arrow">→</span>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
