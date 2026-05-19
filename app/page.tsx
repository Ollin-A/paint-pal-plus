import type { Metadata } from 'next';
import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import ServicesChipsSection from '@/components/sections/ServicesChipsSection';
import ColorMarqueeSection from '@/components/sections/ColorMarqueeSection';
import AboutTeaserSection from '@/components/sections/AboutTeaserSection';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

export const metadata: Metadata = {
  alternates: { canonical: '/' },
  openGraph: {
    title: 'Paint Pal Plus — Painting houses in Yamhill County, Oregon',
    description:
      'Residential and commercial painting in McMinnville, Newberg, Dundee, and the Willamette Valley. Family-owned since 2020.',
    url: '/',
    images: ['/api/og?title=Paint%20Pal%20Plus&subtitle=Painting%20houses%20in%20Yamhill%20County%2C%20Oregon'],
  },
};

export default function Home() {
  return (
    <>
      <HeroSection />
      <ManifestoSection />
      <ServicesChipsSection />
      <ColorMarqueeSection />
      <AboutTeaserSection />
      <GalleryPreviewSection />
      <TestimonialSection />
      <ProcessSection />
      <ContactSection />
    </>
  );
}
