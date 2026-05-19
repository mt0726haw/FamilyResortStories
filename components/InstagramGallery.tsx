"use client";

import { motion } from "framer-motion";
import { Instagram } from "lucide-react";
import { INSTAGRAM_IMAGES, COLORS as C } from "@/lib/data";

export default function InstagramGallery() {
  return (
    <section className="py-10 lg:py-14">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        {/* Header */}
        <div className="flex items-baseline justify-between mb-5">
          <div>
            <div className="text-[11px] tracking-[0.32em] uppercase font-semibold" style={{ color: C.inkSoft }}>
              Follow Our Journey
            </div>
            <div className="text-[13px] mt-1 font-medium" style={{ color: C.goldDeep }}>
              @familyresortstories
            </div>
          </div>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-2.5 lg:gap-3">
          {INSTAGRAM_IMAGES.map((src, i) => (
            <motion.a
              key={i}
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group relative aspect-square rounded-xl overflow-hidden"
              style={{ boxShadow: "0 1px 2px rgba(26,36,56,.05), 0 6px 20px -8px rgba(26,36,56,.12)" }}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.04 }}
            >
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={src}
                alt="Family travel moment"
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-[1.09]"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/15 transition-colors flex items-center justify-center">
                <Instagram
                  size={20}
                  className="text-white opacity-0 group-hover:opacity-100 transition-opacity"
                  strokeWidth={1.5}
                />
              </div>
            </motion.a>
          ))}

          {/* CTA tile */}
          <motion.div
            className="col-span-2 sm:col-span-4 lg:col-span-1 rounded-xl p-4 flex flex-col justify-between"
            style={{ background: C.sand }}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.35 }}
          >
            <div>
              <Instagram size={22} strokeWidth={1.4} style={{ color: C.goldDeep }} />
              <p className="mt-2 text-[12px] leading-snug" style={{ color: C.inkSoft }}>
                Follow us on Instagram for daily inspiration &amp; real family moments.
              </p>
            </div>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-3 block w-full py-2.5 rounded-lg text-center text-[11.5px] tracking-[0.16em] uppercase font-semibold hover:opacity-90 transition"
              style={{ background: C.ink, color: C.cream }}
            >
              Follow on Instagram
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
