import type { Metadata } from "next";
import { Manrope } from "next/font/google";
import { Header } from "@/components/header";
import { Footer } from "@/components/footer";
import { JsonLd } from "@/components/json-ld";
import { indexable, siteUrl } from "@/lib/site";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: "Company Valuation | Understand Your Business Value",
    template: "%s | Valuatum",
  },
  description:
    "Explore company valuation methods, read sample reports, and request a valuation. Finnish reports are available through arvonmaaritys.fi.",
  robots: {
    index: indexable,
    follow: indexable,
    ...(indexable ? { googleBot: { index: true, follow: true, "max-image-preview": "large", "max-snippet": -1, "max-video-preview": -1 } } : {}),
  },
  icons: { icon: "/icon.svg" },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={manrope.variable}>
      <body>
        <a className="skip-link" href="#main">
          Skip to content
        </a>
        <Header />
        {children}
        <Footer />
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "Organization",
                "@id": `${siteUrl}/#organization`,
                name: "Valuatum Oy",
                url: siteUrl,
                logo: `${siteUrl}/icon.svg`,
                sameAs: ["https://www.valuatum.com/"],
                email: "company-valuation@valuatum.com",
                foundingDate: "2000",
              },
              {
                "@type": "WebSite",
                "@id": `${siteUrl}/#website`,
                name: "Company Valuation by Valuatum",
                url: siteUrl,
                publisher: { "@id": `${siteUrl}/#organization` },
                inLanguage: "en",
              },
            ],
          }}
        />
      </body>
    </html>
  );
}
