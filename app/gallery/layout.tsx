import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Gallery — Recent painting projects',
  description:
    'Recent residential and commercial painting work across Yamhill County, Oregon.',
};

export default function GalleryLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
