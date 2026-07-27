export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="wrap">
        <div className="hero-card">
          <div className="hero-content">
            <h1 className="intro d2">Building Sterile Spaces Where Healing Begins</h1>
            <p className="intro d3">
              We design and execute projects for modular operation theatres,
              ICUs and IVF labs — built exclusively with cleanroom panels,
              engineered to EU standards and trusted by 150+ hospitals across
              India and abroad.
            </p>
            <div className="about-cta-actions intro d4" style={{ marginTop: 0 }}>
              <a href="#solutions" className="btn btn-primary">
                Explore Our Solutions
              </a>
              <a href="#contact" className="btn btn-ghost">
                Request Consultation
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
