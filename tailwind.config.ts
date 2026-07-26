import type { Config } from "tailwindcss";

const config: Config = {
  darkMode: "class",
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)", "sans-serif"],
        serif: ["var(--font-serif)", "serif"],
      },
      colors: {
        background: "#090A0F", // Deep Obsidian Black
        foreground: "#F3F4F6", // Crisp Off-White
        charcoal: {
          DEFAULT: "#12141F",
          light: "#1A1D2C",
          dark: "#06070A",
          border: "#2A2E43",
        },
        muted: "#9CA3AF", // Soft warm metallic gray
        accent: "#D4AF37", // Warm Luxury Champagne Gold
        gold: {
          300: "#FBE38E",
          400: "#E5C158",
          500: "#D4AF37",
          600: "#B89222",
        },
        surface: {
          DEFAULT: "#12141F",
          card: "#161926",
          hover: "#1F2335",
        },
      },
      animation: {
        "float": "float 6s ease-in-out infinite",
        "pulse-glow": "pulse-glow 3s ease-in-out infinite",
        "marquee": "marquee 35s linear infinite",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px)" },
          "50%": { transform: "translateY(-10px)" },
        },
        "pulse-glow": {
          "0%, 100%": { opacity: "0.4" },
          "50%": { opacity: "0.8" },
        },
        marquee: {
          "0%": { transform: "translateX(0%)" },
          "100%": { transform: "translateX(-50%)" },
        },
      },
    },
  },
  plugins: [],
};
export default config;

