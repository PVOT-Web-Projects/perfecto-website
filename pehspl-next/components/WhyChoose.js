const ITEMS = [
  {
    title: 'Continuous Innovation',
    body: '2 patents and 9 new profiles developed in the last 3 years, with ongoing R&D in materials and systems.',
    icon: (
      <path d="M12 3v3M12 18v3M3 12h3M18 12h3M5.6 5.6l2.1 2.1M16.3 16.3l2.1 2.1M18.4 5.6l-2.1 2.1M7.7 16.3l-2.1 2.1" />
    ),
    extra: <circle cx="12" cy="12" r="3.2" />,
  },
  {
    title: 'Speed Without Compromise',
    body: 'Expertise in fast-track projects with strict timelines; self-standing panels eliminate civil work delays.',
    icon: <path d="M13 2L4.5 13.5H11l-1 8.5L19.5 10H13z" />,
  },
  {
    title: 'EU-Certified, Make in India',
    body: 'Manufactured at an 8 lakh sq. ft. facility with fully automated machines, to European standards.',
    icon: <path d="M12 2l8 3v6c0 5-3.5 8.5-8 11-4.5-2.5-8-6-8-11V5z" />,
    extra: <path d="M9 12l2 2 4-4" />,
  },
];

export default function WhyChoose() {
  return (
    <section id="services" className="section-pad">
      <div className="wrap why reveal">
        <div className="why-left">
          <span className="eyebrow">Why Choose</span>
          <h2>Why choose PEHSPL</h2>
          <p>
            From patented innovation to European manufacturing standards, every
            project is delivered with speed, precision and uncompromising
            quality.
          </p>
        </div>
        <div className="why-list">
          {ITEMS.map((it) => (
            <div className="why-item" key={it.title}>
              <div className="why-ico">
                <svg
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1.7"
                >
                  {it.icon}
                  {it.extra}
                </svg>
              </div>
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
