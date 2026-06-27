'use client';

export default function ContactCTA() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your form/email backend (e.g. an API route or service).
  }

  return (
    <section id="contact" className="cta">
      <div className="wrap cta-inner reveal">
        <div>
          <h2>
            <span>Let&apos;s make a</span>
            <span>sterile space</span>
            <span>Together</span>
          </h2>
          <p className="sub">
            Tell us about your project. Our team will get back within one
            business day.
          </p>
        </div>
        <form className="form" onSubmit={handleSubmit}>
          <input type="text" placeholder="Full Name" aria-label="Full Name" required />
          <div className="row">
            <input type="email" placeholder="Email" aria-label="Email" required />
            <input type="tel" placeholder="Phone" aria-label="Phone" />
          </div>
          <textarea placeholder="Message" aria-label="Message" />
          <button type="submit" className="btn btn-light">
            Submit <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
