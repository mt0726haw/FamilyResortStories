"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import {
  Baby, Heart, TreePalm, Users, Gem, Waves, Globe, Sun, Car,
} from "lucide-react";
import { CATEGORIES, COLORS as C } from "@/lib/data";

const ICON_MAP: Record<string, React.FC<{ size?: number; strokeWidth?: number; style?: React.CSSProperties }>> = {
  Baby, Heart, TreePalm, Users, Gem, Waves, Globe, Sun, Car,
};

export default function CategoryStrip() {
  return (
    <section className="py-10 lg:py-14" style={{ background: C.cream }}>
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <div className="overflow-x-auto noscroll -mx-5 px-5 lg:mx-0 lg:px-0">
          <div className="grid grid-flow-col auto-cols-[118px] lg:grid-flow-row lg:grid-cols-9 gap-3 lg:gap-3.5">
            {CATEGORIES.map((cat, i) => {
              const Icon = ICON_MAP[cat.icon];
              return (
                <motion.div
                  key={cat.name}
                  initial={{ opacity: 0, y: 12 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.05 }}
                >
                  <Link
                    href={cat.href}
                    className="group block rounded-2xl bg-white transition-all duration-300 hover:-translate-y-1"
                    style={{ boxShadow: "0 1px 2px rgba(26,36,56,.04), 0 8px 28px -12px rgba(26,36,56,.12)" }}
                  >
                    <div className="px-3 pt-4 pb-2.5 flex flex-col items-center text-center">
                      {Icon && <Icon size={26} strokeWidth={1.3} style={{ color: C.gold }} />}
                      <div className="mt-2 text-[12px] font-semibold leading-tight" style={{ color: C.ink }}>
                        {cat.name}
                      </div>
                    </div>
                    <div className="px-2 pb-2">
                      <div
                        className="h-[78px] rounded-xl bg-cover bg-center transition-transform duration-500 group-hover:scale-[1.04]"
                        style={{ backgroundImage: `url(${cat.image})` }}
                      />
                    </div>
                  </Link>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
