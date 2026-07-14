'use client';

export default function NewsletterCTA() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your newsletter/email service.
  }

  return (
    <section id="subscribe" className="cta">
      <div
        className="wrap cta-inner reveal"
        style={{ gridTemplateColumns: '1fr', justifyItems: 'center', textAlign: 'center' }}
      >
        <div className="cta-copy" style={{ maxWidth: 760, width: '100%' }}>
          <h2>
            Stay ahead of the
            <br />
            sterile space curve
          </h2>
          <p className="sub" style={{ margin: '20px auto 0' }}>
            Want to stay updated on the latest in sterile healthcare
            infrastructure?
          </p>
          <form className="nl-form" onSubmit={handleSubmit}>
            <input
              type="email"
              placeholder="Your email address"
              aria-label="Email address"
              required
            />
            <button type="submit" className="btn btn-light">
              Subscribe to Our Insights
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}
