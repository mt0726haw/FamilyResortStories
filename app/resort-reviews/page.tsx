import Link from "next/link";
import { Star, ArrowRight } from "lucide-react";
import type { Metadata } from "next";
import Nav from "@/components/Nav";
import { TrustRow, Newsletter, Footer } from "@/components/BottomSections";
import { RESORTS_DETAIL } from "@/lib/resorts";
import { COLORS as C } from "@/lib/data";

export const metadata: Metadata = {
  title: "Family Resort Reviews – Honest, Real Experiences | Family Resort Stories",
  description: "Honest family resort reviews from real families — rated, tested and trusted. Greece, Turkey, Egypt and beyond.",
};

export default function ResortReviewsIndex() {
  return (
    <main style={{ background: C.cream, minHeight: "100vh" }}>
      <Nav />

      <div className="pt-24 lg:pt-28 pb-10 lg:pb-14">
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
          {/* Header */}
          <div className="text-center mb-8 lg:mb-12">
            <div className="text-[11px] tracking-[0.32em] uppercase font-semibold" style={{ color: C.goldDeep }}>
              Resort Reviews
            </div>
            <h1 className="font-display text-[36px] sm:text-[48px] lg:text-[60px] font-light leading-[1.05] mt-3" style={{ color: C.ink }}>
              Honest family resort reviews
            </h1>
            <p className="text-[14px] mt-3 max-w-xl mx-auto" style={{ color: C.inkSoft }}>
              Real experiences from real families — every resort here was visited, tested and rated by us.
            </p>
          </div>

          {/* Grid of all resorts */}
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-5">
            {RESORTS_DETAIL.map((r) => (
              <Link
                key={r.slug}
                href={`/resort-reviews/${r.slug}`}
                className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 10px 30px -12px rgba(26,36,56,.16)" }}
              >
                <div className="relative aspect-[4/3] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img src={r.heroImage} alt={r.name} loading="lazy" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]" />
                </div>
                <div className="p-5">
                  <div className="text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ color: C.goldDeep }}>
                    {r.region}
                  </div>
                  <h3 className="font-display text-[22px] lg:text-[24px] font-medium mt-1 leading-tight" style={{ color: C.ink }}>
                    {r.name}
                  </h3>
                  <div className="text-[12.5px] mt-1" style={{ color: C.inkSoft }}>
                    {r.city}, {r.country}
                  </div>

                  <div className="flex items-center gap-3 mt-4 pt-4 border-t" style={{ borderColor: C.beigeWarm }}>
                    <div className="flex items-center gap-1.5">
                      <span className="text-[15px] font-bold" style={{ color: C.ink }}>{r.rating}</span>
                      <Star size={12} fill={C.gold} stroke="none" />
                      <span className="text-[11.5px] font-semibold" style={{ color: C.ink }}>{r.ratingLabel}</span>
                    </div>
                    <span className="text-[10.5px]" style={{ color: C.inkSoft }}>{r.reviewCount} reviews</span>
                  </div>

                  <div className="mt-4 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase" style={{ color: C.goldDeep }}>
                    Read full review <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <TrustRow />
      <Newsletter />
      <Footer />
    </main>
  );
}
