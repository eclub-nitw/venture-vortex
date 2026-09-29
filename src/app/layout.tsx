import type { Metadata } from "next";
import { bricolage, instrument, jetbrains } from "@/lib/fonts";
import { seo, event, eventJsonLd } from "@/data/event";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(seo.siteUrl),
  title: seo.title,
  description: seo.description,
  alternates: { canonical: "/" },
  openGraph: { title: seo.title, description: seo.description, url: seo.siteUrl, siteName: event.name, locale: "en_IN", type: "website", images: [{ url: "/og.png", width: 1200, height: 630 }] },
  twitter: { card: "summary_large_image", title: seo.title, description: seo.description, images: ["/og.png"] },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN" className={`${bricolage.variable} ${instrument.variable} ${jetbrains.variable}`}>
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(eventJsonLd()) }} />
        {children}
      </body>
    </html>
  );
}
