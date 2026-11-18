import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  poweredByHeader: false,
  async redirects() {
    return [
      {
        source: "/company-valuation",
        destination: "/resources/company-valuation/what-is-company-valuation",
        permanent: true,
      },
      {
        source: "/company-valuation-methods",
        destination: "/resources/company-valuation/methods",
        permanent: true,
      },
      {
        source: "/what-is-valuation",
        destination: "/resources/company-valuation/what-is-company-valuation",
        permanent: true,
      },
      {
        source: "/valuation-methods",
        destination: "/resources/company-valuation/methods",
        permanent: true,
      },
      {
        source: "/solutions/manual-data-input",
        destination: "/solutions/manual-data-input-company-valuation",
        permanent: true,
      },
      {
        source: "/solutions/manual-data-input/key-features",
        destination:
          "/solutions/manual-data-input-company-valuation/key-features",
        permanent: true,
      },
      {
        source: "/solutions/manual-data-input/user-manual",
        destination:
          "/solutions/manual-data-input-company-valuation/user-manual",
        permanent: true,
      },
      {
        source: "/solutions/pdf-based-valuation",
        destination: "/solutions/pdf-based-company-valuation",
        permanent: true,
      },
      {
        source: "/solutions/why-do-you-need-valuation",
        destination: "/solutions/why-do-you-need-company-valuation",
        permanent: true,
      },
      {
        source: "/key-features",
        destination:
          "/solutions/manual-data-input-company-valuation/key-features",
        permanent: true,
      },
      {
        source: "/user-manual",
        destination:
          "/solutions/manual-data-input-company-valuation/user-manual",
        permanent: true,
      },
    ];
  },
  async headers() {
    const indexable =
      process.env.SITE_INDEXABLE === "true" &&
      process.env.VERCEL_ENV !== "preview";
    return [
      {
        source: "/:path*",
        headers: [
          { key: "X-Content-Type-Options", value: "nosniff" },
          { key: "Referrer-Policy", value: "strict-origin-when-cross-origin" },
          ...(indexable
            ? []
            : [{ key: "X-Robots-Tag", value: "noindex, nofollow" }]),
        ],
      },
      ...["/order/:path*", "/checkout/:path*", "/report", "/api/:path*"].map(source => ({
        source,
        headers: [
          { key: "X-Robots-Tag", value: "noindex, nofollow" },
          { key: "Referrer-Policy", value: "no-referrer" },
          { key: "Cache-Control", value: "private, no-store" },
        ],
      })),
    ];
  },
};
export default nextConfig;
