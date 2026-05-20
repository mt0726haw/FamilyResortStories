"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import {
  Star, Heart, Check, X, MapPin, Wifi, Wind, Clock, Calendar,
  Download, ArrowRight, ChevronRight, ChevronLeft, Share2,
  Bookmark, Coffee, Utensils, Waves, Palmtree, Crown, Sparkles,
  Users,
} from "lucide-react";
import type { ResortDetail } from "@/lib/resorts";
import { RESORTS_DETAIL } from "@/lib/resorts";
import { COLORS as C } from "@/lib/data";
import { useDevice } from "@/hooks/useDevice";
import Nav from "./Nav";
import { TrustRow, Newsletter, Footer } from "./BottomSections";

// ─── Highlight icon component ──────────────────────────────────────────────
function HighlightIcon({ kind, size = 18 }: { kind: ResortDetail["highlights"][0]["icon"]; size?: number }) {
  const props = { size, strokeWidth: 1.4, style: { color: C.goldDeep } };
  switch (kind) {
    case "beach":         return <Palmtree {...props} />;
    case "all-inclusive": return <Utensils {...props} />;
    case "kids-club":     return <Users    {...props} />;
    case "waterpark":     return <Waves    {...props} />;
    case "luxury":        return <Crown    {...props} />;
    case "spa":           return <Sparkles {...props} />;
  }
}

// ─── Breadcrumb ─────────────────────────────────────────────────────────────
function Breadcrumb({ items }: { items: ResortDetail["breadcrumb"] }) {
  return (
    <div className="max-w-[1320px] mx-auto px-5 lg:px-10 pt-3 pb-2">
      <nav className="flex items-center gap-1.5 text-[11.5px] flex-wrap" style={{ color: C.inkSoft }}>
        {items.map((b, i) => (
          <span key={b.label} className="flex items-center gap-1.5">
            {i > 0 && <ChevronRight size={11} className="opacity-50" />}
            {i === items.length - 1 ? (
              <span className="font-semibold" style={{ color: C.ink }}>{b.label}</span>
            ) : (
              <Link href={b.href} className="hover:underline opacity-80">{b.label}</Link>
            )}
          </span>
        ))}
      </nav>
    </div>
  );
}

