"use client";

import { useRef } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Star, Heart, ChevronRight } from "lucide-react";
import { RESORTS, COLORS as C } from "@/lib/data";
import SectionHeader from "./SectionHeader";

function ResortCard({ resort, index }: { resort: (typeof RESORTS)[0]; index: number }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.5, delay: index * 0.08 }}
    >
      <Link
        href={`/resort-reviews/${resort.slug}`}
        className="group block rounded-2xl overflow-hidden bg-white transition-all duration-300 hover:-translate-y-1"
        style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.15)" }}
      >
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <img
            src={resort.image}
            alt={resort.name}
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.06]"
          />
          {resort.topPick && (
            <span
              className="absolute top-3 left-3 px-2.5 py-1 rounded-md text-[9.5px] tracking-[0.18em] uppercase font-bold"
              style={{ background: C.ink, color: C.cream }}
            >
              Top Pick
            </span>
          )}
          <button
            aria-label="Save"
            className="absolute top-3 right-3 w-9 h-9 rounded-full bg-white/85 backdrop-blur flex items-center justify-center hover:bg-white transition"
          >
            <Heart size={15} strokeWidth={1.5} style={{ color: C.ink }} />
          </button>
        </div>

        {/* Info */}
        <div className="p-4 lg:p-5">
          <h3
            className="font-display text-[20px] lg:text-[22px] leading-tight font-medium"
            style={{ color: C.ink }}
          >
            {resort.name}
          </h3>
          <div className="text-[12.5px] mt-0.5" style={{ color: C.inkSoft }}>
            {resort.location}
          </div>
          <div className="mt-3 flex items-center gap-3 flex-wrap">
            <div className="flex items-center gap-1">
              <span className="font-bold text-[14.5px]" style={{ color: C.ink }}>
                {resort.rating}
              </span>
              <Star size={13} fill={C.gold} stroke="none" />
            </div>
            {resort.tags.map((tag) => (
              <span
                key={tag}
                className="flex items-center gap-1 text-[11.5px]"
                style={{ color: C.inkSoft }}
              >
                <span className="w-1 h-1 rounded-full" style={{ background: C.gold }} />
                {tag}
              </span>
            ))}
          </div>
        </div>
      </Link>
    </motion.div>
  );
}

export default function FeaturedResorts() {
  const trackRef = useRef<HTMLDivElement>(null);

  const scrollTrack = (dir: number) => {
    if (!trackRef.current) return;
    trackRef.current.scrollBy({
      left: dir * (trackRef.current.clientWidth * 0.75),
      behavior: "smooth",
    });
  };

  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <SectionHeader eyebrow="Featured Family Resorts" actionLabel="View all resorts" actionHref="/resort-reviews" />

        <div className="relative">
          {/* Carousel (mobile) / Grid (desktop) */}
          <div
            ref={trackRef}
            className="overflow-x-auto noscroll -mx-5 px-5 lg:mx-0 lg:px-0"
          >
            <div className="grid grid-flow-col auto-cols-[80%] sm:auto-cols-[46%] lg:grid-flow-row lg:grid-cols-4 gap-4 lg:gap-5">
              {RESORTS.map((resort, i) => (
                <ResortCard key={resort.slug} resort={resort} index={i} />
              ))}
            </div>
          </div>

          {/* Desktop next button */}
          <button
            onClick={() => scrollTrack(1)}
            aria-label="Next"
            className="hidden lg:flex absolute -right-4 top-1/2 -translate-y-1/2 w-11 h-11 rounded-full bg-white items-center justify-center hover:scale-105 transition"
            style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.18)" }}
          >
            <ChevronRight size={18} />
          </button>
        </div>
      </div>
    </section>
  );
}
