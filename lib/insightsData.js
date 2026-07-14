import { asset } from '@/lib/assetPath';

const IMGS = {
  ot1: asset('/hero_bg_image.png'),
  ot2: asset('/2nd_section.png'),
  or: 'https://images.unsplash.com/photo-1632053002928-1919348c4e64?auto=format&fit=crop&w=1600&q=80',
  icu: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80',
  lab: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80',
  med: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
};

export const INSIGHT_TABS = [
  ['all', 'All'],
  ['ot-design', 'OT Design & Planning'],
  ['cleanroom', 'Cleanroom Standards'],
  ['infection', 'Infection Control'],
  ['infra', 'Healthcare Infrastructure'],
];

export const CATEGORY_LABELS = Object.fromEntries(INSIGHT_TABS);

/* NOTE: dates are placeholders; full article bodies below were written to fit
   the draft's titles/excerpts and can be replaced with final editorial copy. */
export const INSIGHTS = [
  {
    slug: 'modular-ots-vs-conventional-construction',
    title: 'Why Modular OTs Outperform Conventional Construction — Every Time',
    cat: 'ot-design',
    date: '18 June 2026',
    readTime: '6 min read',
    featured: true,
    img: IMGS.ot1,
    excerpt:
      'Modular panel-based OTs consistently offer faster build timelines, lower lifetime costs, and superior infection control compared to conventional civil construction. This article walks hospital planners through what to look for — and what questions to ask — when evaluating their options.',
    body: [
      {
        h: 'Speed is a clinical advantage',
        p: [
          'Conventional civil construction is inherently unpredictable: wet trades, curing times, and sequencing dependencies routinely stretch OT programmes by months. Self-standing, factory-engineered panel systems remove that dependency entirely — panels arrive precision-made and install in a fraction of the time.',
          'Every week saved is not just a project metric. It is surgeries performed earlier, capacity brought online sooner, and revenue that begins while a conventional build would still be curing plaster.',
        ],
      },
      {
        h: 'The lifetime cost equation',
        p: [
          'A civil-built OT can look cheaper on paper, but repainting cycles, seepage repairs, and joint failures accumulate quickly. Modular systems with seamless surfaces and patented panel profiles are engineered for decades of easy-clean performance, and individual panels can be replaced without disturbing the room around them.',
        ],
      },
      {
        h: 'Infection control by design',
        p: [
          'Plastered walls and tile grout lines harbour microbes; airtight modular joints and flush-integrated services do not. When sterility is built into the envelope itself, compliance stops being a maintenance battle and becomes a property of the room.',
        ],
      },
      {
        h: 'The questions planners should ask',
        p: [
          'Is the panel system certified to EU cleanroom standards? Is installation done by the vendor’s own trained team or subcontracted out? Will one partner be accountable from design through validated handover? The answers separate a true modular OT partner from a panel supplier.',
        ],
      },
    ],
    takeaways: [
      'Modular OTs deploy faster because they remove civil-work dependency',
      'Seamless surfaces and replaceable panels lower lifetime cost',
      'Sterility is engineered into the envelope, not painted onto it',
      'Insist on certified systems and single-partner accountability',
    ],
  },
  {
    slug: 'understanding-ot-classification-iso-class',
    title: 'Understanding OT Classification: What ISO Class Means for Your Operating Theatre',
    cat: 'cleanroom',
    date: '28 May 2026',
    readTime: '5 min read',
    img: IMGS.ot2,
    excerpt:
      'A plain-language guide to cleanroom ISO classifications, what different OT grades mean for air quality and sterility, and how compliance is maintained over the lifetime of a sterile space.',
    body: [
      {
        h: 'What ISO classes actually measure',
        p: [
          'Cleanroom ISO classes define how many airborne particles of a given size are permitted per cubic metre of air. The lower the class number, the cleaner the air — and the more demanding the requirements on filtration, air changes, and the room envelope itself.',
        ],
      },
      {
        h: 'What it means for an operating theatre',
        p: [
          'An OT’s grade determines the air quality directly over the surgical field. Laminar airflow above the table, HEPA filtration, and positive pressure cascades toward adjacent rooms all work together — but only if the envelope is airtight and the surfaces don’t shed or harbour particles.',
        ],
      },
      {
        h: 'Compliance is a lifetime commitment',
        p: [
          'Classification is proven at handover through particle counts and airflow validation, then maintained through periodic HVAC validation, filter integrity testing, and scheduled maintenance of joints and seals. A theatre that passed once is not automatically a theatre that still passes today.',
        ],
      },
    ],
    takeaways: [
      'ISO class = permitted airborne particles per cubic metre',
      'The room envelope matters as much as the HVAC serving it',
      'Validation at handover must be repeated across the OT’s life',
    ],
  },
  {
    slug: 'patient-flow-in-ot-complex-design',
    title: 'Patient Flow in OT Complex Design: Why Layout is a Clinical Decision',
    cat: 'ot-design',
    date: '30 April 2026',
    readTime: '5 min read',
    img: IMGS.or,
    excerpt:
      'Surgical outcomes are directly influenced by how an OT complex is laid out — from sterile corridors to scrub zones and recovery pathways. Patient flow planning should be part of the design brief from day one, not an afterthought.',
    body: [
      {
        h: 'Layout is not interior design',
        p: [
          'Where the scrub zones sit, how sterile and soiled corridors separate, and how patients move from transfer to table to recovery — these decisions shape infection risk, staff efficiency, and even surgical scheduling capacity. They are clinical decisions with architectural expressions.',
        ],
      },
      {
        h: 'Zoning and single-direction flow',
        p: [
          'Well-designed complexes enforce a one-way logic: clean supplies, staff, and patients move through progressively more controlled zones, while soiled materials exit by a separate path that never crosses back. Cross-flow is where contamination — and inefficiency — creeps in.',
        ],
      },
      {
        h: 'Design it in from day one',
        p: [
          'Retrofitting flow into a finished floor plate is expensive and rarely complete. Bringing OT complex planners in alongside the hospital’s architects at the briefing stage costs nothing extra and pays back across the life of the facility.',
        ],
      },
    ],
    takeaways: [
      'Patient flow determines infection risk and staff efficiency',
      'Enforce single-direction movement through zoned layouts',
      'Involve OT planners at the briefing stage, not after',
    ],
  },
  {
    slug: 'hidden-cost-of-non-compliant-ots',
    title: 'The Hidden Cost of Non-Compliant Operating Theatres',
    cat: 'infection',
    date: '9 April 2026',
    readTime: '6 min read',
    img: IMGS.icu,
    excerpt:
      'When OT infrastructure doesn’t meet sterility standards, the consequences go beyond regulatory risk. This article looks at the clinical, financial, and reputational costs hospitals face — and how proactive infrastructure investment changes the equation.',
    body: [
      {
        h: 'The clinical cost',
        p: [
          'Surgical site infections extend patient stays, drive readmissions, and in the worst cases cost lives. Many trace back not to technique but to environment: failing seals, contaminated air paths, and surfaces that can no longer be effectively cleaned.',
        ],
      },
      {
        h: 'The financial and reputational exposure',
        p: [
          'Every infection event carries treatment costs the hospital largely absorbs, and accreditation findings can suspend an OT entirely — idling the hospital’s highest-revenue floor. Reputation, once linked publicly to infection rates, is far harder to rebuild than a theatre.',
        ],
      },
      {
        h: 'Proactive investment changes the equation',
        p: [
          'Upgrading to compliant modular infrastructure — or maintaining existing theatres through scheduled validation and AMC programmes — costs a fraction of a single serious infection event. The economics favour acting before the audit, not after it.',
        ],
      },
    ],
    takeaways: [
      'Non-compliance costs show up clinically before they show up in audits',
      'A suspended OT idles the hospital’s highest-revenue floor',
      'Scheduled maintenance and upgrades cost less than one serious event',
    ],
  },
  {
    slug: 'ivf-lab-design-cleanroom-standards',
    title: 'IVF Lab Design: The Cleanroom Standards That Protect Embryo Viability',
    cat: 'cleanroom',
    date: '19 March 2026',
    readTime: '5 min read',
    img: IMGS.lab,
    excerpt:
      'Air quality, temperature control, and contamination management aren’t optional in an IVF lab — they directly affect clinical outcomes. This article outlines the design decisions that define a world-class IVF lab environment.',
    body: [
      {
        h: 'Air quality is embryo safety',
        p: [
          'Embryos develop outside the body’s defences, so the lab environment is their immune system. Particle counts, temperature stability, and humidity control are not comfort parameters here — they are directly correlated with development rates and clinical outcomes.',
        ],
      },
      {
        h: 'VOCs: the invisible threat',
        p: [
          'Volatile organic compounds off-gassing from paints, adhesives, and cheap wall systems are invisible to a particle counter but toxic to embryos. World-class IVF labs pair chemically inert, VOC-free panel systems with dedicated molecular filtration in the air handling itself.',
        ],
      },
      {
        h: 'The design decisions that matter',
        p: [
          'Pressure cascades that always push air from clean to less-clean zones, single-direction workflow separating lab from patient areas, flush inert surfaces, and real-time environmental monitoring — these decisions, made at design stage, define the lab’s ceiling for clinical performance.',
        ],
      },
    ],
    takeaways: [
      'The lab environment is the embryo’s immune system',
      'VOC control demands inert materials plus molecular filtration',
      'Pressure cascades and workflow separation are design-stage decisions',
    ],
  },
  {
    slug: 'make-in-india-built-to-eu-standards',
    title: 'Make in India, Built to EU Standards: How Indian Hospitals Can Access Global-Grade OT Infrastructure',
    cat: 'infra',
    date: '25 February 2026',
    readTime: '6 min read',
    img: IMGS.med,
    excerpt:
      'EU-certified panel technology, designed and installed by an Indian team — this combination is reshaping what’s possible for hospital OT infrastructure in India. Here’s how it works and what it means for hospitals planning new builds or upgrades.',
    body: [
      {
        h: 'The best of both worlds',
        p: [
          'For years, Indian hospitals faced a choice: import a foreign turnkey OT at import prices and timelines, or build locally and accept compromises on certification. A hybrid model has ended that trade-off — globally certified panel technology, executed end-to-end by a local team.',
        ],
      },
      {
        h: 'How the model works',
        p: [
          'Panels are manufactured to European cleanroom standards, while design, OT-complex planning, patient-flow engineering, and installation are handled in India by the partner’s own in-house teams. Hospitals get EU-certified technology with local accountability, local speed, and local support for the decades that follow.',
        ],
      },
      {
        h: 'What it means for your next build',
        p: [
          'New builds and upgrades no longer need to choose between compliance and practicality. With self-standing panels that install without civil work, hospitals can plan surgical capacity in months, hold it to global standards, and service it locally for life.',
        ],
      },
    ],
    takeaways: [
      'EU-certified technology no longer requires imported execution',
      'Local in-house teams mean accountability and lifetime support',
      'Compliance and speed are no longer a trade-off',
    ],
  },
];

export function getInsight(slug) {
  return INSIGHTS.find((a) => a.slug === slug);
}

export function relatedInsights(slug, count = 3) {
  const current = getInsight(slug);
  const rest = INSIGHTS.filter((a) => a.slug !== slug);
  // Same-category articles first, then the rest.
  return [
    ...rest.filter((a) => a.cat === current.cat),
    ...rest.filter((a) => a.cat !== current.cat),
  ].slice(0, count);
}
