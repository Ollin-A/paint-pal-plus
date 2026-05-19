import Link from "next/link";

const PHONE_HREF = "tel:+15037730800";
const PHONE_LABEL = "(503) 773-0800";
const EMAIL = "hello@paintpalplus.com";

export default function Footer() {
  return (
    <footer className="bg-evergreen text-fog">
      <div className="px-6 md:px-10 py-16 md:py-20 max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sage mb-4">
              Contact
            </h3>
            <a
              href={PHONE_HREF}
              className="block font-(family-name:--font-fraunces) text-3xl mb-3"
            >
              {PHONE_LABEL}
            </a>
            <a
              href={`mailto:${EMAIL}`}
              className="block text-sm opacity-80 hover:opacity-100 mb-3"
            >
              {EMAIL}
            </a>
            <address className="not-italic text-sm opacity-80 leading-relaxed">
              McMinnville, OR
              <br />
              Yamhill County
            </address>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sage mb-4">
              Hours
            </h3>
            <ul className="text-sm opacity-80 space-y-2">
              <li>Mon–Thu · 7am–5pm</li>
              <li>Friday · 7am–3pm</li>
              <li>Sat–Sun · By appointment</li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sage mb-4">
              Visit
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-ochre transition-colors"
                >
                  Facebook
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-ochre transition-colors"
                >
                  Instagram
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="opacity-80 hover:opacity-100 hover:text-ochre transition-colors"
                >
                  Leave a Google review →
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-mono text-xs uppercase tracking-wider text-sage mb-4">
              Legal
            </h3>
            <ul className="text-sm space-y-2">
              <li>
                <Link
                  href="/legal#terms"
                  className="opacity-80 hover:opacity-100 hover:text-ochre transition-colors"
                >
                  Terms
                </Link>
              </li>
              <li>
                <Link
                  href="/legal#privacy"
                  className="opacity-80 hover:opacity-100 hover:text-ochre transition-colors"
                >
                  Privacy
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-sage/20 mt-16 pt-6 flex flex-col md:flex-row items-start md:items-center justify-between gap-3 font-mono text-xs opacity-70">
          <span>© 2026 Paint Pal Plus · Yamhill County, Oregon</span>
          {/* PPP Construction cross-link hidden until sister site launches */}
          {/* <Link href="https://pppconstruction.com" className="hover:text-ochre">PPP Construction →</Link> */}
        </div>
      </div>
    </footer>
  );
}
