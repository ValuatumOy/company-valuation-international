import Link from "next/link";
import { Arrow } from "@/components/icon";
import { JsonLd } from "@/components/json-ld";
import { pageMetadata, serviceLinks, siteUrl } from "@/lib/site";
import { ReportExamples, reportExamples } from "@/components/report-examples";

export const metadata = pageMetadata(
  "Company Valuation Report Examples",
  "Read full company valuation reports for NVIDIA, JYSK, Harvia, Gofore and Fiskars: financial history, forecasts, valuation methods and scenarios.",
  "/sample-report",
);

export default function SampleReport() {
  return (
    <main id="main">
      <div className="page-hero" id="company-examples">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Arrow />
          <span>Sample reports</span>
        </nav>
        <h1>Sample valuation reports.</h1>
        <p className="intro">
          Full reports from our valuation service, with financial history,
          forecasts, valuation methods and scenarios.
        </p>
        <ReportExamples />
        <div className="actions">
          <Link className="button" href={serviceLinks.reportRequest}>
            Request an English report <Arrow />
          </Link>
          <a className="button button-outline" href={serviceLinks.finland} target="_blank" rel="noopener noreferrer">
            Order a Finnish report <Arrow diagonal />
          </a>
        </div>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "CollectionPage",
          "@id": `${siteUrl}/sample-report#webpage`,
          url: `${siteUrl}/sample-report`,
          name: "Company valuation report examples",
          description: "Full Finnish and English PDF valuation reports for NVIDIA, JYSK, Harvia, Gofore and Fiskars.",
          inLanguage: "en",
          isPartOf: { "@id": `${siteUrl}/#website` },
          publisher: { "@id": `${siteUrl}/#organization` },
          hasPart: reportExamples.map((example) => ({
            "@type": "DigitalDocument",
            name: `${example.name} valuation report`,
            url: example.href.startsWith("/") ? `${siteUrl}${example.href}` : example.href,
            inLanguage: example.language,
            encodingFormat: "application/pdf",
          })),
        }}
      />
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: "Sample reports",
              item: `${siteUrl}/sample-report`,
            },
          ],
        }}
      />
    </main>
  );
}
