import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function ProjectDetail({ project, more }) {
  const facts = [
    ['Hospital', project.name],
    ['Location', project.location],
    ['Project Type', project.type],
    ['Year Completed', project.year],
  ];

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
                background: `linear-gradient(90deg, rgba(18,27,36,.84) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${project.img}) center/cover`,
              }}
            >
              <div className="about-hero-content">
                <span className="about-hero-tag intro d1">Project</span>
                <h1 className="intro d2">{project.name}</h1>
                <p className="intro d3">{project.location}</p>
                <div className="pf-chips intro d4">
                  <span className="chip">{project.type}</span>
                  <span className="chip">Completed {project.year}</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Fact strip */}
        <section className="section-pad" style={{ paddingBottom: 0 }}>
          <div className="wrap">
            <div className="team-grid pd-facts reveal-stagger">
              {facts.map(([label, value]) => (
                <div className="team-cell" key={label}>
                  <span className="team-n">{label}</span>
                  <h4>{value}</h4>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Overview */}
        <section className="section-pad">
          <div className="wrap who reveal">
            <div>
              <h2 className="who-title">
                <span className="who-mark" />
                Project Overview
              </h2>
              <p className="lead">{project.scope}</p>
              <p>
                Delivered end-to-end by PEHSPL&apos;s in-house team using
                EU-certified Nicomac panel systems — from design and
                patient-flow planning through installation, systems integration
                and validated handover.
              </p>
              <p>
                Self-standing panels eliminated civil-work dependency, keeping
                the programme fast and predictable while the hospital&apos;s
                surrounding operations continued undisturbed.
              </p>
              <a href="/#contact" className="text-link">
                Discuss a Similar Project
              </a>
            </div>
            <div
              className="media"
              role="img"
              aria-label={project.name}
              style={{
                background: `url(${project.gallery?.[1] || project.img}) center/cover`,
              }}
            />
          </div>
        </section>

        {/* Photo gallery */}
        {project.gallery && project.gallery.length > 1 && (
          <section className="section-pad" style={{ paddingTop: 0 }}>
            <div className="wrap">
              <div className="about-head reveal">
                <h2 className="who-title">
                  <span className="who-mark" />
                  Project Gallery
                </h2>
              </div>
              <div className="pd-gallery reveal-stagger">
                {project.gallery.map((src, i) => (
                  <div className="pd-shot" key={src}>
                    <div
                      className="pd-shot-img"
                      role="img"
                      aria-label={`${project.name} — photo ${i + 1}`}
                      style={{ backgroundImage: `url(${src})` }}
                    />
                  </div>
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More projects */}
        <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                More Projects
              </h2>
            </div>
            <div className="xsol-grid pd-more reveal-stagger">
              {more.map((p) => (
                <Link
                  href={`/projects/${p.slug}`}
                  className="xsol-card"
                  key={p.slug}
                  style={{ backgroundImage: `url(${p.img})` }}
                >
                  <div className="xsol-meta">
                    <div>
                      <h3>{p.name}</h3>
                      <p style={{ fontSize: 13.5, color: 'rgba(255,255,255,.8)', marginTop: 4 }}>
                        {p.type} · {p.year}
                      </p>
                    </div>
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
                Let&apos;s build your next sterile space.
              </p>
              <div className="about-cta-actions" style={{ justifyContent: 'center' }}>
                <a href="/#contact" className="btn btn-light">
                  Talk to Our Team <span className="arrow">→</span>
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
