import { asset } from '@/lib/assetPath';

const IMGS = {
  ot1: asset('/hero_bg_image.png'),
  ot2: asset('/2nd_section.png'),
  or: 'https://images.unsplash.com/photo-1632053002928-1919348c4e64?auto=format&fit=crop&w=1600&q=80',
  icu: 'https://images.unsplash.com/photo-1666214280557-f1b5022eb634?auto=format&fit=crop&w=1600&q=80',
  lab: 'https://images.unsplash.com/photo-1538108149393-fbbd81895907?auto=format&fit=crop&w=1600&q=80',
  med: 'https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=1600&q=80',
};

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
    img: IMGS.ot1,
  },
  {
    slug: 'aster-group',
    name: 'Aster Group',
    location: 'Kochi, Bangalore & Hyderabad',
    type: '51 OTs',
    year: '2024',
    cats: ['ot'],
    scope: '51 modular operating theatres delivered across three flagship facilities.',
    img: IMGS.ot2,
  },
  {
    slug: 'al-kafeel-hospitals',
    name: 'Al-Kafeel Hospitals',
    location: 'Iraq & Riyadh',
    type: '10 OTs + complete OT complex',
    year: '2024',
    cats: ['ot'],
    scope: 'A complete OT complex with 10 modular theatres, delivered internationally.',
    img: IMGS.or,
  },
  {
    slug: 'zydus-hospitals',
    name: 'Zydus Hospitals',
    location: 'Ahmedabad, Vadodara, Dahod & Bechraji',
    type: '48 OTs',
    year: '2025',
    cats: ['ot'],
    scope: '48 modular operating theatres across four Gujarat locations.',
    img: IMGS.icu,
  },
  {
    slug: 'hcg-group',
    name: 'HCG Group',
    location: 'Ahmedabad, Bhavnagar, Vadodara, Rajkot & Jaipur',
    type: '25 OTs',
    year: '2024',
    cats: ['ot'],
    scope: '25 modular operating theatres across five oncology centres.',
    img: IMGS.lab,
  },
  {
    slug: 'yashoda-hospital',
    name: 'Yashoda Hospital',
    location: 'Hyderabad',
    type: '300 ICUs & isolation rooms',
    year: '2022',
    cats: ['icu'],
    scope: '300 modular ICU beds and isolation rooms for high-acuity critical care.',
    img: IMGS.icu,
  },
  {
    slug: 'norvic-international-hospital',
    name: 'Norvic International Hospital',
    location: 'Kathmandu, Nepal',
    type: '17 OTs, 80 ICUs',
    year: '2019',
    cats: ['ot', 'icu'],
    scope: '17 theatres and 80 ICU beds — including SICUs, MICUs, CCUs and transplant ICUs.',
    img: IMGS.med,
  },
  {
    slug: 'sparsh-hospitals',
    name: 'Sparsh Hospitals',
    location: 'Bangalore',
    type: '17 OTs, 80 ICUs',
    year: '2025',
    cats: ['ot', 'icu'],
    scope: '17 theatres and 80 ICU beds — including SICUs, MICUs, CCUs and transplant ICUs.',
    img: IMGS.ot1,
  },
  {
    slug: 'apollo-hospitals',
    name: 'Apollo Hospitals',
    location: 'Kolkata & Ahmedabad',
    type: '15 OTs',
    year: '2026',
    cats: ['ot'],
    scope: '15 modular operating theatres across two metropolitan facilities.',
    img: IMGS.ot2,
  },
  {
    slug: 'stavya-spine-hospital',
    name: 'Stavya Spine Hospital',
    location: 'Ahmedabad',
    type: '8 OTs',
    year: '2025',
    cats: ['ot'],
    scope: '8 modular operating theatres for a dedicated spine-surgery facility.',
    img: IMGS.or,
  },
  {
    slug: 'sakara-world-hospital',
    name: 'Sakara World Hospital',
    location: 'Bangalore',
    type: '11 OTs',
    year: '2011',
    cats: ['ot'],
    scope: '11 modular operating theatres for the Kirloskar Group flagship hospital.',
    img: IMGS.med,
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
