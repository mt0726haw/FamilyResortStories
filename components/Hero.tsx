"use client";

import { motion } from "framer-motion";
import { Search } from "lucide-react";
import { COLORS as C } from "@/lib/data";

const HERO_IMG =
  "https://images.unsplash.com/photo-1602002418082-a4443e081dd1?auto=format&fit=crop&w=2000&q=85";

const POPULAR = ["Greece", "Turkey", "Egypt", "Baby Friendly", "All Inclusive"];

export default function Hero() {
  return (
    <section className="relative pt-24 lg:pt-28 overflow-hidden" style={{ background: C.cream }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div
          className="relative rounded-[28px] overflow-hidden grain"
          style={{ minHeight: "560px" }}
        >
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${HERO_IMG})`, backgroundPosition: "center 40%" }}
          />

          {/* Gradient overlays */}
          <div
            className="absolute inset-0"
            style={{
              background:
                "linear-gradient(105deg, rgba(253,250,243,0.95) 0%, rgba(253,250,243,0.78) 25%, rgba(253,250,243,0.2) 52%, rgba(0,0,0,0) 70%)",
            }}
          />
          <div
            className="absolute inset-x-0 bottom-0 h-40"
            style={{ background: "linear-gradient(180deg, transparent, rgba(245,236,220,0.45))" }}
          />

          {/* Content */}
          <div className="relative z-10 px-7 lg:px-16 py-14 lg:py-20 max-w-2xl">
            {/* Eyebrow */}
            <motion.div
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.1 }}
              className="flex items-center gap-2 mb-6"
            >
              <span className="h-px w-8" style={{ background: C.gold }} />
              <span
                className="text-[10.5px] tracking-[0.32em] uppercase font-semibold"
                style={{ color: C.goldDeep }}
              >
                Curated · Honest · Family-tested
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.85, delay: 0.2 }}
              className="font-display font-light leading-[1.02] text-[44px] sm:text-[58px] lg:text-[70px]"
              style={{ color: C.ink }}
            >
              Honest family resort
              <br />
              reviews for{" "}
              <span
                className="font-script leading-none"
                style={{ color: C.gold, fontSize: "1.22em", verticalAlign: "middle" }}
              >
                unforgettable
              </span>
              <br />
              holidays.
            </motion.h1>

            {/* Subtext */}
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.4 }}
              className="mt-6 text-[15px] lg:text-[16.5px]"
              style={{ color: C.inkSoft }}
            >
              Real experiences. Family tested. Worldwide inspiration.
            </motion.p>

            {/* Search bar */}
            <motion.div
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7, delay: 0.5 }}
              className="mt-8 lg:mt-10 relative max-w-xl"
              style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.18)", borderRadius: "9999px", background: "#fff" }}
            >
              <Search
                size={18}
                strokeWidth={1.5}
                className="absolute left-6 top-1/2 -translate-y-1/2"
                style={{ color: C.inkSoft }}
              />
              <input
                type="text"
                placeholder="Search by country, resort or family need…"
                className="w-full pl-14 pr-36 py-4 lg:py-5 rounded-full text-[14px] outline-none placeholder:opacity-60 bg-transparent"
                style={{ color: C.ink }}
              />
              <button
                className="absolute right-1.5 top-1/2 -translate-y-1/2 px-5 lg:px-6 py-2.5 rounded-full text-[11.5px] tracking-[0.18em] uppercase font-semibold hover:opacity-90 transition"
                style={{ background: C.ink, color: C.cream }}
              >
                Search
              </button>
            </motion.div>

            {/* Popular tags */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.7, delay: 0.7 }}
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
          </div>
        </div>
      </div>
    </section>
  );
}
