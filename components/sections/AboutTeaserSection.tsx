import { homeCopy } from '@/lib/copy';

export default function AboutTeaserSection() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
      <div className="grid grid-cols-1 gap-8 md:grid-cols-2 md:gap-16 items-center">
        <div className="aspect-[3/4] w-full rounded-md bg-fog border border-evergreen/15 flex items-center justify-center px-6">
          <span className="font-mono text-xs uppercase tracking-[0.2em] text-evergreen/60 text-center leading-relaxed">
            Portrait · Oscar
            <br />
            To be replaced
          </span>
        </div>

        <div>
          <p className="text-[18px] leading-[1.7] first-letter:font-display first-letter:text-[80px] first-letter:leading-[0.8] first-letter:float-left first-letter:mr-3 first-letter:mt-1">
            {homeCopy.aboutTeaser.body}
          </p>
          <a
            href="/about"
            className="group inline-flex items-center mt-8 font-mono text-xs uppercase tracking-wider"
          >
            Read Oscar&rsquo;s story
            <span className="ml-2 transition-transform group-hover:translate-x-1">
              &rarr;
            </span>
          </a>
        </div>
      </div>
    </section>
  );
}
