export default function StructuredData() {
  const data = {
    '@context': 'https://schema.org',
    '@type': 'HouseAndGardenBusiness',
    name: 'Paint Pal Plus',
    description:
      'Family-owned residential and commercial painting in Yamhill County, Oregon. Founded 2020.',
    url: 'https://www.paintpalplus.com',
    telephone: '+1-503-773-0800',
    email: 'projects@paintpalplus.com',
    foundingDate: '2020',
    image: 'https://www.paintpalplus.com/api/og',
    priceRange: '$$',
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'PO Box 75',
      addressLocality: 'McMinnville',
      addressRegion: 'OR',
      postalCode: '97128',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.2102,
      longitude: -123.1979,
    },
    areaServed: [
      { '@type': 'City', name: 'McMinnville' },
      { '@type': 'City', name: 'Newberg' },
      { '@type': 'City', name: 'Dundee' },
      { '@type': 'City', name: 'Carlton' },
      { '@type': 'City', name: 'Lafayette' },
      { '@type': 'City', name: 'Dayton' },
      { '@type': 'City', name: 'Yamhill' },
      { '@type': 'AdministrativeArea', name: 'Yamhill County' },
    ],
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '08:00',
        closes: '17:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '08:00',
        closes: '16:30',
      },
    ],
    sameAs: [
      'https://www.facebook.com/profile.php?id=61560114818900',
      'https://www.instagram.com/paint.pal.plus/',
    ],
    hasOfferCatalog: {
      '@type': 'OfferCatalog',
      name: 'Painting services',
      itemListElement: [
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Interior painting' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Exterior painting' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Cabinet painting' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Stain and finish' },
        },
        {
          '@type': 'Offer',
          itemOffered: { '@type': 'Service', name: 'Commercial painting' },
        },
      ],
    },
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
