import type { LeadProjectType } from '@/lib/leads';

type ProjectTypeOption =
  | { value: ''; label: string }
  | { value: LeadProjectType; label: string };

export const contactCopy = {
  hero: {
    eyebrow: 'Contact · Yamhill County, Oregon',
    headline: 'Tell us about your project.',
    subhead: 'We respond within one business day. Usually faster.',
  },
  form: {
    fieldLabels: {
      name: 'Your name',
      phone: 'Phone',
      email: 'Email',
      projectType: 'Project type',
      projectLocation: 'Project location',
      message: 'Tell us about your project',
    },
    placeholders: {
      phone: '(503) 555-0100',
      projectLocation: 'McMinnville, Newberg, Dundee…',
      message: 'Square footage, rooms, color thoughts, timeline. Anything helps.',
    },
    projectTypes: [
      { value: '', label: 'Select one…' },
      { value: 'interior', label: 'Interior painting' },
      { value: 'exterior', label: 'Exterior painting' },
      { value: 'cabinet', label: 'Cabinet painting' },
      { value: 'stain', label: 'Stain & finish' },
      { value: 'commercial', label: 'Commercial' },
      { value: 'unsure', label: 'Not sure yet' },
    ] satisfies ProjectTypeOption[],
    cta: 'Send it over →',
    submitting: 'Sending…',
    success: {
      heading: 'We’ve got it.',
      body: 'Oscar or someone from the team will be in touch within one business day. Usually faster.',
    },
    errorPrefix: 'Something didn’t go through:',
  },
  sidebar: {
    phone: {
      label: 'By phone',
      display: '(503) 773-0800',
      href: 'tel:+15037730800',
      caption: 'Fastest path — we usually answer.',
    },
    email: {
      label: 'By email',
      display: 'projects@paintpalplus.com',
      href: 'mailto:projects@paintpalplus.com',
    },
    hours: {
      label: 'Hours',
      lines: [
        'Monday–Thursday · 8:00 am – 5:00 pm',
        'Friday · 8:00 am – 4:30 pm',
        'Saturday & Sunday · closed',
      ],
    },
    serviceArea: {
      label: 'We serve',
      body: 'Yamhill County and the surrounding wine country: McMinnville, Newberg, Dundee, Carlton, Lafayette, Dayton, and Yamhill.',
    },
  },
  map: {
    caption: 'Yamhill County, Oregon',
    towns: [
      { name: 'Yamhill', x: 220, y: 200, isHub: false },
      { name: 'Carlton', x: 190, y: 240, isHub: false },
      { name: 'Dundee', x: 270, y: 220, isHub: false },
      { name: 'Newberg', x: 310, y: 180, isHub: false },
      { name: 'Dayton', x: 280, y: 280, isHub: false },
      { name: 'Lafayette', x: 260, y: 300, isHub: false },
      { name: 'McMinnville', x: 220, y: 320, isHub: true },
    ],
  },
};
