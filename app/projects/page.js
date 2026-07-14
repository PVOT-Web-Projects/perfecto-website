import Header from '@/components/Header';
import Footer from '@/components/Footer';
import TrustedBy from '@/components/TrustedBy';
import ProjectsStats from '@/components/projects/ProjectsStats';
import ProjectsExplorer from '@/components/projects/ProjectsExplorer';
import { asset } from '@/lib/assetPath';

export const metadata = {
  title: 'Projects — PEHSPL',
  description:
    'Built across India, trusted by the best — 900+ operating theatres, 450+ ICUs and 50+ IVF labs delivered across 150+ hospitals in India and abroad.',
};

export default function ProjectsPage() {
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
                background: `linear-gradient(90deg, rgba(18,27,36,.82) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${asset('/2nd_section.png')}) center/cover`,
              }}
            >
              <div className="about-hero-content">
                <span className="about-hero-tag intro d1">Projects</span>
                <h1 className="intro d2">Built Across India. Trusted by the Best.</h1>
                <p className="intro d3">
                  900+ operating theatres. 50+ IVF labs. 150+ hospitals. A look
                  at some of the sterile spaces we&apos;ve built.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Count-up stats bar */}
        <ProjectsStats />

        {/* Filter tabs + featured + grid */}
        <ProjectsExplorer />

        {/* Trusted by (marquee, shared with home) */}
        <TrustedBy />

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
