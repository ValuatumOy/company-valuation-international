import type { Metadata } from "next";

export const siteUrl = new URL(
  process.env.NEXT_PUBLIC_SITE_URL || "https://company-valuation.com",
).origin;
export const indexable =
  process.env.SITE_INDEXABLE === "true" && process.env.VERCEL_ENV !== "preview";
export const serviceLinks = {
  pdf: "https://valuation.valuatum.com/",
  pdfUpload: "https://dmtgt5nmtdrhv7bxgxmfw7vasy0pbvtr.lambda-url.eu-west-1.on.aws/",
  pdfRegistration:
    "https://pdfanalysis.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PDFAnalysis&popup=true",
  manual: "https://estimator.valuatum.com/",
  manualRegistration:
    "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
  finland: "https://arvonmaaritys.fi/",
  finlandSample: "https://arvonmaaritys.fi/samples/harvia-oyj.pdf",
  reportRequest: "/contact-international",
  denmark: "https://creditreports.dk/en/",
  email: "mailto:company-valuation@valuatum.com",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  const pageTitle = searchTitles[path] || title;
  const fullTitle = `${pageTitle} | Valuatum`;
  return {
    title: { absolute: fullTitle },
    description,
    alternates: { canonical: canonicalUrl(path) },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl(path),
      type: path.startsWith("/resources/company-valuation/") ? "article" : "website",
      siteName: "Company Valuation by Valuatum",
      locale: "en_US",
      images: [
        {
          url: "/og-image.png",
          width: 1200,
          height: 630,
          alt: "Company Valuation by Valuatum",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: ["/og-image.png"],
    },
  };
}

export function canonicalUrl(path: string) {
  return new URL(path, `${siteUrl}/`).href;
}

const searchTitles: Record<string, string> = {
  "/": "Company Valuation Tools and Reports",
  "/resources": "Company Valuation Guides and Resources",
  "/support": "Company Valuation Support",
  "/about-us": "About Valuatum: Company Valuation Software",
  "/contact-finland": "Finnish Valuation Enquiries: arvonmaaritys.fi",
  "/contact-international": "Request an International Company Valuation",
  "/solutions/manual-data-input-company-valuation/key-features":
    "Manual Company Valuation: Features",
  "/solutions/manual-data-input-company-valuation/user-manual":
    "Manual Company Valuation: User Guide",
};
