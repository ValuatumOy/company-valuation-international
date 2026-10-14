import type { Metadata } from "next";

export const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL || "https://company-valuation.com";
export const indexable =
  process.env.SITE_INDEXABLE === "true" && process.env.VERCEL_ENV !== "preview";
export const serviceLinks = {
  pdf: "https://valuation.valuatum.com/",
  manual: "https://estimator.valuatum.com/",
  manualRegistration:
    "https://estimator.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=PPVTemplate&userType=&popup=true",
  finland: "https://arvonmaaritys.fi/",
  finlandRegistration:
    "https://valuation-finland.valuatum.com/AspAndUserCreation.action?templateAspQueryKey=CVFinland&popup=true",
  denmark: "https://creditreports.dk/en/",
  email: "mailto:company-valuation@valuatum.com",
};

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${siteUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${siteUrl}${path}`,
      type: "website",
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
      title,
      description,
      images: ["/og-image.png"],
    },
  };
}
