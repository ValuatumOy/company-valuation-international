import type { MetadataRoute } from "next";
import { contentPages } from "@/content/pages";
import { siteUrl } from "@/lib/site";

export default function sitemap(): MetadataRoute.Sitemap {
  return ["/", "/sample-report", ...contentPages.map((page) => page.path)].map(
    (path) => ({ url: `${siteUrl}${path}` }),
  );
}
