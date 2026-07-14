'use client';

import { useState } from 'react';
import Link from 'next/link';
import { PROJECTS, PROJECT_TABS } from '@/lib/projectsData';

export default function ProjectsExplorer() {
  const [tab, setTab] = useState('all');

  const filtered = PROJECTS.filter(
    (p) => tab === 'all' || p.cats.includes(tab)
  );
  // The flagged featured project leads when it matches the filter;
  // otherwise the first match takes the featured slot.
  const featured = filtered.find((p) => p.featured) || filtered[0];
  const rest = filtered.filter((p) => p !== featured);

  return (
    <section id="grid" className="section-pad">
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Our Projects
          </h2>
          <p>
            A look at some of the sterile spaces we&apos;ve built — across India
            and abroad.
          </p>
        </div>

        {/* Filter tabs */}
        <div className="filter-tabs reveal">
          {PROJECT_TABS.map(([key, label]) => (
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

        {filtered.length === 0 ? (
          <div className="proj-empty">
            IVF lab case studies are being prepared — 50+ delivered across
            India. Meanwhile,{' '}
            <Link href="/solutions/ivf-labs" style={{ color: 'var(--slate)', fontWeight: 600 }}>
              explore our IVF lab solution
            </Link>
            .
          </div>
        ) : (
          <>
            {/* Featured project (large card) */}
            {featured && (
              <Link
                href={`/projects/${featured.slug}`}
                className="proj-featured"
                key={`feat-${tab}-${featured.slug}`}
                style={{ backgroundImage: `url(${featured.img})` }}
              >
                <span className="pf-tag">Featured Project</span>
                <div className="pf-meta">
                  <div>
                    <h3>{featured.name}</h3>
                    <p className="pf-sub">{featured.location} · {featured.scope}</p>
                    <div className="pf-chips">
                      <span className="chip">{featured.type}</span>
                      <span className="chip">Completed {featured.year}</span>
                    </div>
                  </div>
                  <span className="btn btn-light">
                    View Full Project <span className="arrow">→</span>
                  </span>
                </div>
              </Link>
            )}

            {/* Project grid */}
            <div className="proj-grid">
              {rest.map((p) => (
                <Link
                  href={`/projects/${p.slug}`}
                  className="proj-card"
                  key={`${tab}-${p.slug}`}
                >
                  <div className="proj-img">
                    <div
                      className="proj-img-bg"
                      style={{ backgroundImage: `url(${p.img})` }}
                    />
                    <span className="proj-year">{p.year}</span>
                  </div>
                  <div className="proj-body">
                    <h3>{p.name}</h3>
                    <span className="proj-loc">{p.location}</span>
                    <span className="proj-type">{p.type}</span>
                    <span className="proj-view">
                      View Project <span aria-hidden="true">→</span>
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          </>
        )}
      </div>
    </section>
  );
}
