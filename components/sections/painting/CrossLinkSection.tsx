import { paintingCopy } from '@/lib/painting-copy';

export default function CrossLinkSection() {
  const { heading, body, cta, href, enabled } = paintingCopy.crossLink;
  if (!enabled) return null;

  return (
    <section className="max-w-4xl mx-auto px-6 md:px-12 py-24 md:py-32 text-center">
      <h2
        className="font-display"
        style={{ fontSize: 'var(--text-section)', lineHeight: 1.1 }}
      >
        {heading}
      </h2>
      <p className="mt-6 text-lg leading-relaxed opacity-80">{body}</p>
      <a
        href={href}
        className="group inline-flex items-center mt-10 font-mono text-xs uppercase tracking-wider"
      >
        {cta.replace(' →', '')}
        <span className="ml-2 transition-transform group-hover:translate-x-1">→</span>
      </a>
    </section>
  );
}
