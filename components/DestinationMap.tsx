"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { REGIONS, MAP_FILTERS, COLORS as C } from "@/lib/data";

// ─────────────────────────────────────────
// Stylized illustrated SVG world map
// ─────────────────────────────────────────
function WorldMapSVG() {
  const fill   = C.beigeMap;
  const stroke = "#d2c19a";

  return (
    <svg
      viewBox="0 0 1000 500"
      className="w-full h-full"
      preserveAspectRatio="xMidYMid meet"
    >
      <defs>
        <linearGradient id="oceanGrad" x1="0" x2="0" y1="0" y2="1">
          <stop offset="0%"   stopColor="#eef3f3" />
          <stop offset="100%" stopColor="#e3ecec" />
        </linearGradient>
        <pattern id="dots" patternUnits="userSpaceOnUse" width="14" height="14">
          <circle cx="2" cy="2" r="0.6" fill="#c8b58a" opacity=".22" />
        </pattern>
      </defs>

      {/* Ocean background */}
      <rect width="1000" height="500" fill="url(#oceanGrad)" />
      <rect width="1000" height="500" fill="url(#dots)" />

      {/* North America */}
      <path d="M120 110 C 90 130,80 180,110 220 C 140 250,175 245,200 230 C 225 220,240 195,250 170 C 260 145,245 115,215 105 C 185 95,145 95,120 110 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M270 80 C 285 75,305 80,305 100 C 300 115,280 115,270 105 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M210 245 C 220 255,235 265,250 270 C 245 285,235 295,225 290 C 215 280,208 260,210 245 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* South America */}
      <path d="M275 280 C 250 295,250 340,270 380 C 285 415,305 435,320 430 C 340 420,350 380,345 340 C 340 305,320 280,295 275 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Europe */}
      <path d="M470 130 C 455 145,460 170,480 180 C 500 188,525 185,540 175 C 555 165,555 145,540 135 C 520 122,490 122,470 130 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M462 128 q 6 -8 10 -4 q 2 8 -4 14 q -10 0 -6 -10 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Africa */}
      <path d="M495 215 C 470 240,470 295,490 340 C 505 370,535 385,560 380 C 590 370,610 340,615 305 C 620 270,605 235,575 220 C 545 208,515 205,495 215 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M628 330 q 6 -4 10 6 q -2 18 -10 22 q -8 -16 0 -28 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Middle East */}
      <path d="M580 195 C 570 210,575 235,595 240 C 615 240,625 220,620 205 C 615 192,595 188,580 195 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Asia */}
      <path d="M600 130 C 575 140,565 175,595 200 C 640 220,720 215,770 195 C 820 175,840 145,820 120 C 790 95,720 95,660 110 C 630 115,615 122,600 130 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M740 225 C 730 240,745 260,770 255 C 790 248,795 230,785 218 C 770 210,750 215,740 225 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M775 270 q 20 -5 40 4 q -10 10 -42 6 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M820 280 q 18 -3 30 6 q -10 8 -32 2 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M845 165 q 4 -10 12 -8 q 2 12 -4 22 q -10 -2 -8 -14 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Australia */}
      <path d="M820 320 C 800 330,800 360,830 375 C 870 385,900 380,905 360 C 905 340,880 320,855 318 C 840 317,828 318,820 320 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />
      <path d="M925 380 q 6 -6 12 0 q 2 14 -6 16 q -10 -4 -6 -16 Z"
        fill={fill} stroke={stroke} strokeWidth="1.2" />

      {/* Compass rose */}
      <g transform="translate(80 320)" opacity=".55">
        <circle cx="20" cy="20" r="16" fill="none" stroke={C.goldDeep} strokeWidth=".7" />
        <path d="M20 6 L22.5 20 L20 22 L17.5 20 Z" fill={C.goldDeep} opacity=".75" />
        <path d="M20 34 L22.5 20 L20 18 L17.5 20 Z" fill={C.gold} opacity=".45" />
        <text x="20" y="4.5" textAnchor="middle" fontSize="5" fill={C.goldDeep}
          fontFamily="Cormorant Garamond, serif">N</text>
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────
// Botanical decoration
// ─────────────────────────────────────────
function Botanical({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 200 120" className={className} fill="none" aria-hidden>
      <g stroke={C.goldDeep} strokeWidth="1" opacity=".5">
        <path d="M10 110 C 40 100,70 70,110 40" strokeLinecap="round" />
        {Array.from({ length: 8 }, (_, i) => {
          const x = 10 + i * 14;
          const y = 110 - i * 8;
          return (
            <g key={i}>
              <ellipse cx={x + 6} cy={y - 6} rx="9" ry="3.5"
                fill="#c4a979" fillOpacity=".35"
                transform={`rotate(${-30 - i * 2} ${x + 6} ${y - 6})`} />
              <ellipse cx={x - 4} cy={y + 4} rx="7" ry="3"
                fill="#b39565" fillOpacity=".28"
                transform={`rotate(${30 - i * 2} ${x - 4} ${y + 4})`} />
            </g>
          );
        })}
      </g>
    </svg>
  );
}

// ─────────────────────────────────────────
// Single map marker
// ─────────────────────────────────────────
function Marker({
  region,
  active,
  onClick,
}: {
  region: (typeof REGIONS)[0];
  active: boolean;
  onClick: () => void;
}) {
  return (
    <button
      onClick={onClick}
      className="absolute -translate-x-1/2 -translate-y-full group focus:outline-none"
      style={{ left: `${region.x}%`, top: `${region.y}%` }}
      aria-label={region.name}
    >
      <div className="flex flex-col items-center">
        <div
          className="flex items-center gap-2 bg-white rounded-full pr-3 pl-1 py-1 transition-transform duration-300 group-hover:scale-105"
          style={{
            boxShadow: "0 4px 20px -4px rgba(26,36,56,.22)",
            outline: active ? `2px solid ${C.gold}` : "none",
            outlineOffset: "1px",
            transform: active ? "scale(1.08)" : undefined,
          }}
        >
          {/* Avatar */}
          <span
            className="w-9 h-9 rounded-full block ring-2"
            style={{
              backgroundImage: `url(${region.image})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              boxShadow: `0 0 0 2px ${active ? C.gold : "white"}`,
            }}
          />
          <div className="text-left">
            <div className="text-[11.5px] font-bold leading-tight" style={{ color: C.ink }}>
              {region.name}
            </div>
            <div className="text-[10px] leading-tight" style={{ color: C.inkSoft }}>
              {region.resorts} Resorts
            </div>
          </div>
        </div>
        {/* Tail */}
        <svg width="14" height="8" viewBox="0 0 14 8" className="-mt-0.5">
          <path d="M7 8 L0 0 L14 0 Z" fill="white" />
        </svg>
        {/* Ground pin */}
        <span
          className={`w-2 h-2 rounded-full ${active ? "animate-pulse2" : ""}`}
          style={{ background: C.gold }}
        />
      </div>
    </button>
  );
}

// ─────────────────────────────────────────
// Destination Map section
// ─────────────────────────────────────────
export default function DestinationMap() {
  const [filter, setFilter] = useState("All");
  const [active, setActive] = useState("eu");
  const [zoom,   setZoom]   = useState(1);

  return (
    <section className="py-10 lg:py-16">
      <div className="max-w-[1320px] mx-auto px-5 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative rounded-[28px] overflow-hidden"
          style={{ background: "linear-gradient(180deg, #eef3f3 0%, #e4ebe7 100%)" }}
        >
          {/* Section label */}
          <div className="absolute top-5 left-5 lg:top-7 lg:left-8 z-20">
            <div className="text-[11px] tracking-[0.32em] uppercase font-semibold"
              style={{ color: C.inkSoft }}>
              Explore by Destination
            </div>
          </div>

          {/* Desktop filters */}
          <div className="absolute top-5 right-5 lg:top-7 lg:right-8 z-20 hidden md:flex flex-wrap justify-end gap-1.5 max-w-[58%]">
            {MAP_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 rounded-full text-[11px] tracking-[0.07em] font-semibold border transition-all"
                style={{
                  background:   filter === f ? C.ink : "rgba(255,255,255,0.7)",
                  color:        filter === f ? C.cream : C.inkSoft,
                  borderColor:  filter === f ? C.ink : "rgba(26,36,56,0.08)",
                }}
              >
                {f}
              </button>
            ))}
          </div>

          {/* Hand-written invitation */}
          <div className="absolute left-5 lg:left-10 top-20 lg:top-24 z-20 hidden sm:block pointer-events-none">
            <div
              className="font-script text-[26px] lg:text-[30px] leading-[1.1]"
              style={{ color: C.inkSoft }}
            >
              Click on a region<br />
              to discover the<br />
              best family resorts
            </div>
            <svg width="60" height="40" viewBox="0 0 60 40" fill="none"
              stroke={C.goldDeep} strokeWidth="1.2" className="ml-12 -mt-1">
              <path d="M2 2 C 20 6,40 18,56 34" strokeLinecap="round" />
              <path d="M56 34 L48 30 M56 34 L52 24"       strokeLinecap="round" />
            </svg>
          </div>

          {/* Botanicals */}
          <Botanical className="absolute bottom-4 left-4 w-28 lg:w-40 opacity-80 pointer-events-none" />
          <Botanical className="absolute top-4 right-4 w-24 lg:w-32 opacity-55 pointer-events-none -scale-x-100" />

          {/* Zoom controls */}
          <div className="absolute bottom-5 right-5 z-20 flex flex-col bg-white rounded-full overflow-hidden"
            style={{ boxShadow: "0 1px 2px rgba(26,36,56,.04), 0 8px 28px -12px rgba(26,36,56,.12)" }}>
            <button
              className="p-2.5 hover:bg-[#f5ecdc] transition"
              onClick={() => setZoom((z) => Math.min(z + 0.2, 2))}
              aria-label="Zoom in"
            >
              <Plus size={16} strokeWidth={1.5} />
            </button>
            <div className="h-px" style={{ background: C.beigeWarm }} />
            <button
              className="p-2.5 hover:bg-[#f5ecdc] transition"
              onClick={() => setZoom((z) => Math.max(z - 0.2, 0.8))}
              aria-label="Zoom out"
            >
              <Minus size={16} strokeWidth={1.5} />
            </button>
          </div>

          {/* Map area */}
          <div className="relative aspect-[16/9] sm:aspect-[2/1] lg:aspect-[2.1/1]">
            <div
              className="absolute inset-0 transition-transform duration-700"
              style={{ transform: `scale(${zoom})`, transformOrigin: "52% 38%" }}
            >
              <WorldMapSVG />
              {REGIONS.map((r) => (
                <Marker
                  key={r.id}
                  region={r}
                  active={active === r.id}
                  onClick={() => setActive(r.id)}
                />
              ))}
            </div>
          </div>

          {/* Mobile filters */}
          <div className="md:hidden flex gap-1.5 overflow-x-auto noscroll px-5 pb-5 -mt-2">
            {MAP_FILTERS.map((f) => (
              <button
                key={f}
                onClick={() => setFilter(f)}
                className="px-3 py-1.5 rounded-full text-[11px] font-semibold whitespace-nowrap border"
                style={{
                  background:  filter === f ? C.ink : "rgba(255,255,255,0.85)",
                  color:       filter === f ? C.cream : C.inkSoft,
                  borderColor: filter === f ? C.ink : "rgba(26,36,56,0.08)",
                }}
              >
                {f}
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
