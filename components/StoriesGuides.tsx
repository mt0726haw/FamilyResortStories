"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { STORIES, COLORS as C } from "@/lib/data";
import { useDevice } from "@/hooks/useDevice";
import SectionHeader from "./SectionHeader";

export default function StoriesGuides() {
  const { isMobile } = useDevice();

  return (
    <section className="py-10 lg:py-14" style={{ background: C.cream }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <SectionHeader
          eyebrow="Stories & Travel Guides"
          actionLabel="View all articles"
          actionHref="/stories"
        />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.08 }}
            >
              <Link
                href={story.href}
                className="group block rounded-2xl overflow-hidden transition-all duration-300 hover:-translate-y-1"
                style={{
                  background: C.sandLight,
                  boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 10px 30px -12px rgba(26,36,56,.14)",
                }}
              >
                {isMobile ? (
                  // ── MOBILE: stacked vertical (image on top, text below) ──
                  <div className="flex flex-col">
                    <div className="relative aspect-[16/10] overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.image}
                        alt={story.title}
                        loading="lazy"
                        className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.04]"
                      />
                      <span
                        className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9.5px] tracking-[0.18em] uppercase font-semibold"
                        style={{ background: "rgba(255,253,248,0.95)", color: C.goldDeep }}
                      >
                        {story.label}
                      </span>
                    </div>
                    <div className="p-4">
                      <h3
                        className="font-display font-medium leading-[1.15] text-[20px]"
                        style={{ color: C.ink }}
                      >
                        {story.title}
                      </h3>
                      <p className="mt-2 text-[12.5px] leading-snug" style={{ color: C.inkSoft }}>
                        {story.excerpt}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold tracking-[0.08em]"
                        style={{ color: C.ink }}
                      >
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                  </div>
                ) : (
                  // ── DESKTOP/TABLET: horizontal (text-left, image-right) ──
                  <div className="grid grid-cols-[42%_58%] min-h-[180px] lg:min-h-[200px]">
                    <div className="p-4 lg:p-5 flex flex-col">
                      <span
                        className="inline-block self-start px-2.5 py-1 rounded-md text-[9.5px] tracking-[0.18em] uppercase font-semibold mb-3"
                        style={{ background: C.sand, color: C.goldDeep }}
                      >
                        {story.label}
                      </span>
                      <h3
                        className="font-display font-medium leading-[1.15] text-[19px] lg:text-[22px]"
                        style={{ color: C.ink }}
                      >
                        {story.title}
                      </h3>
                      <p
                        className="mt-2 text-[12px] leading-snug flex-1"
                        style={{ color: C.inkSoft }}
                      >
                        {story.excerpt}
                      </p>
                      <span
                        className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold"
                        style={{ color: C.ink }}
                      >
                        Read more <ArrowRight size={12} />
                      </span>
                    </div>
                    <div className="relative overflow-hidden">
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={story.image}
                        alt={story.title}
                        loading="lazy"
                        className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                      />
                    </div>
                  </div>
                )}
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
