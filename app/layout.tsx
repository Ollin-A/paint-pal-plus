import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/global/Nav";
import Footer from "@/components/global/Footer";
import ScrollTriggerRefresh from "@/components/global/ScrollTriggerRefresh";
import StructuredData from "@/components/global/StructuredData";
import "./globals.css";

const fraunces = Fraunces({
  subsets: ["latin"],
  variable: "--font-fraunces",
  axes: ["SOFT", "WONK", "opsz"],
  display: "swap",
});

const hanken = Hanken_Grotesk({
  subsets: ["latin"],
  variable: "--font-hanken",
  display: "swap",
});

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://www.paintpalplus.com"),
  title: {
    default: "Paint Pal Plus — Painting houses in Yamhill County, Oregon",
    template: "%s — Paint Pal Plus",
  },
  description:
    "Residential and commercial painting in McMinnville, Newberg, Dundee, and the Willamette Valley. Family-owned since 2020.",
  openGraph: {
    type: "website",
    locale: "en_US",
    siteName: "Paint Pal Plus",
    images: ["/api/og?title=Paint%20Pal%20Plus"],
  },
  twitter: {
    card: "summary_large_image",
  },
  icons: {
    icon: "/icon",
    apple: "/apple-icon",
  },
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${fraunces.variable} ${hanken.variable} ${jetbrains.variable}`}
    >
      <body>
        <StructuredData />
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:bg-fog focus:text-evergreen focus:px-4 focus:py-2 focus:rounded-sm focus:font-mono focus:text-sm"
        >
          Skip to main content
        </a>
        <ScrollTriggerRefresh />
        <Nav />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
