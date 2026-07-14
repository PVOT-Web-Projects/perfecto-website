export default function ServicesCTA() {
  return (
    <section id="contact" className="cta">
      <div
        className="wrap cta-inner reveal"
        style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}
      >
        <div className="cta-copy" style={{ maxWidth: 800 }}>
          <h2>
            Let&apos;s keep your
            <br />
            sterile space performing
          </h2>
          <p className="sub" style={{ margin: '20px auto 0' }}>
            Scheduled maintenance, rapid repairs, upgrades and compliance —
            handled by the team that built it.
          </p>
          <div className="about-cta-actions" style={{ justifyContent: 'center' }}>
            <a href="/#contact" className="btn btn-light">
              Get in Touch <span className="arrow">→</span>
            </a>
            <a
              href="/#contact"
              className="btn"
              style={{ color: '#fff', borderColor: 'rgba(255,255,255,.5)' }}
            >
              Request an AMC Quote
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
