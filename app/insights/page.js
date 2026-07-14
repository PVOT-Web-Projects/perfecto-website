import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsightsExplorer from '@/components/insights/InsightsExplorer';
import NewsletterCTA from '@/components/insights/NewsletterCTA';
import { asset } from '@/lib/assetPath';

export const metadata = {
  title: 'Insights — PEHSPL',
  description:
    'Perspectives on OT design, cleanroom standards, infection control, and healthcare infrastructure — from the team that builds it.',
};

export default function InsightsPage() {
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
                background: `linear-gradient(90deg, rgba(18,27,36,.82) 0%, rgba(18,27,36,.5) 48%, rgba(18,27,36,.15) 100%), url(${asset('/hero_bg_image.png')}) center/cover`,
              }}
            >
              <div className="about-hero-content">
                <span className="about-hero-tag intro d1">Insights</span>
                <h1 className="intro d2">Insights from the Sterile Space Experts</h1>
                <p className="intro d3">
                  Perspectives on OT design, cleanroom standards, infection
                  control, and healthcare infrastructure — from the team that
                  builds it.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Filter tabs + featured + article grid */}
        <InsightsExplorer />

        {/* Newsletter subscribe */}
        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
