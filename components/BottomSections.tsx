"use client";

import { motion } from "framer-motion";
import { Heart, Award, Users, Briefcase, Mail } from "lucide-react";
import { TRUST_ITEMS, COLORS as C } from "@/lib/data";
import Link from "next/link";

// ─── Botanical decoration shared ────────────────────────────────────────────
function Botanical({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <g stroke={C.goldDeep} strokeWidth="1" opacity=".45">
        <path d="M10 110 C 40 100,70 70,110 40" strokeLinecap="round" />
        {Array.from({ length: 8 }, (_, i) => {
          const x = 10 + i * 14;
          const y = 110 - i * 8;
          return (
            <g key={i}>
              <ellipse cx={x + 6} cy={y - 6} rx="9" ry="3.5"
                fill="#c4a979" fillOpacity=".32"
                transform={`rotate(${-30 - i * 2} ${x + 6} ${y - 6})`} />
              <ellipse cx={x - 4} cy={y + 4} rx="7" ry="3"
                fill="#b39565" fillOpacity=".26"
                transform={`rotate(${30 - i * 2} ${x - 4} ${y + 4})`} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Heart, Award, Users, Briefcase,
};

// ─── Trust Row ───────────────────────────────────────────────────────────────
export function TrustRow() {
  return (
    <section className="py-12 lg:py-16 relative overflow-hidden" style={{ background: C.sand }}>
      <Botanical className="absolute top-0 right-0 w-36 lg:w-52 opacity-60 -translate-y-4 pointer-events-none" />
      <Botanical className="absolute bottom-0 left-0 w-36 lg:w-52 opacity-50 translate-y-4 -scale-x-100 pointer-events-none" />

      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 relative">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-10">
          {TRUST_ITEMS.map((item, i) => {
            const Icon = ICON_MAP[item.icon];
            return (
              <motion.div
                key={item.title}
                className="flex gap-3.5 items-start"
                initial={{ opacity: 0, y: 12 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <div
                  className="w-11 h-11 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}
                >
                  {Icon && <Icon size={20} strokeWidth={1.3} style={{ color: C.goldDeep }} />}
                </div>
                <div>
                  <div className="font-bold text-[13.5px]" style={{ color: C.ink }}>
                    {item.title}
                  </div>
                  <div className="text-[12.5px] leading-snug mt-0.5" style={{ color: C.inkSoft }}>
                    {item.text}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

// ─── Newsletter ───────────────────────────────────────────────────────────────
export function Newsletter() {
  return (
    <section
      className="py-9 lg:py-11"
      style={{ background: C.sandLight, borderTop: `1px solid ${C.beigeWarm}` }}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 flex flex-col md:flex-row md:items-center gap-5 md:gap-10">
        <div className="flex items-start gap-3.5 flex-1">
          <div
            className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 mt-0.5"
            style={{ background: C.paper, border: `1px solid ${C.beigeWarm}` }}
          >
            <Mail size={18} strokeWidth={1.3} style={{ color: C.goldDeep }} />
          </div>
          <div>
            <div className="font-bold text-[14px]" style={{ color: C.ink }}>
              Don&rsquo;t miss our family travel favourites!
            </div>
            <div className="text-[12.5px] mt-0.5" style={{ color: C.inkSoft }}>
              Subscribe for tips, new resort reviews &amp; travel inspiration.
            </div>
          </div>
        </div>

        <form
          onSubmit={(e) => e.preventDefault()}
          className="flex gap-2 w-full md:w-auto md:min-w-[440px]"
        >
          <input
            type="email"
            placeholder="Your email address"
            className="flex-1 px-4 py-3 rounded-lg text-[13px] outline-none bg-white border"
            style={{ borderColor: C.beigeWarm, color: C.ink }}
          />
          <button
            type="submit"
            className="px-6 py-3 rounded-lg text-[11.5px] tracking-[0.16em] uppercase font-semibold hover:opacity-90 transition whitespace-nowrap"
            style={{ background: C.ink, color: C.cream }}
          >
            Subscribe
          </button>
        </form>
      </div>
    </section>
  );
}

// ─── Footer ───────────────────────────────────────────────────────────────────
const FOOTER_COLS = [
  {
    heading: "Explore",
    links: [
      { label: "Destinations",   href: "/destinations"   },
      { label: "Resort Reviews", href: "/resort-reviews" },
      { label: "Family Needs",   href: "/family-needs"   },
      { label: "Roadtrips",      href: "/roadtrips"      },
    ],
  },
  {
    heading: "Discover",
    links: [
      { label: "Travel Tips",  href: "/travel-tips"  },
      { label: "Stories",      href: "/stories"      },
      { label: "Newsletter",   href: "#newsletter"   },
      { label: "Instagram",    href: "https://instagram.com" },
    ],
  },
  {
    heading: "About",
    links: [
      { label: "Our Story", href: "/about"    },
      { label: "Contact",   href: "/contact"  },
      { label: "Press",     href: "/press"    },
      { label: "Imprint",   href: "/imprint"  },
    ],
  },
];

export function Footer() {
  return (
    <footer className="py-12 lg:py-16" style={{ background: C.ink, color: "#d9d4c5" }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="grid grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand */}
          <div className="col-span-2">
            <div
              className="font-display text-[22px] tracking-[0.04em] font-medium"
              style={{ color: "#fff" }}
            >
              FAMILY RESORT STORIES
            </div>
            <div className="text-[9.5px] tracking-[0.42em] mt-1 opacity-55">
              CURATED FAMILY TRAVEL
            </div>
            <p className="mt-4 text-[13px] leading-relaxed opacity-65 max-w-sm">
              Honest reviews, real family experiences and worldwide inspiration — from the people who
              actually packed the bags.
            </p>
            <div className="mt-5 flex gap-3">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 rounded-full bg-white/10 hover:bg-white/20 transition"
                aria-label="Instagram"
              >
                <Heart size={16} strokeWidth={1.4} />
              </a>
            </div>
          </div>

          {/* Columns */}
          {FOOTER_COLS.map((col) => (
            <div key={col.heading}>
              <div
                className="text-[10.5px] tracking-[0.28em] uppercase font-semibold mb-4"
                style={{ color: "#fff", opacity: 0.85 }}
              >
                {col.heading}
              </div>
              <ul className="space-y-2.5">
                {col.links.map((l) => (
                  <li key={l.label}>
                    <Link
                      href={l.href}
                      className="text-[13px] opacity-65 hover:opacity-100 transition-opacity"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        {/* Divider */}
        <div
          className="my-8"
          style={{
            height: "1px",
            background: "linear-gradient(90deg, transparent, rgba(193,154,91,0.35), transparent)",
          }}
        />

        {/* Bottom bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 text-[11.5px] opacity-55">
          <div>© {new Date().getFullYear()} Family Resort Stories. All rights reserved.</div>
          <div className="flex gap-6">
            {["Privacy", "Terms", "Cookies"].map((l) => (
              <Link key={l} href={`/${l.toLowerCase()}`} className="hover:opacity-100 transition-opacity">
                {l}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
