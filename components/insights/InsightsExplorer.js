'use client';

import { useState } from 'react';
import Link from 'next/link';
import { INSIGHTS, INSIGHT_TABS, CATEGORY_LABELS } from '@/lib/insightsData';
import InsightCard from '@/components/insights/InsightCard';

export default function InsightsExplorer() {
  const [tab, setTab] = useState('all');

  const filtered = INSIGHTS.filter((a) => tab === 'all' || a.cat === tab);
  const featured = filtered.find((a) => a.featured) || filtered[0];
  const rest = filtered.filter((a) => a !== featured);

  return (
    <section id="articles" className="section-pad">
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Latest Insights
          </h2>
          <p>
            Perspectives from the team that designs, builds and maintains
            sterile healthcare spaces.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs reveal">
          {INSIGHT_TABS.map(([key, label]) => (
            <button
              key={key}
              type="button"
              className={`filter-tab${tab === key ? ' active' : ''}`}
              onClick={() => setTab(key)}
            >
              {label}
            </button>
          ))}
        </div>

        {/* Featured article (editorial split card) */}
        {featured && (
          <Link
            href={`/insights/${featured.slug}`}
            className="ins-featured"
            key={`feat-${tab}-${featured.slug}`}
          >
            <div
              className="ins-featured-img"
              style={{ backgroundImage: `url(${featured.img})` }}
            />
            <div className="ins-featured-body">
              <div className="ins-meta">
                <span className="ins-cat">{CATEGORY_LABELS[featured.cat]}</span>
                <span>{featured.date}</span>
                <span>·</span>
                <span>{featured.readTime}</span>
              </div>
              <h3>{featured.title}</h3>
              <p className="exc">{featured.excerpt}</p>
              <span className="read-more">
                Read More <span aria-hidden="true">→</span>
              </span>
            </div>
          </Link>
        )}

        {/* Article grid */}
        {rest.length > 0 && (
          <div className="ins-grid">
            {rest.map((a) => (
              <InsightCard article={a} key={`${tab}-${a.slug}`} animKey={`${tab}-${a.slug}`} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
