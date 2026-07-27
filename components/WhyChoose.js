const ITEMS = [
  {
    title: 'Continuous Innovation',
    body: '2 patents and 9 new panel profiles developed in the last 3 years, with ongoing R&D in materials and systems to keep our offering ahead of evolving infection-control standards.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.4"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M9 18h6" />
        <path d="M10 21h4" />
        <path d="M12 3a6 6 0 0 0-3.8 10.7c.5.4.8 1 .8 1.6V16h6v-.7c0-.6.3-1.2.8-1.6A6 6 0 0 0 12 3z" />
      </svg>
    ),
  },
  {
    title: 'Speed Without Compromise',
    body: 'Expertise in fast-track hospital projects with strict timelines. Self-standing cleanroom panels eliminate civil work delays, letting OTs, ICUs and IVF labs go live faster without cutting corners on sterility.',
    icon: (
      <svg
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="1.3"
        strokeLinecap="round"
      >
        <circle cx="12" cy="12" r="9" />
        <path d="M4.5 10c2.4-1.8 4.9-1.8 7.4 0s5 1.8 7.4 0" />
        <path d="M4.5 14c2.4-1.8 4.9-1.8 7.4 0s5 1.8 7.4 0" />
      </svg>
    ),
  },
  {
    title: 'Genuine Cleanroom Panels, EU-Certified Quality',
    body: 'From design to execution, we use only genuine, EU-certified, USFDA-compliant panels — never substitutes or look-alikes — so every OT, ICU and IVF lab we deliver carries the same internationally certified quality benchmark, project after project.',
    icon: (
      <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
        <circle cx="12" cy="12" r="9" />
        <path
          d="M12 7.4l1.4 2.9 3.1.4-2.3 2.2.6 3.1-2.8-1.5-2.8 1.5.6-3.1-2.3-2.2 3.1-.4z"
          fill="currentColor"
          stroke="none"
        />
      </svg>
    ),
  },
];

export default function WhyChoose() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap why reveal">
        <div className="why-left">
          <div>
            <h2 className="who-title">
              <span className="who-mark" />
              Why Choose PEHSPL
            </h2>
            <h3 className="who-sub" style={{ marginTop: 26 }}>
              Built on latest technology. Backed by Indian Engineering
              Expertise.
            </h3>
          </div>
          <div>
            <p>
              PEHSPL exclusively uses cleanroom panels, combining globally
              proven panel technology with pan-India design and execution
              scale, fast-track delivery and dedicated after-sales support —
              so hospitals get EU quality without the EU lead time.
            </p>
            <a
              href="#contact"
              className="btn btn-primary"
              style={{ marginTop: 26 }}
            >
              Schedule a Discussion
            </a>
          </div>
        </div>
        <div className="why-list">
          {ITEMS.map((it) => (
            <div className="why-item" key={it.title}>
              <div className="why-ico">{it.icon}</div>
              <div>
                <h3>{it.title}</h3>
                <p>{it.body}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
