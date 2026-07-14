export default function AboutCTA() {
  return (
    <section id="contact" className="cta">
      <div
        className="wrap cta-inner reveal"
        style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}
      >
        <div className="cta-copy" style={{ maxWidth: 760 }}>
          <h2>
            Let&apos;s build your
            <br />
            next sterile space
          </h2>
          <p className="sub" style={{ margin: '20px auto 0' }}>
            Engineering trust, one sterile space at a time.
          </p>
          <div className="about-cta-actions" style={{ justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn-light">
              Get in Touch <span className="arrow">→</span>
            </a>
            <a
              href="/#solutions"
              className="btn"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}
            >
              Explore Our Solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
