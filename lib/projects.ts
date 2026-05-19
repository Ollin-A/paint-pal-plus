export type ProjectCategory =
  | 'interior'
  | 'exterior'
  | 'cabinets'
  | 'stain'
  | 'commercial';

export type ProjectImage = {
  src: string;
  alt: string;
  before?: string;
};

export type Project = {
  id: string;
  title: string;
  location: string;
  category: ProjectCategory;
  year: number;
  images: ProjectImage[];
  featured?: boolean;
  span?: 'sm' | 'md' | 'lg';
};

export const categoryLabels: Record<ProjectCategory, string> = {
  interior: 'Interior',
  exterior: 'Exterior',
  cabinets: 'Cabinets',
  stain: 'Stain & finish',
  commercial: 'Commercial',
};

export const categoryColors: Record<
  ProjectCategory | 'all',
  { swatchVar: string; textVar: string }
> = {
  all: { swatchVar: '--color-fog', textVar: '--color-evergreen' },
  interior: { swatchVar: '--color-sage', textVar: '--color-evergreen' },
  exterior: { swatchVar: '--color-ochre', textVar: '--color-ochre-text' },
  cabinets: { swatchVar: '--color-clay', textVar: '--color-clay-text' },
  stain: { swatchVar: '--color-clay', textVar: '--color-clay-text' },
  commercial: { swatchVar: '--color-evergreen', textVar: '--color-fog' },
};

export const projects: Project[] = [
  {
    id: 'carlton-farmhouse-exterior-2025',
    title: 'Farmhouse exterior',
    location: 'Carlton, OR',
    category: 'exterior',
    year: 2025,
    images: [
      {
        src: '/images/gallery/gallery-01.jpg',
        alt: 'Repainted farmhouse exterior in Carlton',
      },
    ],
    featured: true,
    span: 'lg',
  },
  {
    id: 'newberg-kitchen-cabinets-2025',
    title: 'Kitchen cabinets',
    location: 'Newberg, OR',
    category: 'cabinets',
    year: 2025,
    images: [
      {
        src: '/images/gallery/gallery-02.jpg',
        alt: 'Refinished kitchen cabinets in Newberg',
      },
    ],
    featured: true,
    span: 'md',
  },
  {
    id: 'mcminnville-accent-wall-2025',
    title: 'Accent wall',
    location: 'McMinnville, OR',
    category: 'interior',
    year: 2025,
    images: [
      {
        src: '/images/gallery/gallery-03.jpg',
        alt: 'Sage accent wall in a McMinnville living room',
      },
    ],
    featured: true,
    span: 'md',
  },
  {
    id: 'dundee-deck-stain-2024',
    title: 'Deck stain',
    location: 'Dundee, OR',
    category: 'stain',
    year: 2024,
    images: [
      {
        src: '/images/gallery/gallery-04.jpg',
        alt: 'Freshly stained deck in Dundee',
      },
    ],
    featured: true,
    span: 'sm',
  },
  {
    id: 'lafayette-interior-repaint-2024',
    title: 'Interior repaint',
    location: 'Lafayette, OR',
    category: 'interior',
    year: 2024,
    images: [
      {
        src: '/images/gallery/gallery-05.jpg',
        alt: 'Full interior repaint in Lafayette',
      },
    ],
    featured: true,
    span: 'sm',
  },
  {
    id: 'dayton-barn-trim-2024',
    title: 'Barn trim',
    location: 'Dayton, OR',
    category: 'exterior',
    year: 2024,
    images: [
      {
        src: '/images/gallery/gallery-06.jpg',
        alt: 'Repainted barn trim in Dayton',
      },
    ],
    featured: true,
    span: 'sm',
  },
  {
    id: 'yamhill-hallway-2023',
    title: 'Hallway repaint',
    location: 'Yamhill, OR',
    category: 'interior',
    year: 2023,
    images: [
      {
        src: '/images/gallery/gallery-03.jpg',
        alt: 'Long hallway repainted in fog tone in Yamhill',
      },
    ],
  },
  {
    id: 'mcminnville-siding-refresh-2023',
    title: 'Siding refresh',
    location: 'McMinnville, OR',
    category: 'exterior',
    year: 2023,
    images: [
      {
        src: '/images/gallery/gallery-01.jpg',
        alt: 'Refreshed siding on a McMinnville bungalow',
      },
    ],
  },
  {
    id: 'newberg-bathroom-vanity-2023',
    title: 'Bathroom vanity',
    location: 'Newberg, OR',
    category: 'cabinets',
    year: 2023,
    images: [
      {
        src: '/images/gallery/gallery-02.jpg',
        alt: 'Refinished bathroom vanity in Newberg',
      },
    ],
  },
  {
    id: 'dundee-fence-stain-2022',
    title: 'Fence stain',
    location: 'Dundee, OR',
    category: 'stain',
    year: 2022,
    images: [
      {
        src: '/images/gallery/gallery-04.jpg',
        alt: 'Cedar fence stained in Dundee',
      },
    ],
  },
  {
    id: 'mcminnville-office-suite-2024',
    title: 'Office suite',
    location: 'McMinnville, OR',
    category: 'commercial',
    year: 2024,
    images: [
      {
        src: '/images/gallery/gallery-06.jpg',
        alt: 'Commercial office suite repaint in McMinnville',
      },
    ],
  },
  {
    id: 'newberg-tasting-room-2024',
    title: 'Tasting room',
    location: 'Newberg, OR',
    category: 'commercial',
    year: 2024,
    images: [
      {
        src: '/images/gallery/gallery-05.jpg',
        alt: 'Winery tasting room interior repaint in Newberg',
      },
    ],
  },
];

export function getFeaturedProjects(): Project[] {
  return projects.filter((p) => p.featured);
}

export function getProjectsByCategory(
  category: ProjectCategory | 'all'
): Project[] {
  if (category === 'all') return projects;
  return projects.filter((p) => p.category === category);
}
