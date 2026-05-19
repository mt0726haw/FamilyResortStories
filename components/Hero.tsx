"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { COLORS as C } from "@/lib/data";
import { useDevice } from "@/hooks/useDevice";

const HERO_IMG =
  "https://images.unsplash.com/photo-1540541338287-41700207dee6?auto=format&fit=crop&w=2000&q=85";

const POPULAR = ["Greece", "Turkey", "Egypt", "Baby Friendly", "All Inclusive"];

export default function Hero() {
  const { isMobile } = useDevice();

  return (
    <section className="relative pt-20 sm:pt-24 lg:pt-28 overflow-hidden" style={{ background: C.cream }}>
      <div className="max-w-[1320px] mx-auto px-3 sm:px-5 lg:px-10">
        <div
          className="relative rounded-[20px] sm:rounded-[28px] overflow-hidden"
          style={{ minHeight: isMobile ? "auto" : 560 }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover"
            style={{
              backgroundImage: `url(${HERO_IMG})`,
              backgroundPosition: isMobile ? "center 60%" : "center 40%",
            }}
          />

          {/* Mobile gradient — softer top-to-bottom so image stays visible */}
          {isMobile ? (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(180deg, rgba(253,250,243,0.96) 0%, rgba(253,250,243,0.82) 30%, rgba(253,250,243,0.32) 62%, rgba(0,0,0,0) 100%)",
              }}
            />
          ) : (
            <div
              className="absolute inset-0"
              style={{
                background:
                  "linear-gradient(105deg, rgba(253,250,243,0.95) 0%, rgba(253,250,243,0.78) 25%, rgba(253,250,243,0.2) 52%, rgba(0,0,0,0) 70%)",
              }}
            />
          )}

          {/* Content */}
          <div
            className={
              isMobile
                ? "relative z-10 px-5 pt-10 pb-6"
                : "relative z-10 px-7 lg:px-16 py-14 lg:py-20 max-w-2xl"
            }
          >
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="flex items-center gap-2 mb-4 sm:mb-6"
            >
              <span className="h-px w-6 sm:w-8" style={{ background: C.gold }} />
              <span
                className="text-[9px] sm:text-[10.5px] tracking-[0.28em] sm:tracking-[0.32em] uppercase font-semibold"
                style={{ color: C.goldDeep }}
              >
                Curated · Honest · Family-tested
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="font-display font-light leading-[1.02]"
              style={{
                color: C.ink,
                fontSize: isMobile ? "34px" : undefined,
              }}
            >
              <span className="sm:text-[44px] md:text-[54px] lg:text-[70px] inline-block">
                Honest family resort
              </span>
              <br />
              <span className="sm:text-[44px] md:text-[54px] lg:text-[70px]">reviews for </span>
              <span
                className="font-script leading-none align-middle"
                style={{
                  color: C.gold,
                  fontSize: isMobile ? "44px" : undefined,
                }}
              >
                <span className="sm:text-[56px] md:text-[68px] lg:text-[86px]">unforgettable</span>
              </span>
              <br />
              <span className="sm:text-[44px] md:text-[54px] lg:text-[70px]">holidays.</span>
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.4 }}
              className="mt-4 sm:mt-6 text-[13px] sm:text-[15px] lg:text-[16.5px]"
              style={{ color: C.inkSoft }}
            >
              Real experiences. Family tested. Worldwide inspiration.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.5 }}
              className="mt-5 sm:mt-8 lg:mt-10 relative max-w-xl"
              style={{
                boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.18)",
                borderRadius: 9999,
                background: "#fff",
              }}
            >
              <Search
                size={isMobile ? 16 : 18}
                strokeWidth={1.5}
                className="absolute left-5 sm:left-6 top-1/2 -translate-y-1/2"
                style={{ color: C.inkSoft }}
              />
              <input
                type="text"
                placeholder={isMobile ? "Search resorts…" : "Search by country, resort or family need…"}
                className="w-full pl-12 sm:pl-14 pr-24 sm:pr-36 py-3 sm:py-4 lg:py-5 rounded-full text-[13px] sm:text-[14px] outline-none placeholder:opacity-60 bg-transparent"
                style={{ color: C.ink, minHeight: 44 }}
              />
              <button
                className="absolute right-1 sm:right-1.5 top-1/2 -translate-y-1/2 px-4 sm:px-5 lg:px-6 py-2 sm:py-2.5 rounded-full text-[10.5px] sm:text-[11.5px] tracking-[0.16em] sm:tracking-[0.18em] uppercase font-semibold hover:opacity-90 transition"
                style={{ background: C.ink, color: C.cream, minHeight: 36 }}
              >
                {isMobile ? "Go" : "Search"}
              </button>
            </motion.div>

            {/* Popular tags — hidden on smallest screens */}
            {!isMobile && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.6, delay: 0.7 }}
                className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2 text-[11.5px] tracking-[0.14em] uppercase"
                style={{ color: C.inkSoft }}
              >
                <span className="opacity-60">Popular:</span>
                {POPULAR.map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="opacity-75 hover:opacity-100 transition underline-offset-4 hover:underline"
                    style={{ textDecorationColor: C.gold }}
                  >
                    {t}
                  </a>
                ))}
              </motion.div>
            )}

            {/* Mobile gets a visible "image strip" below the text */}
            {isMobile && (
              <div className="mt-4 flex flex-wrap gap-x-3 gap-y-1.5 text-[10.5px] tracking-[0.12em] uppercase font-semibold">
                {POPULAR.slice(0, 3).map((t) => (
                  <a
                    key={t}
                    href="#"
                    className="px-3 py-1.5 rounded-full"
                    style={{ background: "rgba(255,255,255,0.85)", color: C.inkSoft, minHeight: 28, display: "inline-flex", alignItems: "center" }}
                  >
                    {t}
                  </a>
                ))}
              </div>
            )}
          </div>

          {/* Mobile: show extra height so the image is visible below the text */}
          {isMobile && <div className="relative h-[200px]" />}
        </div>
      </div>
    </section>
  );
}
