import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Contact — Start a project with Paint Pal Plus',
  description:
    'Tell us about your painting project in Yamhill County, Oregon. We respond within one business day.',
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
