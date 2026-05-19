import ContactForm from '@/components/ui/ContactForm';
import { homeCopy } from '@/lib/copy';
import type { LeadSource } from '@/lib/leads';

type ContactSectionProps = {
  source?: Extract<LeadSource, 'home-contact' | 'painting-page-contact'>;
};

export default function ContactSection({
  source = 'home-contact',
}: ContactSectionProps = {}) {
  const copy = homeCopy.contactSection;

  return (
    <section
      style={{
        background: 'var(--color-evergreen)',
        color: 'var(--color-fog)',
      }}
      className="py-24 md:py-32"
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid gap-16 md:grid-cols-5 md:gap-20">
        <div className="md:col-span-3">
          <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
            {copy.eyebrow}
          </p>
          <h2
            className="font-display mb-4"
            style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
          >
            {copy.heading}
          </h2>
          <p className="opacity-80 mb-12 max-w-prose">{copy.subhead}</p>

          <ContactForm source={source} variant="inline" />
        </div>

        <div className="md:col-span-2 space-y-12">
          <div>
            <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
              {copy.serviceArea.label}
            </p>
            <p className="text-lg leading-relaxed">
              {copy.serviceArea.prefix} {copy.serviceArea.towns.join(', ')}
              {' — '}
              {copy.serviceArea.suffix}
            </p>
          </div>
          <div>
            <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
              {copy.phone.label}
            </p>
            <a
              href={copy.phone.href}
              className="font-display text-4xl md:text-5xl underline-offset-8 hover:underline"
            >
              {copy.phone.display}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
