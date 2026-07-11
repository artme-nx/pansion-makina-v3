import type { Metadata } from "next";
import { Newsreader, Inter, Space_Mono } from "next/font/google";
import { SmoothScroll } from "@/components/smooth-scroll";
import { RevealInit } from "@/components/reveal-init";
import { SiteHeader } from "@/components/site-header";
import "./globals.css";

const newsreader = Newsreader({
  variable: "--font-newsreader",
  subsets: ["latin"],
  style: ["normal", "italic"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceMono = Space_Mono({
  variable: "--font-space-mono",
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Pansion Makina — Vodice",
  description:
    "Pansion Makina, obiteljski pansion na rivi u Vodicama — sobe na dva koraka od ACI marine i plaže Male Vrulje. Doručak, klimatizirane sobe, rezervacije na +385 95 440 0155.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="hr"
      className={`${newsreader.variable} ${inter.variable} ${spaceMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <SmoothScroll>
          <SiteHeader />
          {children}
        </SmoothScroll>
        <RevealInit />
      </body>
    </html>
  );
}
