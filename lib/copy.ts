export type ServiceChip = {
  slug: 'interior' | 'exterior' | 'cabinets' | 'commercial';
  name: string;
  swatchVar: '--color-sage' | '--color-ochre' | '--color-clay' | '--color-evergreen';
  swatchTextVar: '--color-evergreen' | '--color-ochre-text' | '--color-clay-text' | '--color-fog';
  colorCode: string;
  description: string;
  anchor: string;
};

export const homeCopy = {
  hero: {
    eyebrow: 'Paint Pal Plus · Yamhill County, Oregon',
    headline: 'Painting houses like the homes they are.',
    // Alternates to A/B with Oscar later (just swap the headline above):
    // "Carefully painted homes in Yamhill County."
    // "Painted slowly. Finished right. Walked through with you."
    // "We paint where we live. Carefully."
  },
  heroChips: [
    { label: '01 sage', swatchVar: '--color-sage', textVar: '--color-evergreen' },
    { label: '02 ochre', swatchVar: '--color-ochre', textVar: '--color-ochre-text' },
    { label: '03 clay', swatchVar: '--color-clay', textVar: '--color-clay-text' },
    { label: '04 evergreen', swatchVar: '--color-evergreen', textVar: '--color-fog' },
  ],
  manifesto:
    'We mix our own off-whites. We treat trim like furniture. We don’t leave a job until you’ve walked every wall with us.',
  services: [
    {
      slug: 'interior',
      name: 'Interior',
      swatchVar: '--color-sage',
      swatchTextVar: '--color-evergreen',
      colorCode: '01 / yamhill sage',
      description: 'Walls, ceilings, trim, accent walls.',
      anchor: '/painting#interior',
    },
    {
      slug: 'exterior',
      name: 'Exterior',
      swatchVar: '--color-ochre',
      swatchTextVar: '--color-ochre-text',
      colorCode: '02 / coast range ochre',
      description: 'Siding, trim, doors. Weather-rated.',
      anchor: '/painting#exterior',
    },
    {
      slug: 'cabinets',
      name: 'Cabinets & stain',
      swatchVar: '--color-clay',
      swatchTextVar: '--color-clay-text',
      colorCode: '03 / dundee clay',
      description: 'Cabinets, decks, fences, exterior wood.',
      anchor: '/painting#cabinets',
    },
    {
      slug: 'commercial',
      name: 'Commercial',
      swatchVar: '--color-evergreen',
      swatchTextVar: '--color-fog',
      colorCode: '04 / evergreen',
      description: 'Offices, retail, light industrial.',
      anchor: '/painting#commercial',
    },
  ] satisfies ServiceChip[],
  marqueeColors: [
    'Willamette fog',
    'Yamhill sage',
    'Coast Range ochre',
    'Dundee clay',
    'Evergreen',
  ],
  aboutTeaser: {
    body: 'Oscar started Paint Pal Plus in McMinnville in 2020, with his wife and two small children at home. Five years later, the family has grown and so has the team — but the work hasn’t changed much. Show up on time. Prep carefully. Walk every wall with the homeowner before calling it finished.',
    cta: 'Read Oscar’s story →',
  },
  galleryPreview: {
    eyebrow: 'Recent work',
    heading: 'Walls that have held up.',
    cta: 'See all projects →',
  },
  gallery: {
    hero: {
      eyebrow: 'Projects · 2022 – 2025',
      headline: 'Walls that have held up.',
      subhead: 'Recent painting work across Yamhill County.',
    },
    closing: {
      heading: 'See your home like this?',
      cta: 'Start a project →',
      href: '/contact',
    },
    emptyState: {
      heading: 'More projects coming soon.',
      subhead: 'We’re adding new work as we wrap it.',
      actionLabel: 'Back to all projects →',
    },
  },
  testimonial: {
    quote: 'Oscar is the rare contractor who treats every wall like it’s his own home. He doesn’t leave until it’s right.',
    underlinePhrase: 'doesn’t leave until it’s right',
    attribution: 'Ximena Van D.',
    project: 'Interior repaint · McMinnville',
  },
  process: {
    eyebrow: 'How we work',
    heading: 'Four steps. No surprises.',
    steps: [
      { number: '01', title: 'Consult', body: 'Walk the space, listen, ask the right questions.' },
      { number: '02', title: 'Color & quote', body: 'Color matching, sample boards, and a written estimate.' },
      { number: '03', title: 'Paint', body: 'Prep, prime, paint. Clean floors. On schedule.' },
      { number: '04', title: 'Walkthrough', body: 'We walk every wall with you before we call it done.' },
    ],
  },
  contactSection: {
    eyebrow: 'Start a project',
    heading: 'Tell us about your home.',
    subhead: 'We respond within one business day. Usually faster.',
    serviceArea: {
      label: 'We serve',
      towns: ['McMinnville', 'Newberg', 'Dundee', 'Carlton', 'Lafayette', 'Dayton', 'Yamhill'],
      suffix: 'and the surrounding Willamette Valley.',
      prefix: 'Yamhill County:',
    },
    phone: {
      label: 'Or just call',
      display: '(503) 773-0800',
      href: 'tel:+15037730800',
    },
  },
};