// ─── Hero with floating info card ──────────────────────────────────────────
function ResortHero({ resort }: { resort: ResortDetail }) {
  return (
    <section className="relative">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="relative grid grid-cols-1 lg:grid-cols-[360px_1fr] gap-0 lg:gap-0 lg:items-stretch">

          {/* Floating info card */}
          <div className="lg:absolute lg:top-6 lg:left-10 z-20 lg:max-w-[360px] order-2 lg:order-1">
            <div
              className="rounded-2xl p-5 lg:p-6 bg-white"
              style={{ boxShadow: "0 8px 40px -12px rgba(26,36,56,.25)" }}
            >
              <span
                className="inline-block px-2.5 py-1 rounded-md text-[9.5px] tracking-[0.18em] uppercase font-bold mb-3"
                style={{ background: C.sand, color: C.goldDeep }}
              >
                Resort Review
              </span>

              <h1 className="font-display text-[28px] lg:text-[32px] leading-[1.05] font-medium" style={{ color: C.ink }}>
                {resort.name}
              </h1>
              <div className="text-[13px] mt-1" style={{ color: C.inkSoft }}>
                {resort.city}, {resort.country}
              </div>

              {/* Rating row */}
              <div className="flex items-center gap-2 mt-3">
                <span className="text-[17px] font-bold" style={{ color: C.ink }}>{resort.rating}</span>
                <Star size={14} fill={C.gold} stroke="none" />
                <span className="text-[12px] font-semibold" style={{ color: C.ink }}>{resort.ratingLabel}</span>
                <span className="text-[11.5px]" style={{ color: C.inkSoft }}>({resort.reviewCount} reviews)</span>
              </div>

              {/* Highlights row */}
              <div className="grid grid-cols-4 gap-1 mt-4 pb-4 border-b" style={{ borderColor: C.beigeWarm }}>
                {resort.highlights.map((h) => (
                  <div key={h.label} className="flex flex-col items-center text-center gap-1">
                    <HighlightIcon kind={h.icon} size={18} />
                    <span className="text-[9.5px] leading-tight" style={{ color: C.inkSoft }}>{h.label}</span>
                  </div>
                ))}
              </div>

              {/* Description */}
              <p className="text-[12.5px] leading-relaxed mt-4" style={{ color: C.inkSoft }}>
                {resort.shortDescription}
              </p>

              {/* CTAs */}
              <button
                className="mt-4 w-full py-3 rounded-lg flex items-center justify-center gap-2 text-[12px] font-semibold tracking-[0.12em] uppercase hover:opacity-90 transition"
                style={{ background: C.ink, color: C.cream, minHeight: 44 }}
              >
                Check Prices <ArrowRight size={14} />
              </button>
              <button
                className="mt-2 w-full py-2.5 rounded-lg flex items-center justify-center gap-1.5 text-[11.5px] font-semibold transition hover:bg-[#f5ecdc55]"
                style={{ color: C.inkSoft }}
              >
                <Heart size={13} /> Save to wishlist
              </button>
            </div>
          </div>

          {/* Hero image */}
          <div className="lg:col-start-1 lg:col-end-3 order-1 lg:order-2">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img
              src={resort.heroImage}
              alt={resort.name}
              className="w-full h-[260px] sm:h-[340px] lg:h-[460px] object-cover rounded-2xl"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Sticky tab nav ─────────────────────────────────────────────────────────
const TABS = ["Overview", "Rooms", "Pools", "Kids Club", "Food", "Beach", "Activities", "Pros & Cons", "Tips", "Map"];

function StickyTabs({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  return (
    <div
      className="sticky top-[64px] lg:top-[70px] z-30 mt-6 lg:mt-8"
      style={{ background: C.paper, borderTop: `1px solid ${C.beigeWarm}`, borderBottom: `1px solid ${C.beigeWarm}` }}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="flex gap-5 lg:gap-7 overflow-x-auto noscroll py-3.5 -mx-2 px-2">
          {TABS.map((t) => {
            const isActive = active.toLowerCase() === t.toLowerCase();
            return (
              <button
                key={t}
                onClick={() => onChange(t)}
                className="text-[11.5px] tracking-[0.16em] uppercase font-semibold whitespace-nowrap pb-1 relative transition"
                style={{ color: isActive ? C.ink : C.inkSoft, opacity: isActive ? 1 : 0.7 }}
              >
                {t}
                {isActive && (
                  <span className="absolute left-0 right-0 -bottom-3.5 h-[2px]" style={{ background: C.gold }} />
                )}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ─── Honest review section ─────────────────────────────────────────────────
function HonestReview({ resort }: { resort: ResortDetail }) {
  return (
    <section id="overview" className="scroll-mt-24">
      <h2 className="font-display text-[26px] lg:text-[30px] font-medium" style={{ color: C.ink }}>
        Our Honest Family Review
      </h2>

      <div className="mt-5 grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6 lg:gap-8">
        <div className="flex gap-4">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.honestReview.authorImage}
            alt="Author"
            className="hidden sm:block w-20 h-20 lg:w-24 lg:h-24 rounded-full object-cover shrink-0"
            style={{ boxShadow: `0 0 0 3px ${C.cream}, 0 0 0 4px ${C.beigeWarm}` }}
          />
          <div>
            {resort.honestReview.paragraphs.map((p, i) => (
              <p key={i} className="text-[13px] lg:text-[13.5px] leading-relaxed mb-3" style={{ color: C.inkSoft }}>
                {p}
              </p>
            ))}
            <Link href="#" className="inline-flex items-center gap-1.5 text-[12px] font-semibold mt-1" style={{ color: C.goldDeep }}>
              Read full experience <ArrowRight size={13} />
            </Link>
          </div>
        </div>

        {/* Quick facts table */}
        <div className="rounded-xl p-4" style={{ background: C.sandLight, border: `1px solid ${C.beigeWarm}` }}>
          <div className="text-[10.5px] tracking-[0.22em] uppercase font-bold mb-3" style={{ color: C.inkSoft }}>
            Resort Quick Facts
          </div>
          <dl className="space-y-2.5 text-[12px]">
            {([
              ["Location",         resort.quickFacts.location],
              ["Airport transfer", resort.quickFacts.airportTransfer],
              ["Best for",         resort.quickFacts.bestFor],
              ["Resort size",      resort.quickFacts.resortSize],
              ["Our rating",       resort.quickFacts.ourRating],
            ] as const).map(([k, v]) => (
              <div key={k} className="flex justify-between gap-3">
                <dt style={{ color: C.inkSoft }}>{k}</dt>
                <dd className="text-right font-semibold" style={{ color: C.ink }}>{v}</dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  );
}

// ─── Best for families ────────────────────────────────────────────────────
function BestForFamilies({ best }: { best: ResortDetail["bestFor"] }) {
  const groups = [
    { label: "Babies",   age: "0–2", icon: "👶", rating: best.babies   },
    { label: "Toddlers", age: "2–4", icon: "🧸", rating: best.toddlers },
    { label: "Kids",     age: "5–12", icon: "🎈", rating: best.kids     },
    { label: "Teens",    age: "13+",  icon: "🎧", rating: best.teens    },
  ];
  return (
    <section className="mt-8 lg:mt-10 rounded-xl px-4 lg:px-6 py-4 lg:py-5" style={{ background: C.sandLight, border: `1px solid ${C.beigeWarm}` }}>
      <div className="grid grid-cols-2 lg:grid-cols-[120px_1fr_1fr_1fr_1fr] gap-3 lg:gap-5 items-center">
        <div className="text-[12px] font-bold tracking-[0.12em] uppercase col-span-2 lg:col-span-1" style={{ color: C.ink }}>
          Best for
        </div>
        {groups.map((g) => (
          <div key={g.label} className="flex flex-col items-center text-center gap-1">
            <span className="text-[24px] leading-none">{g.icon}</span>
            <div className="text-[12px] font-bold" style={{ color: C.ink }}>{g.label}</div>
            <div className="text-[10.5px]" style={{ color: C.inkSoft }}>({g.age})</div>
            <div className="flex gap-0.5 mt-0.5">
              {[1, 2, 3, 4, 5].map((n) => (
                <Star key={n} size={11} fill={n <= g.rating ? C.gold : "none"} stroke={n <= g.rating ? "none" : C.beigeWarm} />
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Generic photo grid (Rooms / Pools / Food) ────────────────────────────
function PhotoSection<T extends { name: string; description: string; image: string }>({
  id, title, items, viewAll, cols = 4, ourPickKey,
}: {
  id: string;
  title: string;
  items: (T & { ourPick?: boolean; sleeps?: string; size?: string })[];
  viewAll?: string;
  cols?: 3 | 4;
  ourPickKey?: boolean;
}) {
  return (
    <section id={id} className="mt-10 lg:mt-12 scroll-mt-24">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-display text-[24px] lg:text-[28px] font-medium" style={{ color: C.ink }}>{title}</h2>
        {viewAll && (
          <a href="#" className="text-[11.5px] font-semibold tracking-[0.1em] flex items-center gap-1" style={{ color: C.goldDeep }}>
            {viewAll} <ArrowRight size={12} />
          </a>
        )}
      </div>
      <div className={`grid grid-cols-2 md:grid-cols-${cols} gap-3 lg:gap-4`}>
        {items.map((item) => (
          <div key={item.name} className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 6px 22px -12px rgba(26,36,56,.14)" }}>
            <div className="relative aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={item.image} alt={item.name} loading="lazy" className="w-full h-full object-cover" />
              {ourPickKey && item.ourPick && (
                <span className="absolute top-2.5 left-2.5 px-2 py-1 rounded text-[9px] tracking-[0.18em] uppercase font-bold" style={{ background: C.ink, color: C.cream }}>
                  Our Pick
                </span>
              )}
            </div>
            <div className="p-3 lg:p-4">
              <div className="text-[13px] font-bold leading-tight" style={{ color: C.ink }}>{item.name}</div>
              <div className="text-[11.5px] mt-1 leading-snug" style={{ color: C.inkSoft }}>{item.description}</div>
              {(item.sleeps || item.size) && (
                <div className="text-[10.5px] mt-2 flex gap-2" style={{ color: C.goldDeep }}>
                  {item.sleeps && <span>{item.sleeps}</span>}
                  {item.size   && <span>· {item.size}</span>}
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Kids Club & Waterpark ────────────────────────────────────────────────
function KidsClubSection({ resort }: { resort: ResortDetail }) {
  const cards = [
    { name: "Kids Club",  ...resort.kidsClub  },
    ...(resort.waterpark ? [{ name: "Waterpark", ...resort.waterpark }] : []),
  ];
  return (
    <section id="kids-club" className="mt-10 lg:mt-12 scroll-mt-24">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-display text-[24px] lg:text-[28px] font-medium" style={{ color: C.ink }}>
          Kids Club {resort.waterpark ? "& Waterpark" : ""}
        </h2>
        <a href="#" className="text-[11.5px] font-semibold tracking-[0.1em] flex items-center gap-1" style={{ color: C.goldDeep }}>View more <ArrowRight size={12} /></a>
      </div>
      <div className={`grid grid-cols-1 ${cards.length > 1 ? "md:grid-cols-2" : ""} gap-3 lg:gap-4`}>
        {cards.map((c) => (
          <div key={c.name} className="rounded-xl overflow-hidden bg-white" style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 6px 22px -12px rgba(26,36,56,.14)" }}>
            <div className="relative aspect-[16/9] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={c.image} alt={c.name} loading="lazy" className="w-full h-full object-cover" />
              <span className="absolute top-3 right-3 px-2.5 py-1 rounded text-[10px] tracking-[0.14em] uppercase font-bold" style={{ background: "rgba(255,255,255,.92)", color: C.goldDeep }}>
                {c.ageRange}
              </span>
            </div>
            <div className="p-4">
              <div className="text-[14px] font-bold" style={{ color: C.ink }}>{c.name}</div>
              <div className="text-[12px] mt-1 leading-snug" style={{ color: C.inkSoft }}>{c.description}</div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

// ─── Pros & Cons ──────────────────────────────────────────────────────────
function ProsCons({ loved, notPerfect }: { loved: string[]; notPerfect: string[] }) {
  return (
    <section id="pros-&-cons" className="mt-10 lg:mt-12 scroll-mt-24 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
      <div className="rounded-xl p-4 lg:p-5" style={{ background: "#eef6ee", border: "1px solid #d4e7d2" }}>
        <div className="text-[12px] font-bold mb-3" style={{ color: "#2d5a36" }}>What We Loved</div>
        <ul className="space-y-2">
          {loved.map((l) => (
            <li key={l} className="flex items-start gap-2 text-[12.5px]" style={{ color: C.ink }}>
              <Check size={14} className="mt-0.5 shrink-0" style={{ color: "#3a8048" }} strokeWidth={2.2} />
              <span>{l}</span>
            </li>
          ))}
        </ul>
      </div>
      <div className="rounded-xl p-4 lg:p-5" style={{ background: "#fbeeee", border: "1px solid #ecd6d6" }}>
        <div className="text-[12px] font-bold mb-3" style={{ color: "#7a3434" }}>Not Perfect</div>
        <ul className="space-y-2">
          {notPerfect.map((n) => (
            <li key={n} className="flex items-start gap-2 text-[12.5px]" style={{ color: C.ink }}>
              <X size={14} className="mt-0.5 shrink-0" style={{ color: "#a64545" }} strokeWidth={2.2} />
              <span>{n}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

// ─── Similar resorts ──────────────────────────────────────────────────────
function SimilarResorts({ slugs }: { slugs: string[] }) {
  const items = slugs
    .map((s) => RESORTS_DETAIL.find((r) => r.slug === s))
    .filter((r): r is ResortDetail => Boolean(r));
  return (
    <section className="mt-10 lg:mt-12">
      <div className="flex items-end justify-between mb-4">
        <h2 className="font-display text-[24px] lg:text-[28px] font-medium" style={{ color: C.ink }}>Similar Family Resorts</h2>
        <Link href="/resort-reviews" className="text-[11.5px] font-semibold tracking-[0.1em] flex items-center gap-1" style={{ color: C.goldDeep }}>
          View all resorts <ArrowRight size={12} />
        </Link>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3 lg:gap-4">
        {items.map((r) => (
          <Link key={r.slug} href={`/resort-reviews/${r.slug}`} className="group block rounded-xl overflow-hidden bg-white transition-transform duration-300 hover:-translate-y-1"
            style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 6px 22px -12px rgba(26,36,56,.14)" }}>
            <div className="aspect-[4/3] overflow-hidden">
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img src={r.heroImage} alt={r.name} loading="lazy" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
            </div>
            <div className="p-3">
              <div className="text-[13px] font-bold leading-tight" style={{ color: C.ink }}>{r.name}</div>
              <div className="text-[11px] mt-0.5" style={{ color: C.inkSoft }}>{r.city}, {r.country}</div>
              <div className="flex items-center gap-1 mt-2">
                <span className="text-[12px] font-bold" style={{ color: C.ink }}>{r.rating}</span>
                <Star size={11} fill={C.gold} stroke="none" />
                <span className="text-[10.5px]" style={{ color: C.inkSoft }}>{r.ratingLabel}</span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}

// ─── Sidebar components ───────────────────────────────────────────────────
function ReviewSummaryCard({ resort }: { resort: ResortDetail }) {
  const rows = [
    ["Kids Facilities", resort.reviewSummary.kidsFacilities],
    ["Cleanliness",     resort.reviewSummary.cleanliness],
    ["Food",            resort.reviewSummary.food],
    ["Location",        resort.reviewSummary.location],
    ["Rooms",           resort.reviewSummary.rooms],
    ["Value for Money", resort.reviewSummary.valueForMoney],
  ] as const;

  return (
    <div className="rounded-2xl p-5" style={{ background: C.sandLight, border: `1px solid ${C.beigeWarm}` }}>
      <div className="text-[13px] font-bold mb-2" style={{ color: C.ink }}>Review Summary</div>
      <div className="flex items-baseline gap-2">
        <span className="font-display text-[32px] leading-none font-medium" style={{ color: C.ink }}>{resort.rating}</span>
        <div className="flex flex-col">
          <span className="text-[12px] font-bold" style={{ color: C.ink }}>{resort.ratingLabel}</span>
          <div className="flex gap-0.5">
            {[1, 2, 3, 4, 5].map((n) => (
              <Star key={n} size={11} fill={n <= Math.round(resort.rating / 2) ? C.gold : "none"} stroke={n <= Math.round(resort.rating / 2) ? "none" : C.beigeWarm} />
            ))}
          </div>
          <span className="text-[10.5px] mt-0.5" style={{ color: C.inkSoft }}>{resort.reviewCount} reviews</span>
        </div>
      </div>

      <div className="mt-4 space-y-2.5">
        {rows.map(([label, value]) => (
          <div key={label} className="flex items-center gap-2 text-[11.5px]">
            <span className="flex-1" style={{ color: C.inkSoft }}>{label}</span>
            <div className="flex-1 h-1.5 rounded-full overflow-hidden" style={{ background: C.beigeWarm }}>
              <div className="h-full rounded-full" style={{ width: `${value * 10}%`, background: C.gold }} />
            </div>
            <span className="w-7 text-right font-bold" style={{ color: C.ink }}>{value}</span>
          </div>
        ))}
      </div>

      <button className="mt-5 w-full py-3 rounded-lg flex items-center justify-center gap-2 text-[11.5px] font-semibold tracking-[0.12em] uppercase" style={{ background: C.ink, color: C.cream, minHeight: 44 }}>
        Check Prices <ArrowRight size={14} />
      </button>
      <p className="text-[10px] mt-2 text-center" style={{ color: C.inkSoft }}>
        We earn a commission if you book via our links. Thank you!
      </p>
    </div>
  );
}

function StayUpdated() {
  return (
    <div className="rounded-2xl p-5 mt-4" style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}>
      <div className="text-[13px] font-bold" style={{ color: C.ink }}>Stay Updated</div>
      <p className="text-[11.5px] mt-1 leading-snug" style={{ color: C.inkSoft }}>
        Get our honest resort reviews & family travel tips straight to your inbox.
      </p>
      <input type="email" placeholder="your email address" className="mt-3 w-full px-3 py-2.5 rounded-lg text-[12px] outline-none border bg-white" style={{ borderColor: C.beigeWarm, color: C.ink, minHeight: 40 }} />
      <button className="mt-2 w-full py-2.5 rounded-lg text-[11px] font-semibold tracking-[0.14em] uppercase" style={{ background: C.ink, color: C.cream, minHeight: 40 }}>Subscribe</button>
    </div>
  );
}

function OnThisPageTOC({ active, onChange }: { active: string; onChange: (t: string) => void }) {
  const items = ["Our Honest Review","Rooms & Suites","Pools","Kids Club & Waterpark","Food & Drinks","Beach","Activities","Pros & Cons","Tips for Families","Resort Map","Similar Resorts"];
  return (
    <div className="rounded-2xl p-5 mt-4" style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}>
      <div className="text-[13px] font-bold mb-3" style={{ color: C.ink }}>On This Page</div>
      <ul className="space-y-1.5">
        {items.map((i) => (
          <li key={i}>
            <button
              onClick={() => onChange(i)}
              className="flex items-center gap-2 text-[12px] hover:underline text-left"
              style={{ color: active === i ? C.goldDeep : C.inkSoft }}
            >
              <span className="w-1 h-1 rounded-full" style={{ background: C.gold }} />
              {i}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function PackingListCTA() {
  return (
    <div className="rounded-2xl overflow-hidden mt-4 relative" style={{ background: C.sand }}>
      <div className="relative h-24">
        {/* eslint-disable-next-line @next/next/no-img-element */}
        <img src="https://images.unsplash.com/photo-1530549387789-4c1017266635?auto=format&fit=crop&w=500&q=80" alt="" className="w-full h-full object-cover opacity-90" />
        <span className="absolute top-2 right-2 px-2 py-0.5 rounded text-[9px] tracking-[0.16em] uppercase font-bold" style={{ background: C.ink, color: C.cream }}>Free Download</span>
      </div>
      <div className="p-4">
        <div className="text-[14px] font-bold" style={{ color: C.ink }}>Family Resort Packing List</div>
        <div className="text-[11.5px] mt-1" style={{ color: C.inkSoft }}>Everything you need for a stress-free holiday.</div>
        <a href="#" className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold" style={{ color: C.goldDeep }}>
          Download Now <Download size={12} />
        </a>
      </div>
    </div>
  );
}

function ResortLocationCard({ resort }: { resort: ResortDetail }) {
  return (
    <div className="rounded-2xl overflow-hidden mt-4" style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}>
      <div className="p-4 pb-2">
        <div className="text-[13px] font-bold" style={{ color: C.ink }}>Resort Location</div>
      </div>
      <div className="relative aspect-[16/10] mx-4" style={{ background: "#dceaf0", borderRadius: 8 }}>
        {/* Stylized mini map */}
        <svg viewBox="0 0 200 120" className="w-full h-full">
          <rect width="200" height="120" fill="#dceaf0" />
          <path d="M0 60 Q 50 40 100 50 T 200 55" stroke="#a5c5d1" strokeWidth="2" fill="none" />
          <path d="M0 80 L40 70 L80 75 L120 65 L160 72 L200 68" stroke="#a5c5d1" strokeWidth="1.5" fill="#cfe1e8" opacity=".6" />
          <circle cx="100" cy="60" r="6" fill={C.gold} />
          <circle cx="100" cy="60" r="10" fill={C.gold} opacity=".3" />
          <path d="M100 50 L96 60 L100 64 L104 60 Z" fill={C.ink} />
        </svg>
      </div>
      <div className="p-4 pt-3">
        <div className="text-[12px]" style={{ color: C.inkSoft }}>{resort.city}, {resort.country}</div>
        <a href="#" className="mt-2 inline-flex items-center gap-1 text-[12px] font-semibold" style={{ color: C.goldDeep }}>
          View on Google Maps <ArrowRight size={12} />
        </a>
      </div>
    </div>
  );
}

function GoodToKnow({ data }: { data: ResortDetail["goodToKnow"] }) {
  const rows: [string, string][] = [
    ["Check-in",         data.checkIn],
    ["Check-out",        data.checkOut],
    ["All Inclusive",    data.allInclusive],
    ["Free Wi-Fi",       data.freeWifi],
    ["Air Conditioning", data.airConditioning],
    ["Best Travel Time", data.bestTravelTime],
  ];
  return (
    <div className="rounded-2xl p-5 mt-4" style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}>
      <div className="text-[13px] font-bold mb-3" style={{ color: C.ink }}>Good to Know</div>
      <dl className="space-y-2.5 text-[12px]">
        {rows.map(([k, v]) => (
          <div key={k} className="flex justify-between gap-3">
            <dt style={{ color: C.inkSoft }}>{k}</dt>
            <dd className="text-right font-semibold" style={{ color: C.ink }}>{v}</dd>
          </div>
        ))}
      </dl>
    </div>
  );
}

// ─── Main template ─────────────────────────────────────────────────────────
export default function ResortTemplate({ resort }: { resort: ResortDetail }) {
  const [activeTab, setActiveTab] = useState("Overview");
  const { isMobile } = useDevice();

  // Smooth-scroll to section when tab clicked
  useEffect(() => {
    if (!activeTab) return;
    const id = activeTab.toLowerCase().replace(/[& ]+/g, "-").replace(/^-|-$/g, "");
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
  }, [activeTab]);

  return (
    <main style={{ background: C.cream, minHeight: "100vh" }}>
      <Nav />

      <div className="pt-20 lg:pt-24">
        <Breadcrumb items={resort.breadcrumb} />
        <ResortHero resort={resort} />
        <StickyTabs active={activeTab} onChange={setActiveTab} />

        {/* Main two-column layout */}
        <div className="max-w-[1320px] mx-auto px-5 lg:px-10 mt-8 lg:mt-10">
          <div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-6 lg:gap-10">

            {/* Main content */}
            <div className="min-w-0">
              <HonestReview resort={resort} />
              <BestForFamilies best={resort.bestFor} />
              <PhotoSection id="rooms" title="Rooms & Suites" items={resort.rooms} cols={3} viewAll="View all rooms" ourPickKey />
              <PhotoSection id="pools" title="Pools"           items={resort.pools} cols={4} viewAll="View all pools" />
              <KidsClubSection resort={resort} />
              <PhotoSection id="food"  title="Food & Drinks"   items={resort.food}  cols={4} viewAll="View all restaurants" />
              <ProsCons loved={resort.loved} notPerfect={resort.notPerfect} />
              <SimilarResorts slugs={resort.similarResortSlugs} />
            </div>

            {/* Sidebar */}
            <aside>
              <div className={isMobile ? "" : "sticky top-[150px]"}>
                <ReviewSummaryCard resort={resort} />
                <StayUpdated />
                {!isMobile && <OnThisPageTOC active={activeTab} onChange={setActiveTab} />}
                <PackingListCTA />
                <ResortLocationCard resort={resort} />
                <GoodToKnow data={resort.goodToKnow} />
              </div>
            </aside>
          </div>
        </div>

        <div className="mt-10 lg:mt-16">
          <TrustRow />
          <Newsletter />
          <Footer />
        </div>
      </div>
    </main>
  );
}
