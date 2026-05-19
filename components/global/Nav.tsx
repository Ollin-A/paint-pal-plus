"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import clsx from "clsx";

const PHONE_HREF = "tel:+15037730800";
const PHONE_LABEL = "Call (503) 773-0800";

const LINKS = [
  { href: "/about", label: "About" },
  { href: "/painting", label: "Painting" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
] as const;

export default function Nav() {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    if (!mobileOpen) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setMobileOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [mobileOpen]);

  const closeMobile = () => setMobileOpen(false);

  return (
    <>
      <nav
        data-scrolled={scrolled}
        className={clsx(
          "fixed top-0 left-0 right-0 z-50 transition-colors duration-300",
          "data-[scrolled=true]:bg-fog/95 data-[scrolled=true]:backdrop-blur-sm",
          "data-[scrolled=true]:border-b data-[scrolled=true]:border-sage/20"
        )}
      >
        <div className="flex items-center justify-between px-6 md:px-10 py-5">
          <Link href="/" aria-label="Paint Pal Plus — home" className="block">
            <Image
              src="/images/wordmark.svg"
              alt="Paint Pal Plus"
              width={180}
              height={40}
              priority
            />
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {LINKS.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={clsx(
                    "text-sm uppercase tracking-wider transition-opacity",
                    "hover:opacity-100",
                    active
                      ? "border-b border-ochre pb-0.5"
                      : "opacity-80 border-b border-transparent pb-0.5"
                  )}
                >
                  {link.label}
                </Link>
              );
            })}
            <a
              href={PHONE_HREF}
              className="inline-flex items-center rounded-full bg-ochre text-ochre-text px-4 py-2 text-sm font-medium tracking-wide hover:bg-ochre/90 transition-colors"
            >
              {PHONE_LABEL}
            </a>
          </div>

          <div className="flex md:hidden items-center gap-3">
            <a
              href={PHONE_HREF}
              aria-label={PHONE_LABEL}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-ochre text-ochre-text"
            >
              <PhoneIcon />
            </a>
            <button
              type="button"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              aria-expanded={mobileOpen}
              onClick={() => setMobileOpen((v) => !v)}
              className="inline-flex h-10 w-10 items-center justify-center text-evergreen"
            >
              {mobileOpen ? <CloseIcon /> : <HamburgerIcon />}
            </button>
          </div>
        </div>
      </nav>

      {mobileOpen && (
        <div className="fixed inset-0 z-40 bg-fog md:hidden">
          <div className="flex flex-col items-center justify-center min-h-screen gap-8 px-6">
            {LINKS.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={closeMobile}
                className="font-(family-name:--font-fraunces) text-3xl text-evergreen"
              >
                {link.label}
              </Link>
            ))}
            <a
              href={PHONE_HREF}
              onClick={closeMobile}
              className="mt-4 inline-flex items-center rounded-full bg-ochre text-ochre-text px-5 py-3 text-sm font-medium tracking-wide"
            >
              {PHONE_LABEL}
            </a>
          </div>
        </div>
      )}
    </>
  );
}

function HamburgerIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="3" y1="6" x2="19" y2="6" />
      <line x1="3" y1="11" x2="19" y2="11" />
      <line x1="3" y1="16" x2="19" y2="16" />
    </svg>
  );
}

function CloseIcon() {
  return (
    <svg
      width="22"
      height="22"
      viewBox="0 0 22 22"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.5"
      strokeLinecap="round"
      aria-hidden="true"
    >
      <line x1="5" y1="5" x2="17" y2="17" />
      <line x1="17" y1="5" x2="5" y2="17" />
    </svg>
  );
}

function PhoneIcon() {
  return (
    <svg
      width="18"
      height="18"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="1.75"
      strokeLinecap="round"
      strokeLinejoin="round"
      aria-hidden="true"
    >
      <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6A19.79 19.79 0 0 1 2.12 4.18 2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.13.96.36 1.9.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.91.34 1.85.57 2.81.7A2 2 0 0 1 22 16.92z" />
    </svg>
  );
}
