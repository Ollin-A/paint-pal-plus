import { contactCopy } from '@/lib/contact-copy';

export default function ContactHero() {
  return (
    <section className="max-w-3xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 md:pb-20 text-center">
      <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
        {contactCopy.hero.eyebrow}
      </p>
      <h1
        className="font-display"
        style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}
      >
        {contactCopy.hero.headline}
      </h1>
      <p className="mt-6 text-lg md:text-xl opacity-75 max-w-xl mx-auto leading-relaxed">
        {contactCopy.hero.subhead}
      </p>
    </section>
  );
}
