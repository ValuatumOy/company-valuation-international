import Link from "next/link";
import { Suspense } from "react";
import Image from "next/image";
import { contentPages, type ContentPage } from "@/content/pages";
import { Arrow } from "./icon";
import { ContactForm } from "./contact-form";
import { JsonLd } from "./json-ld";
import { siteUrl, serviceLinks } from "@/lib/site";
import imageSizes from "@/content/image-sizes.json";
import { ValuationDiagram } from "./valuation-diagram";

const actions: Record<string, { label: string; href: string }> = {
  "/solutions/pdf-based-company-valuation": {
    label: "Upload a financial statement",
    href: serviceLinks.pdf,
  },
  "/solutions/manual-data-input-company-valuation": {
    label: "Register for manual valuation",
    href: serviceLinks.manualRegistration,
  },
  "/solutions/finnish-company-valuation": {
    label: "Visit arvonmaaritys.fi",
    href: serviceLinks.finland,
  },
  "/contact-finland": {
    label: "Visit arvonmaaritys.fi",
    href: serviceLinks.finland,
  },
  "/solutions/danish-company-valuation": {
    label: "Request report",
    href: `${serviceLinks.reportRequest}?country=Denmark`,
  },
  "/solutions/international-company-valuation": {
    label: "Request report",
    href: serviceLinks.reportRequest,
  },
};

export function ContentPageView({ page }: { page: ContentPage }) {
  const action = actions[page.path];
  const related = page.related
    ?.map((path) => contentPages.find((item) => item.path === path))
    .filter((item): item is ContentPage => !!item);
  const isContact = page.path === "/contact-international";
  const isFinland = page.path === "/solutions/finnish-company-valuation" || page.path === "/contact-finland";
  const sizes = imageSizes as Record<string, { width: number; height: number }>;
  const faqSections = page.sections.filter(
    (section) => section.title.endsWith("?") && section.paragraphs?.length,
  );
  return (
    <main id="main">
      <div className="page-hero">
        <nav className="breadcrumb" aria-label="Breadcrumb">
          <Link href="/">Home</Link>
          <Arrow />
          <span>{page.eyebrow}</span>
        </nav>
        <p className="eyebrow">{page.eyebrow}</p>
        <h1>{page.title}</h1>
        <p className="intro">{page.intro}</p>
        {action && (
          <div className="actions">
            <a
              className="button"
              href={action.href}
              target={action.href.startsWith("https:") ? "_blank" : undefined}
              rel={action.href.startsWith("https:") ? "noopener noreferrer" : undefined}
            >
              {action.label}
              <Arrow diagonal />
            </a>
            {isFinland ? (
              <a className="button button-outline" href={serviceLinks.finlandSample} target="_blank" rel="noopener noreferrer">
                View Finnish sample report <Arrow diagonal />
              </a>
            ) : page.kind === "solution" && (
              <Link className="button button-outline" href="/sample-report">
                Explore a sample report <Arrow />
              </Link>
            )}
          </div>
        )}
      </div>
      <div className="content-shell">
        <aside className="page-toc">
          <h2>On this page</h2>
          <nav aria-label="Page contents">
            {page.sections.map((section) => (
              <a href={`#${section.id}`} key={section.id}>
                {section.title}
              </a>
            ))}
          </nav>
          {/* eslint-disable-next-line @next/next/no-html-link-for-pages -- Native anchors also scroll when the destination hash is already current. */}
          <a className="toc-cta" href="/#solutions">
            Find your valuation →
          </a>
        </aside>
        <article className="article-content">
          {isContact && (
            <Suspense fallback={<p>To request a report, email company-valuation@valuatum.com with the company name and country.</p>}>
              <ContactForm />
            </Suspense>
          )}
          {page.sections.map((section) => (
            <section
              className="article-section"
              key={section.id}
              id={section.id}
            >
              <h2>{section.title}</h2>
              {section.paragraphs?.map((text, i) => (
                <p key={i}>{text}</p>
              ))}
              {section.bullets && (
                <ul>
                  {section.bullets.map((text, i) => (
                    <li key={i}>{text}</li>
                  ))}
                </ul>
              )}
              {section.diagram && <ValuationDiagram kind={section.diagram} />}
              {section.image && (
                <figure className="legacy-figure">
                  <Image
                    src={section.image.src}
                    alt={section.image.alt}
                    width={sizes[section.image.src]?.width || 1000}
                    height={sizes[section.image.src]?.height || 650}
                    sizes="(max-width: 800px) 90vw, 760px"
                    style={{ width: "100%", height: "auto" }}
                  />
                  <figcaption>
                    Historical service illustration retained from the previous
                    website. The current interface and report may differ.
                  </figcaption>
                </figure>
              )}
              {section.video && (
                <figure className="video-figure">
                  <iframe
                    src={`https://www.youtube-nocookie.com/embed/${section.video.id}`}
                    title={section.video.title}
                    width="760"
                    height="428"
                    loading="lazy"
                    allow="encrypted-media; picture-in-picture; fullscreen"
                    allowFullScreen
                    referrerPolicy="strict-origin-when-cross-origin"
                  />
                  <figcaption>
                    {section.video.title}. Playing this video connects to YouTube.
                  </figcaption>
                </figure>
              )}
              {section.links && (
                <div className="article-links">
                  {section.links.map((link, i) => (
                    <a
                      href={link.href}
                      key={i}
                      target={link.href.startsWith("http") ? "_blank" : undefined}
                      rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                    >
                      {link.label}
                      <Arrow diagonal={link.href.startsWith("http")} />
                    </a>
                  ))}
                </div>
              )}
            </section>
          ))}
          {related?.length ? (
            <div className="related-pages">
              <h2>Keep exploring</h2>
              {related.map((item) => (
                item.path === "/solutions/finnish-company-valuation" || item.path === "/contact-finland" ? (
                  <a key={item.path} href={serviceLinks.finland} target="_blank" rel="noopener noreferrer">
                    Finnish valuations at arvonmaaritys.fi <Arrow diagonal />
                  </a>
                ) : <Link key={item.path} href={item.path}>
                  {item.title}
                  <Arrow />
                </Link>
              ))}
            </div>
          ) : null}
        </article>
      </div>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "BreadcrumbList",
          itemListElement: [
            { "@type": "ListItem", position: 1, name: "Home", item: siteUrl },
            {
              "@type": "ListItem",
              position: 2,
              name: page.title,
              item: `${siteUrl}${page.path}`,
            },
          ],
        }}
      />
      {page.kind === "guide" && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "Article",
            headline: page.title,
            description: page.description,
            inLanguage: "en",
            mainEntityOfPage: `${siteUrl}${page.path}`,
            author: { "@id": `${siteUrl}/#organization` },
            publisher: { "@id": `${siteUrl}/#organization` },
          }}
        />
      )}
      {faqSections.length > 0 && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: faqSections.map((section) => ({
              "@type": "Question",
              name: section.title,
              acceptedAnswer: {
                "@type": "Answer",
                text: section.paragraphs!.join(" "),
              },
            })),
          }}
        />
      )}
    </main>
  );
}
