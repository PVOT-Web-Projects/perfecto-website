'use client';

import { useState } from 'react';

const PROJECTS = [
  {
    place: 'Ahmedabad',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1700&q=80',
  },
  {
    place: 'Mumbai',
    img: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1700&q=80',
  },
  {
    place: 'Bengaluru',
    img: 'https://images.unsplash.com/photo-1632053002928-1919348c4e64?auto=format&fit=crop&w=1700&q=80',
  },
  {
    place: 'Hyderabad',
    img: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1700&q=80',
  },
];

export default function FeaturedProjects() {
  const [active, setActive] = useState(0);
  const go = (dir) =>
    setActive((p) => (p + dir + PROJECTS.length) % PROJECTS.length);

  return (
    <section id="projects" className="section-pad">
      <div className="wrap">
        <div className="feat-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Featured Projects
          </h2>
        </div>
        <div className="project-card reveal">
          {PROJECTS.map((p, k) => (
            <div
              key={p.place}
              className={`project-bg${k === active ? ' active' : ''}`}
              style={{ backgroundImage: `url(${p.img})` }}
            />
          ))}
          <div className="project-shade" />
          <div className="project-top">
            <h3>Experience the exceptional up close</h3>
          </div>
          <div className="project-meta">
            <div className="place">{PROJECTS[active].place}</div>
            <div className="arrows">
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
