import { notFound } from "next/navigation";
import { contentPages } from "@/content/pages";
import { ContentPageView } from "@/components/content-page";
import { pageMetadata } from "@/lib/site";

export const dynamicParams = false;
export function generateStaticParams() {
  return contentPages.map((page) => ({ slug: page.path.slice(1).split("/") }));
}

type PageProps = { params: Promise<{ slug: string[] }> };

export async function generateMetadata({ params }: PageProps) {
  const { slug } = await params;
  const page = contentPages.find((item) => item.path === `/${slug.join("/")}`);
  if (!page) notFound();
  return pageMetadata(page.title, page.description, page.path);
}

export default async function Page({ params }: PageProps) {
  const { slug } = await params;
  const page = contentPages.find((item) => item.path === `/${slug.join("/")}`);
  if (!page) notFound();
  return <ContentPageView page={page} />;
}
