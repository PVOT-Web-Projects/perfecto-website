# PEHSPL — Next.js

Component-based Next.js (App Router) port of the PEHSPL marketing homepage.

## Getting started

```bash
npm install
npm run dev      # http://localhost:3000
```

Build & run production:

```bash
npm run build
npm start
```

## Structure

```
app/
  layout.js        Root layout — loads Inter (next/font), mounts <ScrollReveal/>
  page.js          Composes all section components in order
  globals.css      Design tokens + shared primitives + section styles
components/
  Header.js          'use client' — logo, nav, mobile menu toggle
  Hero.js            Hero card with orange bottom accent
  WhoWeAre.js
  Statement.js       Statement band + <ScrollFrames/>
  CoreOfferings.js
  StatCounters.js
  WhyChoose.js
  PlugAndBuild.js
  FeaturedProjects.js
  TrustedBy.js
  ContactCTA.js      'use client' — contact form
  Footer.js
  ScrollReveal.js    'use client' — reveal-on-scroll (IntersectionObserver)
  ScrollFrames.js    'use client' — scroll-driven 3D frame scrubber
public/
  Logo.png
  frames/3d/         <- drop the 3D scroll frames here
```

## 3D scroll frames

When the frame sequence is ready, drop the images in `public/frames/3d/`
(e.g. `frame_0001.jpg … frame_0120.jpg`) and edit the `SCROLL_3D` config at
the top of `components/ScrollFrames.js`:

```js
const SCROLL_3D = {
  enabled: true,
  frameCount: 120,
  path: '/frames/3d/',
  prefix: 'frame_',
  pad: 4,
  ext: 'jpg',
  scrollHeightVh: 320,
};
```

## Notes

- Images in the hero / cards are bright Unsplash placeholders set via CSS
  `background` — swap them for real photography in `app/globals.css`.
- The logo is referenced from `/Logo.png` (served from `public/`).
- Styling is a single global stylesheet so the design tokens and shared
  primitives (`.wrap`, `.btn`, `.eyebrow`) stay reusable across components.
  Sections can be migrated to CSS Modules later if stricter scoping is wanted.
