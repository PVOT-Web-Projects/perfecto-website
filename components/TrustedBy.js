import { asset } from '@/lib/assetPath';

// [file, display name for alt text]
const LOGOS = {
  aster: ['Aster.svg', 'Aster DM Healthcare'],
  amrita: ['Amrita.svg', 'Amrita Hospitals'],
  sakra: ['Sakra.avif', 'Sakra World Hospital'],
  zydus: ['Zydus.webp', 'Zydus Hospitals'],
  apollo: ['Apollo.svg', 'Apollo Hospitals'],
  hcg: ['HCG.png', 'HCG'],
  cims: ['CIMS.png', 'CIMS Hospital'],
  kd: ['KD.webp', 'KD Hospital'],
  norvic: ['Norvic.png', 'Norvic International Hospital'],
  sterling: ['Sterling.png', 'Sterling Hospital'],
  dhs: ['DHS.png', 'DHS Hospital'],
  stjohns: ['St_Johns.webp', "St. John's Medical College Hospital"],
  akanksha: ['Akanksha.png', 'Aakansha IVF'],
};

const ROWS = [
  { dir: 'left', keys: ['aster', 'amrita', 'sakra', 'zydus', 'apollo', 'hcg', 'cims', 'kd'] },
  { dir: 'right', keys: ['norvic', 'sterling', 'dhs', 'stjohns', 'akanksha', 'aster', 'zydus', 'apollo'] },
  { dir: 'left', keys: ['hcg', 'amrita', 'cims', 'sakra', 'kd', 'norvic', 'sterling', 'dhs'] },
];

export default function TrustedBy() {
  return (
    <section
      id="insights"
      className="section-pad"
      style={{ background: 'var(--bg-soft)' }}
    >
      <div className="wrap">
        <h2 className="who-title trusted-title reveal">
          <span className="who-mark" />
          Trusted By India&apos;s Leading Hospital Groups
        </h2>
      </div>
      <div className="marquee-wrap reveal">
        {ROWS.map((row, r) => (
          <div className={`marquee${row.dir === 'right' ? ' right' : ''}`} key={r}>
            <div className="marquee-track">
              {/* rendered twice so the scroll loops seamlessly */}
              {[...row.keys, ...row.keys].map((key, k) => {
                const [file, name] = LOGOS[key];
                return (
                  <div className="logo-chip" key={`${key}-${k}`}>
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={asset(`/clients_logo/${file}`)}
                      alt={`${name} — sterile healthcare spaces by PEHSPL`}
                      loading="lazy"
                    />
                  </div>
                );
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
