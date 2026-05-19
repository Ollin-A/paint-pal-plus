import { Suspense } from 'react';
import ContactHero from '@/components/sections/contact/ContactHero';
import ContactPageFormClient from '@/components/sections/contact/ContactPageFormClient';
import ServiceAreaMap from '@/components/sections/contact/ServiceAreaMap';

export const runtime = 'edge';

export default function ContactPage() {
  return (
    <>
      <ContactHero />
      <Suspense fallback={<div className="min-h-[60vh]" />}>
        <ContactPageFormClient />
      </Suspense>
      <ServiceAreaMap />
    </>
  );
}
