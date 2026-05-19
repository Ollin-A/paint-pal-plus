import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact',
  description:
    'Tell us about your painting project in Yamhill County, Oregon. We respond within one business day.',
  alternates: { canonical: '/contact' },
  openGraph: {
    title: 'Contact — Start a project with Paint Pal Plus',
    description:
      'Tell us about your painting project in Yamhill County, Oregon. We respond within one business day.',
    url: '/contact',
    images: ['/api/og?title=Contact&subtitle=Start%20a%20project'],
  },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
