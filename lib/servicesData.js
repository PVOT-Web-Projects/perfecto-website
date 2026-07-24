import { asset } from '@/lib/assetPath';

export const SERVICES = [
  {
    title: 'Annual Maintenance Contracts (AMC)',
    img: asset('/pages/service/Service_Our_Services.png'),
    intro:
      'A cleanroom is only as good as its upkeep. Our AMC programs provide scheduled, preventive maintenance of your OT, ICU, or IVF Lab — carried out by the same in-house experts who built it. We know your space better than anyone.',
    coverLabel: "What's Covered",
    points: [
      'Scheduled inspections of panel joints, seals, and surfaces',
      'Hardware checks — doors, vision panels, pass-boxes, and handles',
      'Air filtration and HVAC interface checks',
      'Detailed maintenance reports after every visit',
      'Priority response for any issues flagged during inspection',
    ],
  },
  {
    title: 'Rapid Service for Repairs & Emergency Support',
    img: 'https://images.unsplash.com/photo-1632053002928-1919348c4e64?auto=format&fit=crop&w=1400&q=80',
    intro:
      "Sterile environments can't afford downtime. Our dedicated support team is available for rapid-response repairs — from panel seal replacements to hardware fixes — minimising disruption to critical clinical operations.",
    coverLabel: "What's Included",
    points: [
      'On-call support for urgent repair needs',
      'Genuine Nicomac spare parts used in all repairs — no substitutes',
      'Fast turnaround to restore sterility compliance with minimal clinical disruption',
    ],
  },
  {
    title: 'Upgradation & Refurbishment',
    img: asset('/hero_bg_image.png'),
    intro:
      'Healthcare standards evolve. We help hospitals upgrade existing OTs, ICUs, and IVF labs to meet new compliance requirements or accommodate expanded clinical needs — without the cost and disruption of a full rebuild.',
    coverLabel: "What's Included",
    points: [
      'Assessment of existing infrastructure against current compliance standards',
      'Panel replacement, surface upgrades, and hardware modernisation',
      'Layout reconfiguration to support changing clinical workflows',
      'Minimal disruption to ongoing hospital operations throughout the upgrade',
    ],
  },
  {
    title: 'HVAC Validation & Calibration',
    img: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1400&q=80',
    intro:
      'Sterile performance lives and dies by its air. We validate and calibrate the HVAC systems serving your OTs, ICUs and IVF labs, so airflow, pressure and filtration keep performing exactly to spec.',
    coverLabel: "What's Included",
    points: [
      'Airflow visualisation and air-change rate verification',
      'HEPA filter integrity testing and particle counts',
      'Pressure-differential mapping and sensor calibration',
      'Validation reports ready for accreditation records',
    ],
  },
  {
    title: 'Design & Consultation of Complete OT Complex',
    img: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1400&q=80',
    intro:
      'From a single theatre to a complete OT complex, our design team plans the entire floor — zoning, sterile corridors, and patient flow — working directly alongside your architects and consultants.',
    coverLabel: "What's Included",
    points: [
      'Complete OT floor planning and sterile zoning',
      'Patient, staff and material flow design',
      'Equipment layout and MEP coordination',
      "Consultation alongside India's leading hospital architects and consultants",
    ],
  },
  {
    title: 'Compliance Support',
    img: asset('/2nd_section.png'),
    intro:
      'Maintaining EU and USFDA compliance over the lifetime of a sterile space requires ongoing vigilance. We support hospitals well beyond handover.',
    coverLabel: "What's Included",
    points: [
      'Periodic compliance assessments of installed OTs, ICUs, and IVF labs',
      'Documentation support for hospital accreditation and licensing processes',
      'Guidance on meeting updated regulatory standards as they evolve',
    ],
  },
];

export const SERVICE_TEAMS = [
  ['Built-in expertise', 'The same in-house team that installed your space maintains it — no third-party handoffs.'],
  ['System-trained technicians', 'Our service engineers are trained specifically on Nicomac panel systems.'],
  ['Genuine spare parts', 'Only genuine Nicomac components in all repairs and upgrades — no substitutes.'],
  ['Nationwide coverage', 'Our teams serve hospitals across India and abroad.'],
  ['Fast response times', 'Because sterile environments operate on clinical time, not contractor time.'],
];
