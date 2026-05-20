import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ["var(--font-inter)"],
      },
      colors: {
        background: "#fafafa", // Off-white
        foreground: "#171717", // Charcoal
        charcoal: {
          DEFAULT: "#171717",
          light: "#262626",
          dark: "#0a0a0a",
        },
        muted: "#737373", // Muted gray
        accent: "#2563eb", // Deep blue
        surface: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
