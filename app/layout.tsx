import type { Metadata } from "next";
import { Fraunces, Hanken_Grotesk, JetBrains_Mono } from "next/font/google";
import Nav from "@/components/global/Nav";
import Footer from "@/components/global/Footer";
import ScrollTriggerRefresh from "@/components/global/ScrollTriggerRefresh";
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
  title: {
    default: "Paint Pal Plus — Painting houses in Yamhill County, Oregon",
    template: "%s — Paint Pal Plus",
  },
  description:
    "Residential and commercial painting in McMinnville, Newberg, Dundee, and the Willamette Valley. Family-owned since 2020.",
  metadataBase: new URL("https://www.paintpalplus.com"),
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
        <ScrollTriggerRefresh />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
