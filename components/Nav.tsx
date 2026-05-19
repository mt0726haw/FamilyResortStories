"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { Instagram, Search, Menu, X } from "lucide-react";
import { NAV_LINKS, COLORS as C } from "@/lib/data";

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open,     setOpen]     = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 inset-x-0 z-50 transition-all duration-500"
      style={{
        background:   scrolled ? "rgba(253,250,243,0.90)" : "rgba(253,250,243,0.55)",
        borderBottom: scrolled ? `1px solid ${C.beigeWarm}` : "1px solid transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        paddingTop:    scrolled ? "12px" : "20px",
        paddingBottom: scrolled ? "12px" : "20px",
      }}
    >
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10 flex items-center justify-between gap-6">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2.5 shrink-0">
          <svg viewBox="0 0 24 32" className="w-6 h-8" fill="none">
            <path d="M12 30 V14" stroke={C.ink} strokeWidth="1.2" strokeLinecap="round" />
            <path d="M12 14 C 6 10, 2 12, 1 8 C 5 8, 9 9, 12 13"
              fill={C.gold} fillOpacity=".2" stroke={C.ink} strokeWidth="1" />
            <path d="M12 14 C 18 10, 22 12, 23 8 C 19 8, 15 9, 12 13"
              fill={C.gold} fillOpacity=".2" stroke={C.ink} strokeWidth="1" />
            <path d="M12 13 C 10 8, 8 6, 6 3 C 10 4, 12 7, 12 10"
              fill={C.gold} fillOpacity=".2" stroke={C.ink} strokeWidth="1" />
            <path d="M12 13 C 14 8, 16 6, 18 3 C 14 4, 12 7, 12 10"
              fill={C.gold} fillOpacity=".2" stroke={C.ink} strokeWidth="1" />
          </svg>
          <div className="leading-[1.05]">
            <div className="font-display text-[19px] tracking-[0.04em] font-medium" style={{ color: C.ink }}>
              FAMILY RESORT
            </div>
            <div className="font-body text-[9.5px] tracking-[0.42em] font-medium mt-0.5" style={{ color: C.inkSoft }}>
              STORIES
            </div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {NAV_LINKS.map((l) => (
            <Link
              key={l.label}
              href={l.href}
              className="relative group text-[11.5px] tracking-[0.18em] uppercase font-semibold hover:opacity-60 transition"
              style={{ color: C.inkSoft }}
            >
              {l.label}
              <span
                className="absolute -bottom-1.5 left-1/2 -translate-x-1/2 w-0 group-hover:w-4 h-px transition-all duration-300"
                style={{ background: C.gold }}
              />
            </Link>
          ))}
        </nav>

        {/* Right icons */}
        <div className="flex items-center gap-2">
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
            aria-label="Instagram"
            className="p-2 rounded-full hover:bg-white/60 transition">
            <Instagram size={18} strokeWidth={1.4} style={{ color: C.ink }} />
          </a>
          <button aria-label="Search" className="p-2 rounded-full hover:bg-white/60 transition">
            <Search size={18} strokeWidth={1.4} style={{ color: C.ink }} />
          </button>
          <button aria-label="Menu" className="lg:hidden p-2 rounded-full hover:bg-white/60 transition"
            onClick={() => setOpen(!open)}>
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* Mobile drawer */}
      {open && (
        <div
          className="lg:hidden border-t mt-3"
          style={{ background: C.cream, borderColor: C.beigeWarm }}
        >
          <nav className="px-6 py-4 flex flex-col gap-1">
            {NAV_LINKS.map((l) => (
              <Link
                key={l.label}
                href={l.href}
                onClick={() => setOpen(false)}
                className="text-[13px] tracking-[0.16em] uppercase py-2.5 border-b last:border-0"
                style={{ color: C.inkSoft, borderColor: C.beigeWarm }}
              >
                {l.label}
              </Link>
            ))}
          </nav>
        </div>
      )}
    </header>
  );
}
