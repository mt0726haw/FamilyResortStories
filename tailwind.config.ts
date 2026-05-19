import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        sand:       "#f5ecdc",
        sandLight:  "#faf5ea",
        cream:      "#fdfaf3",
        paper:      "#fffdf8",
        ink:        "#1a2438",
        inkSoft:    "#2d3a52",
        ocean:      "#2c4a6e",
        oceanDeep:  "#1b3354",
        gold:       "#c19a5b",
        goldDeep:   "#a8814a",
        beigeWarm:  "#e8dcc4",
        beigeMap:   "#e6d8be",
      },
      fontFamily: {
        display: ["var(--font-cormorant)", "serif"],
        body:    ["var(--font-manrope)",   "sans-serif"],
        script:  ["var(--font-allura)",    "cursive"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      transitionDuration: {
        "400": "400ms",
        "700": "700ms",
      },
      keyframes: {
        fadeUp: {
          from: { opacity: "0", transform: "translateY(20px)" },
          to:   { opacity: "1", transform: "translateY(0)" },
        },
        float: {
          "0%,100%": { transform: "translateY(0)" },
          "50%":     { transform: "translateY(-6px)" },
        },
        pulse2: {
          "0%,100%": { transform: "scale(1)",    opacity: ".9" },
          "50%":     { transform: "scale(1.08)", opacity: "1"  },
        },
      },
      animation: {
        "fade-up": "fadeUp .9s cubic-bezier(.2,.8,.2,1) both",
        float:     "float 5s ease-in-out infinite",
        pulse2:    "pulse2 2.6s ease-in-out infinite",
      },
      boxShadow: {
        soft: "0 1px 2px rgba(26,36,56,.04), 0 8px 28px -12px rgba(26,36,56,.12)",
        card: "0 1px 2px rgba(26,36,56,.05), 0 12px 38px -16px rgba(26,36,56,.18)",
        hover:"0 2px 4px rgba(26,36,56,.06), 0 24px 60px -20px rgba(26,36,56,.28)",
      },
    },
  },
  plugins: [],
};
export default config;
