import PaintingHero from '@/components/sections/painting/PaintingHero';
import ServiceBlock from '@/components/ui/ServiceBlock';
import CommercialBlock from '@/components/ui/CommercialBlock';
import ColorMarquee from '@/components/ui/ColorMarquee';
import CrossLinkSection from '@/components/sections/painting/CrossLinkSection';
import ContactSection from '@/components/sections/ContactSection';
import { paintingCopy } from '@/lib/painting-copy';
import { homeCopy } from '@/lib/copy';

export const metadata = {
  title: 'Painting — Residential & commercial',
  description:
    'Interior, exterior, cabinet, stain, and commercial painting services in Yamhill County, Oregon. Family-owned since 2020.',
};

export default function PaintingPage() {
  const [interior, exterior, cabinets, stain] = paintingCopy.services;

  return (
    <>
      <PaintingHero />
      <ServiceBlock {...interior} side="left" />
      <ServiceBlock {...exterior} side="right" />
      <ColorMarquee items={homeCopy.marqueeColors} />
      <ServiceBlock {...cabinets} side="left" />
      <ServiceBlock {...stain} side="right" />
      <CommercialBlock {...paintingCopy.commercial} />
      <CrossLinkSection />
      <ContactSection source="painting-page-contact" />
    </>
  );
}
