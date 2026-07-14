export default function PanelStandard() {
  return (
    <section className="section-pad">
      <div className="wrap who reveal">
        {/* Image on the left */}
        <div
          className="media"
          role="img"
          aria-label="Nicomac cleanroom panels in a modular operating theatre"
        />

        {/* Content on the right */}
        <div>
          <h2 className="who-title">
            <span className="who-mark" />
            Our Panel Standard
          </h2>
          <p className="lead">
            Nicomac manufactures the panels, while PEHSPL owns the entire design
            and execution process — from OT complex planning and patient-flow
            design to on-site installation by our in-house team.
          </p>
          <p>
            This gives hospitals EU-certified panel technology, backed by local
            design expertise and accountable, end-to-end project delivery.
          </p>

          <div className="panel-roles">
            <div className="panel-role">
              <span className="pr-label">Nicomac</span>
              <p>Manufactures the EU-certified cleanroom panel technology.</p>
            </div>
            <div className="panel-role">
              <span className="pr-label">PEHSPL</span>
              <p>
                Owns design, OT-complex planning, patient-flow, on-site
                installation and end-to-end project delivery.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
