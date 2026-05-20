import { notFound } from "next/navigation";
import type { Metadata } from "next";
import ResortTemplate from "@/components/ResortTemplate";
import { RESORTS_DETAIL, getResortBySlug } from "@/lib/resorts";

// Pre-generate one HTML file per resort at build time (static export).
export function generateStaticParams() {
  return RESORTS_DETAIL.map((r) => ({ slug: r.slug }));
}

// Per-resort SEO metadata.
export async function generateMetadata({ params }: { params: { slug: string } }): Promise<Metadata> {
  const resort = getResortBySlug(params.slug);
  if (!resort) return { title: "Resort not found – Family Resort Stories" };

  const title = `${resort.name} Review – ${resort.city}, ${resort.country} | Family Resort Stories`;
  const description = `${resort.ratingLabel} ${resort.rating}/10 · ${resort.shortDescription}`;

  return {
    title,
    description,
    keywords: [
      resort.name,
      `${resort.name} review`,
      `${resort.name} family`,
      `${resort.city} family resort`,
      `${resort.country} family resort`,
      ...resort.highlights.map((h) => `${resort.name} ${h.label}`),
    ],
    openGraph: {
      title,
      description,
      type: "article",
      images: [{ url: resort.heroImage, width: 1800, height: 1200, alt: resort.name }],
    },
    alternates: {
      canonical: `/resort-reviews/${resort.slug}`,
    },
  };
}

export default function ResortReviewPage({ params }: { params: { slug: string } }) {
  const resort = getResortBySlug(params.slug);
  if (!resort) notFound();
  return <ResortTemplate resort={resort} />;
}
