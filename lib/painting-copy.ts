export type PaintingService = {
  id: 'interior' | 'exterior' | 'cabinets' | 'stain';
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  heroImage: { src: string; alt: string };
  detailImage: { src: string; alt: string };
};

export type PaintingCommercial = {
  id: 'commercial';
  number: string;
  eyebrow: string;
  title: string;
  body: string;
  cta: string;
  ctaHref: string;
  images: { src: string; alt: string }[];
};

export const paintingCopy = {
  pageHero: {
    eyebrow: 'Services · Yamhill County, Oregon',
    headline: 'Five ways we paint.',
    image: {
      src: '/images/painting/painting-hero.jpg',
      alt: 'Recently painted interior room in McMinnville',
    },
    chips: [
      { label: 'Interior', anchor: '#interior' },
      { label: 'Exterior', anchor: '#exterior' },
      { label: 'Cabinets', anchor: '#cabinets' },
      { label: 'Stain', anchor: '#stain' },
      { label: 'Commercial', anchor: '#commercial' },
    ],
  },
  services: [
    {
      id: 'interior',
      number: '01',
      eyebrow: '01 / yamhill sage',
      title: 'Interior',
      body: 'Walls, ceilings, accent walls, trim, doors. The kind of work most homeowners only think about once a decade — which is exactly why it has to be done right the first time. We tape, prep, prime, and roll like we’re going to be back in ten years to see how it’s holding up. Sometimes we are.',
      heroImage: {
        src: '/images/painting/interior-hero.jpg',
        alt: 'Newly painted living room interior',
      },
      detailImage: {
        src: '/images/painting/interior-detail.jpg',
        alt: 'Detail of fresh paint on trim and crown molding',
      },
    },
    {
      id: 'exterior',
      number: '02',
      eyebrow: '02 / coast range ochre',
      title: 'Exterior',
      body: 'Pacific Northwest weather is not kind to siding. We use high-grade weather-rated finishes, prep the trim properly, and take the time to mask windows and landscaping so the work looks finished — not just done. Most exterior repaints last six to eight years; ours tend to go a little longer.',
      heroImage: {
        src: '/images/painting/exterior-hero.jpg',
        alt: 'Repainted farmhouse exterior in Yamhill County',
      },
      detailImage: {
        src: '/images/painting/exterior-detail.jpg',
        alt: 'Detail of exterior trim around a window',
      },
    },
    {
      id: 'cabinets',
      number: '03',
      eyebrow: '03 / dundee clay',
      title: 'Cabinets',
      body: 'A cabinet refresh is the cheapest way to make a kitchen feel new again. We remove doors, sand, prime, and spray in a clean environment — not on your countertops. The finish goes on smoother than brushwork and holds up to daily kitchen wear: stains, splashes, fingerprints, kids.',
      heroImage: {
        src: '/images/painting/cabinets-hero.jpg',
        alt: 'Refinished kitchen cabinets',
      },
      detailImage: {
        src: '/images/painting/cabinets-detail.jpg',
        alt: 'Close detail of cabinet door finish',
      },
    },
    {
      id: 'stain',
      number: '04',
      eyebrow: '04 / dundee clay',
      title: 'Stain & finish',
      body: 'Decks, fences, exterior wood, doors, beams. Staining is what painting becomes when you want to see the grain underneath. We work with high-quality penetrating stains rated for PNW exposure and apply them in a window of weather that gives them time to cure properly.',
      heroImage: {
        src: '/images/painting/stain-hero.jpg',
        alt: 'Freshly stained deck',
      },
      detailImage: {
        src: '/images/painting/stain-detail.jpg',
        alt: 'Detail of wood grain showing through stain',
      },
    },
  ] satisfies PaintingService[],
  commercial: {
    id: 'commercial',
    number: '05',
    eyebrow: '05 / evergreen · commercial',
    title: 'Commercial painting',
    body: 'Offices, retail spaces, restaurants, light industrial. The brief is usually the same as residential — minus the part where someone’s family is living in it. We schedule around your hours, work clean, and finish on time. Most commercial jobs land in the one-to-three-day range; larger ones we phase.',
    cta: 'Request a commercial quote →',
    ctaHref: '/contact?type=commercial',
    images: [
      { src: '/images/painting/commercial-01.jpg', alt: 'Repainted office interior' },
      { src: '/images/painting/commercial-02.jpg', alt: 'Retail storefront interior repaint' },
      { src: '/images/painting/commercial-03.jpg', alt: 'Light industrial space repaint' },
    ],
  } satisfies PaintingCommercial,
  crossLink: {
    heading: 'Need something bigger than paint?',
    body: 'PPP Construction handles remodeling, additions, and new builds across Yamhill County.',
    cta: 'Visit PPP Construction →',
    href: '#',
    enabled: false,
  },
};
