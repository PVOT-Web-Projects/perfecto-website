'use client';

import { useState } from 'react';
import Link from 'next/link';
import { getProject } from '@/lib/projectsData';
import { asset } from '@/lib/assetPath';

const SLUGS = ['zydus-hospitals', 'amrita-hospitals', 'aster-group', 'hcg-group'];
const PROJECTS = SLUGS.map((s) => getProject(s)).filter(Boolean);

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const go = (dir) =>
    setActive((p) => (p + dir + PROJECTS.length) % PROJECTS.length);
  const current = PROJECTS[active];

  return (
    <section id="projects" className="section-pad">
      <div className="wrap">
        <div className="feat-head reveal">
          <div>
            <h2 className="who-title">
              <span className="who-mark" />
              Featured Projects
            </h2>
            <p className="feat-sub">
              From Zydus Hospitals and AIIMS (Amrita Hospitals) to Aster DM
              Group and HCG — explore how PEHSPL&apos;s Nicomac-engineered
              operating theatres, ICUs and IVF labs are performing inside
              India&apos;s leading hospitals.
            </p>
          </div>
          <a href={asset('/company-profile.pdf')} className="btn btn-ghost" download>
            Download Company Profile
          </a>
        </div>

        <div className="project-card reveal">
          {PROJECTS.map((p, k) => (
            <div
              key={p.slug}
              className={`project-bg${k === active ? ' active' : ''}`}
              style={{ backgroundImage: `url(${p.img})` }}
            />
          ))}
          <div className="project-shade" />
          <div className="project-top">
            <h3>Experience the Exceptional, Up Close</h3>
          </div>
          <div className="project-meta">
            <div>
              <div className="place">{current.name}</div>
              <div className="pf-chips" style={{ marginTop: 12 }}>
                <span className="chip">{current.type}</span>
                <span className="chip">{current.location}</span>
              </div>
            </div>
            <div className="arrows" style={{ alignItems: 'center', gap: 14 }}>
              <Link
                href={`/projects/${current.slug}`}
                className="btn btn-light"
                style={{ padding: '12px 24px' }}
              >
                View Project
              </Link>
              <button aria-label="Previous project" onClick={() => go(-1)}>
                ←
              </button>
              <button aria-label="Next project" onClick={() => go(1)}>
                →
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
