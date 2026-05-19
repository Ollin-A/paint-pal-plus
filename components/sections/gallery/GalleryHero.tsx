import { homeCopy } from '@/lib/copy';

export default function GalleryHero() {
  const { eyebrow, headline, subhead } = homeCopy.gallery.hero;

  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-12 md:pb-16 text-center">
      <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-4">
        {eyebrow}
      </p>
      <h1
        className="font-display"
        style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}
      >
        {headline}
      </h1>
      <p className="mt-6 text-lg opacity-75 max-w-xl mx-auto leading-relaxed">
        {subhead}
      </p>
    </section>
  );
}
