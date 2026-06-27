export default function FeaturedProjects() {
  return (
    <section id="projects" className="section-pad">
      <div className="wrap">
        <div className="feat-head reveal">
          <div>
            <span className="eyebrow">Featured Projects</span>
            <h2 style={{ marginTop: 14 }}>Experience the exceptional up close</h2>
          </div>
          <a href="#projects" className="btn btn-ghost">
            View All Projects <span className="arrow">→</span>
          </a>
        </div>
        <div className="project-card reveal">
          <div className="project-meta">
            <div className="place">
              Ahmedabad
              <small>Modular Operating Theatre Complex</small>
            </div>
            <div className="arrows">
              <button aria-label="Previous project">←</button>
              <button aria-label="Next project">→</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
