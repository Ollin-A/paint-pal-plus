import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery',
  description:
    'Recent residential and commercial painting work across Yamhill County, Oregon.',
  alternates: { canonical: '/gallery' },
  openGraph: {
    title: 'Gallery — Recent painting projects',
    description:
      'Recent residential and commercial painting work across Yamhill County, Oregon.',
    url: '/gallery',
    images: ['/api/og?title=Gallery&subtitle=Recent%20painting%20projects'],
  },
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
