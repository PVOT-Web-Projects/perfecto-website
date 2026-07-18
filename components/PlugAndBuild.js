import RotateFrames from '@/components/RotateFrames';

const FEATURES = [
  {
    title: 'Faster than Civil Construction',
    body: 'Self-standing Nicomac panel systems cut project timelines compared to conventional civil build-outs.',
  },
  {
    title: 'Hassle-Free Site Installation',
    body: 'Pre-engineered panels are factory-finished and assembled on-site with minimal disruption to hospital operations.',
  },
  {
    title: 'EU Certified, USFDA Compliant',
    body: 'Every Nicomac panel meets international cleanroom and fire-safety certification standards.',
  },
  {
    title: 'Infection-Free, Easy-Clean Surfaces',
    body: 'Seamless, joint-free panel surfaces resist microbial growth and simplify daily sterilisation.',
  },
  {
    title: 'Patented Panel Profiles',
    body: 'In-house patented profiles and corner solutions for a truly airtight, gap-free cleanroom envelope.',
  },
  {
    title: 'Lower Lifetime Cost',
    body: 'Durable, low-maintenance panels reduce long-term upkeep and replacement costs versus traditional construction.',
  },
];

export default function PlugAndBuild() {
  return (
    <section style={{ background: 'var(--bg-soft)' }}>
      <div className="plug-track">
        <div className="plug-sticky">
          <div className="wrap plug reveal">
            <div>
              <h2 className="who-title">
                <span className="who-mark" />
                Plug-and-Build Healthcare Infrastructure, One Sterile Space at a
                Time
              </h2>
              <div className="feat-grid reveal-stagger">
                {FEATURES.map((f, i) => (
                  <div className="feat" key={f.title}>
                    <span className="feat-n">{i + 1}</span>
                    <h4>{f.title}</h4>
                    <p>{f.body}</p>
                  </div>
                ))}
              </div>
              <div className="about-cta-actions" style={{ marginTop: 0 }}>
                <a href="#solutions" className="btn btn-primary">
                  Explore Our Solutions
                </a>
                <a href="#contact" className="btn btn-ghost">
                  Request Consultation
                </a>
              </div>
            </div>

            {/* Scroll-driven rotation (left content stays pinned meanwhile) */}
            <RotateFrames />
          </div>
        </div>
      </div>
    </section>
  );
}
