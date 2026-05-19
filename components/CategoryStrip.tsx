"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Baby, TreePalm, Users, Gem, Waves, Globe, Sun, Car } from "lucide-react";
import { CATEGORIES, COLORS as C } from "@/lib/data";

// Custom teddy bear icon — Lucide doesn't ship one
function TeddyBear({ size = 26, color = "currentColor" }: { size?: number; color?: string }) {
  return (
    <svg viewBox="0 0 24 24" width={size} height={size} fill="none"
         stroke={color} strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="6.5" cy="6.5" r="2.2" />
      <circle cx="17.5" cy="6.5" r="2.2" />
      <circle cx="6.5" cy="6.5" r="0.9" />
      <circle cx="17.5" cy="6.5" r="0.9" />
      <circle cx="12" cy="13" r="6.5" />
      <ellipse cx="12" cy="15" rx="2.6" ry="2" />
      <circle cx="9.5" cy="11.5" r="0.6" fill={color} />
      <circle cx="14.5" cy="11.5" r="0.6" fill={color} />
      <ellipse cx="12" cy="14" rx="0.8" ry="0.55" fill={color} />
    </svg>
  );
}

const ICONS: Record<string, React.FC<{ size?: number; color?: string }>> = {
  Baby:      ({ size, color }) => <Baby      size={size} strokeWidth={1.3} color={color} />,
  TeddyBear: ({ size, color }) => <TeddyBear size={size} color={color} />,
  TreePalm:  ({ size, color }) => <TreePalm  size={size} strokeWidth={1.3} color={color} />,
  Users:     ({ size, color }) => <Users     size={size} strokeWidth={1.3} color={color} />,
  Gem:       ({ size, color }) => <Gem       size={size} strokeWidth={1.3} color={color} />,
  Waves:     ({ size, color }) => <Waves     size={size} strokeWidth={1.3} color={color} />,
  Globe:     ({ size, color }) => <Globe     size={size} strokeWidth={1.3} color={color} />,
  Sun:       ({ size, color }) => <Sun       size={size} strokeWidth={1.3} color={color} />,
  Car:       ({ size, color }) => <Car       size={size} strokeWidth={1.3} color={color} />,
};

export default function CategoryStrip() {
  return (
    <section className="pt-6 pb-10 lg:pt-8 lg:pb-14" style={{ background: C.cream }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">

        {/* Row 1: Icon pill cards */}
        <div className="overflow-x-auto noscroll -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="grid grid-flow-col auto-cols-[108px] lg:grid-flow-row lg:grid-cols-9 gap-3 lg:gap-3.5">
            {CATEGORIES.map((cat, i) => {
              const Icon = ICONS[cat.icon];
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.4, delay: i * 0.04 }}
                >
                  <Link
                    href={cat.href}
                    className="block bg-white rounded-2xl py-3.5 px-2 text-center transition-transform duration-300 hover:-translate-y-0.5"
                    style={{ boxShadow: "0 1px 2px rgba(26,36,56,.04), 0 6px 22px -10px rgba(26,36,56,.12)" }}
                  >
                    <div className="flex justify-center mb-1.5">
                      {Icon && <Icon size={24} color={C.gold} />}
                    </div>
                    <div className="text-[11.5px] font-semibold leading-tight" style={{ color: C.ink }}>
                      {cat.name}
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* Row 2: Image thumbnails aligned to each icon */}
        <div className="mt-3 lg:mt-3.5 overflow-x-auto noscroll -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="grid grid-flow-col auto-cols-[108px] lg:grid-flow-row lg:grid-cols-9 gap-3 lg:gap-3.5">
            {CATEGORIES.map((cat, i) => (
              <motion.a
                key={cat.name + "-img"}
                href={cat.href}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.4, delay: 0.1 + i * 0.04 }}
                className="block h-[76px] lg:h-[84px] rounded-2xl bg-cover bg-center overflow-hidden transition-transform duration-500 hover:-translate-y-0.5"
                style={{
                  backgroundImage: `url(${cat.image})`,
                  boxShadow: "0 1px 2px rgba(26,36,56,.04), 0 6px 22px -10px rgba(26,36,56,.12)",
                }}
                aria-label={cat.name}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
