import HeroSection from '@/components/sections/HeroSection';
import ManifestoSection from '@/components/sections/ManifestoSection';
import ServicesChipsSection from '@/components/sections/ServicesChipsSection';
import ColorMarqueeSection from '@/components/sections/ColorMarqueeSection';
import AboutTeaserSection from '@/components/sections/AboutTeaserSection';
import GalleryPreviewSection from '@/components/sections/GalleryPreviewSection';
import TestimonialSection from '@/components/sections/TestimonialSection';
import ProcessSection from '@/components/sections/ProcessSection';
import ContactSection from '@/components/sections/ContactSection';

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
