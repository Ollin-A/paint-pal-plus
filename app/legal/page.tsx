import type { Metadata } from 'next';
import { legalCopy } from '@/lib/legal-copy';

export const metadata: Metadata = {
  title: 'Legal',
  description: 'Terms of service and privacy policy for Paint Pal Plus.',
  robots: { index: false, follow: true },
  alternates: { canonical: '/legal' },
};

export default function LegalPage() {
  return (
    <article className="max-w-3xl mx-auto px-6 md:px-12 pt-32 md:pt-40 pb-24 md:pb-32">
      <header className="mb-16 md:mb-20">
        <p className="font-mono text-xs uppercase tracking-wider opacity-60 mb-3">
          Legal
        </p>
        <h1
          className="font-display"
          style={{ fontSize: 'var(--text-hero)', lineHeight: 1.05 }}
        >
          Terms &amp; privacy.
        </h1>
        <p className="font-mono text-xs uppercase tracking-wider opacity-50 mt-6">
          Last updated · {legalCopy.lastUpdated}
        </p>
      </header>

      {legalCopy.sections.map((section) => (
        <section
          key={section.id}
          id={section.id}
          className="mb-16 md:mb-20 scroll-mt-24"
        >
          <h2
            className="font-display mb-6"
            style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
          >
            {section.title}
          </h2>
          <div className="space-y-6">
            {section.paragraphs.map((p, i) => (
              <p key={i} className="text-lg leading-relaxed opacity-90">
                {p}
              </p>
            ))}
          </div>
        </section>
      ))}
    </article>
  );
}
