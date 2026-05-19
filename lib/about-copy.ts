export type ValueBlock = {
  number: string;
  title: string;
  body: string;
  underlinePhrase?: string;
};

export type TeamMember = {
  src: string;
  alt: string;
  name: string;
  role: string;
};

export const aboutCopy = {
  hero: {
    headline: 'Oscar started Paint Pal Plus in 2020.',
    subhead:
      'Five years later, the work hasn’t changed much — just gotten more practiced.',
    portrait: {
      src: '/images/about/oscar-portrait.jpg',
      alt: 'Oscar, founder of Paint Pal Plus',
      placeholderLabel: 'Portrait · Oscar',
    },
  },
  story: {
    paragraphs: [
      'The pandemic had shut most of Oscar’s hours down. With a young family at home — his wife and two small children — he turned the skill he trusted most into a business. The first job was a single room. The second was a friend’s exterior. Within a year, he’d built a reputation in McMinnville for showing up on time, leaving floors cleaner than he found them, and treating other people’s homes the way he’d want his own treated.',
      'The work itself is straightforward. Walk the house. Mix the colors. Prep the walls. Lay the paint. Walk every wall with the homeowner before calling it finished. Oscar still does it the same way he did on day one — just with more years behind every brushstroke.',
      'The family has grown along with the business. Three daughters, two sons. Two sons-in-law, a daughter-in-law, grandchildren. What started as one man with a brush has become a family practice — a team that shows up to your house knowing the work they’re doing will be seen, lived in, and remembered.',
    ],
    inlineCaption: '— McMinnville, 2020',
    inlineImage: {
      src: '/images/about/oscar-painting.jpg',
      alt: 'Oscar painting an interior wall',
      placeholderLabel: 'Oscar painting · McMinnville',
    },
  },
  familyPhoto: {
    src: '/images/about/family.jpg',
    alt: 'The Paint Pal Plus family',
    caption: 'The family, 2025.',
    placeholderLabel: 'Family photo · 2025',
  },
  values: {
    eyebrow: 'How we work',
    heading: 'Four things we don’t compromise on.',
    blocks: [
      {
        number: '01',
        title: 'Integrity is the whole product.',
        body: 'A paint job is finished the day you stop noticing it — and noticing nothing means everything was done right. We do the prep, the second coats, the trim work, the cleanup. We don’t cut the corners that don’t show.',
        underlinePhrase: 'the corners that don’t show',
      },
      {
        number: '02',
        title: 'Family is the standard.',
        body: 'We treat every house like a family member is going to walk through it tomorrow morning. Because, often enough, that’s exactly what happens.',
      },
      {
        number: '03',
        title: 'Yamhill County is home.',
        body: 'We paint farmhouses, vineyard estates, downtown Victorians, and the new builds going up around Newberg and Dundee. We’ve grown up watching this valley change. We’re careful with it.',
        underlinePhrase: 'careful with it',
      },
      {
        number: '04',
        title: 'Faith carries the work.',
        body: 'Oscar started this business on prayer and a small loan. Every project, every relationship, every painted wall — we treat as a chance to leave something better than we found it.',
      },
    ] satisfies ValueBlock[],
  },
  team: {
    enabled: false,
    eyebrow: 'The team',
    heading: 'Who shows up.',
    members: [] as TeamMember[],
  },
  closingCta: {
    heading: 'Have a project in mind?',
    cta: 'Start a project →',
    href: '/contact',
  },
};
