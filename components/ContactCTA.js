'use client';

export default function ContactCTA() {
  function handleSubmit(e) {
    e.preventDefault();
    // TODO: wire up to your form/email backend (e.g. an API route or service).
  }

  return (
    <section id="contact" className="cta">
      <div className="wrap cta-inner reveal">
        <div className="cta-copy">
          <h2>
            Let&apos;s make a
            <br />
            sterile
            <br />
            space
          </h2>
          <span className="cta-big">Together</span>
        </div>

        <form className="form" onSubmit={handleSubmit}>
          <div className="field">
            <input type="text" id="cta-name" placeholder=" " required />
            <label htmlFor="cta-name">Full Name</label>
          </div>
          <div className="field">
            <input type="email" id="cta-email" placeholder=" " required />
            <label htmlFor="cta-email">Email</label>
          </div>
          <div className="field">
            <input type="tel" id="cta-phone" placeholder=" " />
            <label htmlFor="cta-phone">Phone</label>
          </div>
          <div className="field">
            <textarea id="cta-msg" placeholder=" " rows={1} />
            <label htmlFor="cta-msg">Message</label>
          </div>
          <button type="submit" className="btn btn-light">
            Submit <span className="arrow">→</span>
          </button>
        </form>
      </div>
    </section>
  );
}
