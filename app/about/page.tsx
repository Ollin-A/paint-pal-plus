import type { Metadata } from 'next';
import AboutHero from '@/components/sections/about/AboutHero';
import StoryBody from '@/components/sections/about/StoryBody';
import FamilyPhotoSection from '@/components/sections/about/FamilyPhotoSection';
import ValuesGrid from '@/components/sections/about/ValuesGrid';
import TeamStrip from '@/components/sections/about/TeamStrip';
import ClosingCta from '@/components/ui/ClosingCta';
import { aboutCopy } from '@/lib/about-copy';

export const metadata: Metadata = {
  title: 'About',
  description:
    'Oscar started Paint Pal Plus in McMinnville in 2020. Five years later, the family has grown, and so has the practice.',
  alternates: { canonical: '/about' },
  openGraph: {
    title: 'About — Family-run painting in Yamhill County',
    description:
      'Oscar started Paint Pal Plus in McMinnville in 2020. The family has grown, and so has the practice.',
    url: '/about',
    images: ['/api/og?title=About&subtitle=Family-run%20painting%20in%20Yamhill%20County'],
  },
};

export default function AboutPage() {
  return (
    <>
      <AboutHero />
      <StoryBody />
      <FamilyPhotoSection />
      <ValuesGrid />
      <TeamStrip />
      <ClosingCta
        heading={aboutCopy.closingCta.heading}
        cta={aboutCopy.closingCta.cta}
        href={aboutCopy.closingCta.href}
      />
    </>
  );
}
