const ITEMS = [
  {
    title: 'Speed Without Compromise',
    body: 'Deep expertise in fast-track projects with strict deadlines. Our self-standing panel systems eliminate dependency on civil work, cutting weeks off conventional construction timelines.',
    icon: <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />,
  },
  {
    title: 'EU-Certified Technology, Indian Execution',
    body: "Globally certified panel technology, manufactured to European standards, designed and installed end-to-end by PEHSPL's own in-house team in India.",
    icon: (
      <>
        <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />
        <path d="M9 12l2 2 4-4" />
      </>
    ),
  },
  {
    title: 'Deep Domain Expertise',
    body: "From OT complex design to patient-flow planning and systems integration, our teams work directly alongside India's leading hospital architects and consultants — not just as a supplier, but as a design and installation partner.",
    icon: (
      <>
        <circle cx="12" cy="12" r="9" />
        <path d="M15.5 8.5l-2 5-5 2 2-5z" />
      </>
    ),
  },
];

export default function WhyChooseAbout() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="about-head center reveal">
          <h2 className="who-title" style={{ justifyContent: 'center' }}>
            <span className="who-mark" />
            Why Choose PEHSPL
          </h2>
          <p>
            Not just a panel supplier — a design and installation partner
            accountable for the whole sterile space.
          </p>
        </div>

        <div className="feature-grid reveal-stagger">
          {ITEMS.map((it) => (
            <div className="feature-card" key={it.title}>
              <div className="fc-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  {it.icon}
                </svg>
              </div>
              <h3>{it.title}</h3>
              <p>{it.body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
