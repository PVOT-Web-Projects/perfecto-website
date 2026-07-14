import { SERVICE_TEAMS } from '@/lib/servicesData';

export default function ServiceTeams() {
  return (
    <section className="section-pad" style={{ background: 'var(--bg-soft)' }}>
      <div className="wrap">
        <div className="about-head reveal">
          <h2 className="who-title">
            <span className="who-mark" />
            Why Our Service Teams?
          </h2>
          <p>
            Post-sales support with the same accountability as the build itself.
          </p>
        </div>

        <div className="team-grid reveal-stagger">
          {SERVICE_TEAMS.map(([title, body], i) => (
            <div className="team-cell" key={title}>
              <span className="team-n">{String(i + 1).padStart(2, '0')}</span>
              <h4>{title}</h4>
              <p>{body}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
