import { asset } from '@/lib/assetPath';

// Generic fallback images (used only where no project photos exist yet).
const IMGS = {
  ot1: asset('/hero_bg_image.png'),
  ot2: asset('/2nd_section.png'),
  or: 'https://images.unsplash.com/photo-1632053002928-1919348c4e64?auto=format&fit=crop&w=1600&q=80',
  icu: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80',
  lab: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80',
  med: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
};

// Helper: build the 5-image gallery path list for a project slug.
// Images live in /public/projects-images/<slug>/01.jpg ... 05.jpg
const gallery = (slug, count = 5) =>
  Array.from({ length: count }, (_, i) =>
    asset(`/projects-images/${slug}/${String(i + 1).padStart(2, '0')}.jpg`),
  );

export const PROJECT_TABS = [
  ['all', 'All Projects'],
  ['ot', 'Modular Operating Theatres'],
  ['icu', 'ICUs'],
  ['ivf', 'IVF Labs'],
];

export const PROJECTS = [
  {
    slug: 'amrita-hospitals',
    name: 'Amrita Hospitals',
    location: 'Faridabad',
    type: '24 OTs',
    year: '2026',
    cats: ['ot'],
    featured: true,
    scope: '24 modular operating theatres delivered across an integrated surgical complex.',
    img: gallery('amrita-hospitals')[0],
    gallery: gallery('amrita-hospitals'),
  },
  {
    slug: 'aster-group',
    name: 'Aster Group',
    location: 'Kochi, Bangalore & Hyderabad',
    type: '51 OTs',
    year: '2024',
    cats: ['ot'],
    featured: true,
    scope: '51 modular operating theatres delivered across three flagship facilities.',
    img: gallery('aster-group')[0],
    gallery: gallery('aster-group'),
  },
  {
    slug: 'al-kafeel-hospitals',
    name: 'Al-Kafeel Hospitals',
    location: 'Iraq & Riyadh',
    type: '10 OTs + complete OT complex',
    year: '2024',
    cats: ['ot'],
    scope: 'A complete OT complex with 10 modular theatres, delivered internationally.',
    img: gallery('al-kafeel-hospitals')[0],
    gallery: gallery('al-kafeel-hospitals'),
  },
  {
    slug: 'zydus-hospitals',
    name: 'Zydus Hospitals',
    location: 'Ahmedabad, Vadodara, Dahod & Bechraji',
    type: '48 OTs',
    year: '2025',
    cats: ['ot'],
    featured: true,
    scope: '48 modular operating theatres across four Gujarat locations.',
    img: gallery('zydus-hospitals')[0],
    gallery: gallery('zydus-hospitals'),
  },
  {
    slug: 'hcg-group',
    name: 'HCG Group',
    location: 'Ahmedabad, Bhavnagar, Vadodara, Rajkot & Jaipur',
    type: '25 OTs',
    year: '2024',
    cats: ['ot'],
    scope: '25 modular operating theatres across five oncology centres.',
    img: gallery('hcg-group')[0],
    gallery: gallery('hcg-group'),
  },
  {
    slug: 'yashoda-hospital',
    name: 'Yashoda Hospital',
    location: 'Hyderabad',
    type: '300 ICUs & isolation rooms',
    year: '2022',
    cats: ['icu'],
    scope: '300 modular ICU beds and isolation rooms for high-acuity critical care.',
    img: gallery('yashoda-hospital')[0],
    gallery: gallery('yashoda-hospital'),
  },
  {
    slug: 'norvic-international-hospital',
    name: 'Norvic International Hospital',
    location: 'Kathmandu, Nepal',
    type: '17 OTs, 80 ICUs',
    year: '2019',
    cats: ['ot', 'icu'],
    scope: '17 theatres and 80 ICU beds — including SICUs, MICUs, CCUs and transplant ICUs.',
    img: gallery('norvic-international-hospital')[0],
    gallery: gallery('norvic-international-hospital'),
  },
  {
    slug: 'sparsh-hospitals',
    name: 'Sparsh Hospitals',
    location: 'Bangalore',
    type: '17 OTs, 80 ICUs',
    year: '2025',
    cats: ['ot', 'icu'],
    scope: '17 theatres and 80 ICU beds — including SICUs, MICUs, CCUs and transplant ICUs.',
    // NOTE: No dedicated photo folder was found for Sparsh Hospitals — still using a
    // generic placeholder. Add a /public/projects-images/sparsh-hospitals/ folder to fix.
    img: IMGS.ot1,
    gallery: [],
  },
  {
    slug: 'apollo-hospitals',
    name: 'Apollo Hospitals',
    location: 'Kolkata & Ahmedabad',
    type: '15 OTs',
    year: '2026',
    cats: ['ot'],
    scope: '15 modular operating theatres across two metropolitan facilities.',
    img: gallery('apollo-hospitals')[0],
    gallery: gallery('apollo-hospitals'),
  },
  {
    slug: 'stavya-spine-hospital',
    name: 'Stavya Spine Hospital',
    location: 'Ahmedabad',
    type: '8 OTs',
    year: '2025',
    cats: ['ot'],
    scope: '8 modular operating theatres for a dedicated spine-surgery facility.',
    img: gallery('stavya-spine-hospital')[0],
    gallery: gallery('stavya-spine-hospital'),
  },
  {
    slug: 'sakara-world-hospital',
    name: 'Sakara World Hospital',
    location: 'Bangalore',
    type: '11 OTs',
    year: '2011',
    cats: ['ot'],
    scope: '11 modular operating theatres for the Kirloskar Group flagship hospital.',
    img: gallery('sakara-world-hospital')[0],
    gallery: gallery('sakara-world-hospital'),
  },

  // ---------------------------------------------------------------------------
  // Additional projects added from the shared photo folders.
  // Details marked (generic) are placeholders — please confirm/replace.
  // ---------------------------------------------------------------------------
  {
    slug: 'amrita-kochi',
    name: 'Amrita Hospital — Kochi',
    location: 'Kochi',
    type: 'Modular OTs', // (generic)
    year: '2023', // (generic)
    cats: ['ot'],
    scope:
      'Modular operating theatres with ceiling-mounted surgical pendants, integration displays and decorative healing-art panels.',
    img: gallery('amrita-kochi')[0],
    gallery: gallery('amrita-kochi'),
  },
  {
    slug: 'kd-hospital',
    name: 'KD Hospital',
    location: 'Ahmedabad',
    type: 'Modular OTs & ICUs', // (generic)
    year: '2024', // (generic)
    cats: ['ot', 'icu'],
    scope:
      'Modular operating theatres and clean-room suites with laminar-flow ceilings, hermetic doors and antimicrobial wall panels.',
    img: gallery('kd-hospital')[0],
    gallery: gallery('kd-hospital'),
  },
  {
    slug: 'dhs-ahmedabad',
    name: 'DHS Hospital',
    location: 'Ahmedabad',
    type: 'Modular OTs', // (generic)
    year: '2019', // (generic)
    cats: ['ot'],
    scope:
      'Blue-themed modular operating theatres with pendant-mounted surgical equipment and LED surgical lighting.',
    img: gallery('dhs-ahmedabad')[0],
    gallery: gallery('dhs-ahmedabad'),
  },
  {
    slug: 'st-johns-medical-college',
    name: "St. John's Medical College Hospital",
    location: 'Bangalore',
    type: 'Modular OT complex', // (generic)
    year: '2023', // (generic)
    cats: ['ot'],
    scope:
      'Hermetically sealed modular OT complex with integrated touch-panel controls and stainless-steel scrub stations.',
    img: gallery('st-johns-medical-college')[0],
    gallery: gallery('st-johns-medical-college'),
  },
  {
    slug: 'sterling-hospital-rajkot',
    name: 'Sterling Hospital',
    location: 'Rajkot',
    type: 'Modular OTs', // (generic)
    year: '2022', // (generic)
    cats: ['ot'],
    scope:
      'Modular operating theatres with LED surgical lighting, ceiling pendants and sealed hermetic doors.',
    img: gallery('sterling-hospital-rajkot')[0],
    gallery: gallery('sterling-hospital-rajkot'),
  },
  {
    slug: 'aakansha-ivf',
    name: 'Aakansha IVF',
    location: 'India', // (generic)
    type: 'IVF Lab', // (generic)
    year: '2023', // (generic)
    cats: ['ivf'],
    scope:
      'Turnkey IVF and embryology laboratory with laminar-flow workstations, ART benches and a dedicated procedure room.',
    img: gallery('aakansha-ivf')[0],
    gallery: gallery('aakansha-ivf'),
  },
  {
    slug: 'poojan-ivf',
    name: 'Poojan IVF',
    location: 'India', // (generic)
    type: 'IVF Lab', // (generic)
    year: '2023', // (generic)
    cats: ['ivf'],
    scope:
      'Modular IVF laboratory with embryology stations, a procedure OT and clean-room air handling.',
    img: gallery('poojan-ivf')[0],
    gallery: gallery('poojan-ivf'),
  },
  {
    slug: 'wings-ivf',
    name: 'Wings IVF',
    location: 'Bangalore', // (generic)
    type: 'IVF Lab', // (generic)
    year: '2022', // (generic)
    cats: ['ivf'],
    scope:
      'IVF and embryology laboratory with ISO-class clean rooms, laminar-flow benches and integrated imaging.',
    img: gallery('wings-ivf')[0],
    gallery: gallery('wings-ivf'),
  },
];

export function getProject(slug) {
  return PROJECTS.find((p) => p.slug === slug);
}

export function otherProjects(slug, count = 3) {
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  const out = [];
  for (let k = 1; out.length < count && k <= PROJECTS.length; k++) {
    out.push(PROJECTS[(i + k) % PROJECTS.length]);
  }
  return out;
}