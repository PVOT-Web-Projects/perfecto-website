import Link from 'next/link';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import InsightCard from '@/components/insights/InsightCard';
import NewsletterCTA from '@/components/insights/NewsletterCTA';
import { CATEGORY_LABELS } from '@/lib/insightsData';

export default function InsightArticle({ article, related }) {
  return (
    <>
      <Header />
      <main>
        {/* Editorial article header */}
        <section>
          <div className="wrap">
            <div className="article-head">
              <Link href="/insights" className="article-back intro d1">
                ← Back to Insights
              </Link>
              <span className="ins-cat intro d1" style={{ alignSelf: 'center' }}>
                {CATEGORY_LABELS[article.cat]}
              </span>
              <h1 className="intro d2">{article.title}</h1>
              <div className="ins-meta intro d3" style={{ justifyContent: 'center' }}>
                <span>{article.date}</span>
                <span>·</span>
                <span>{article.readTime}</span>
                <span>·</span>
                <span>By the PEHSPL Team</span>
              </div>
            </div>

            {/* Cover image */}
            <div
              className="article-cover intro d3"
              role="img"
              aria-label={article.title}
              style={{ backgroundImage: `url(${article.img})` }}
            />

            {/* Body */}
            <article className="article-body">
              <p className="lead-p">{article.excerpt}</p>
              {article.body.map((sec) => (
                <div key={sec.h}>
                  <h2>{sec.h}</h2>
                  {sec.p.map((para, i) => (
                    <p key={i}>{para}</p>
                  ))}
                </div>
              ))}

              {/* Key takeaways */}
              <div className="takeaways">
                <h3>Key Takeaways</h3>
                <ul>
                  {article.takeaways.map((t) => (
                    <li key={t}>
                      <span className="hl-ico">✓</span>
                      {t}
                    </li>
                  ))}
                </ul>
              </div>
            </article>
          </div>
        </section>

        {/* Related articles */}
        <section className="section-pad" style={{ background: 'var(--bg-soft)', marginTop: 70 }}>
          <div className="wrap">
            <div className="about-head reveal">
              <h2 className="who-title">
                <span className="who-mark" />
                Related Insights
              </h2>
            </div>
            <div className="ins-grid reveal-stagger">
              {related.map((a) => (
                <InsightCard article={a} key={a.slug} />
              ))}
            </div>
          </div>
        </section>

        <NewsletterCTA />
      </main>
      <Footer />
    </>
  );
}
