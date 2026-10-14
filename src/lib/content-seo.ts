import type { ContentPage } from "../content/pages";

export function contentBreadcrumbs(page: ContentPage, pages: ContentPage[]) {
  const parentPath = page.path.startsWith("/resources/")
    ? "/resources"
    : page.path === "/support/faq"
      ? "/support"
      : page.path.startsWith("/solutions/manual-data-input-company-valuation/")
        ? "/solutions/manual-data-input-company-valuation"
        : null;
  const parent = pages.find((item) => item.path === parentPath);
  return [
    { title: "Home", path: "/" },
    ...(parent ? [{ title: parent.title, path: parent.path }] : []),
    { title: page.title, path: page.path },
  ];
}

export function contentSchemaType(page: ContentPage) {
  if (page.path === "/resources") return "CollectionPage";
  if (page.path === "/about-us") return "AboutPage";
  if (page.path.startsWith("/contact-")) return "ContactPage";
  return "WebPage";
}

export function isValuationArticle(page: ContentPage) {
  return page.kind === "guide" && page.path !== "/resources";
}
