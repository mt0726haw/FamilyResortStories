"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";
import { STORIES, COLORS as C } from "@/lib/data";
import SectionHeader from "./SectionHeader";

export default function StoriesGuides() {
  return (
    <section className="py-10 lg:py-16" style={{ background: C.sandLight }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <SectionHeader eyebrow="Stories & Travel Guides" actionLabel="View all articles" actionHref="/stories" />

        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5">
          {STORIES.map((story, i) => (
            <motion.div
              key={story.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                href={story.href}
                className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
                style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.12)" }}
              >
                {/* Image */}
                <div className="relative aspect-[16/11] overflow-hidden">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={story.image}
                    alt={story.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.05]"
                  />
                  <div
                    className="absolute inset-x-0 bottom-0 h-1/2 pointer-events-none"
                    style={{ background: "linear-gradient(180deg, transparent, rgba(0,0,0,0.3))" }}
                  />
                  <span
                    className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[10px] tracking-[0.18em] uppercase font-semibold"
                    style={{ background: "rgba(255,255,255,0.95)", color: C.goldDeep }}
                  >
                    {story.label}
                  </span>
                </div>

                {/* Content */}
                <div className="p-5 lg:p-6">
                  <h3
                    className="font-display text-[22px] lg:text-[25px] leading-snug font-medium"
                    style={{ color: C.ink }}
                  >
                    {story.title}
                  </h3>
                  <p className="mt-1.5 text-[13px] leading-relaxed" style={{ color: C.inkSoft }}>
                    {story.excerpt}
                  </p>
                  <div
                    className="mt-3.5 inline-flex items-center gap-1.5 text-[12px] font-semibold tracking-[0.12em] uppercase"
                    style={{ color: C.goldDeep }}
                  >
                    Read more <ArrowRight size={13} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
