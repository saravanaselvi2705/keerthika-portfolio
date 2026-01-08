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
        sans: ["var(--font-jakarta)"],
        serif: ["var(--font-playfair)"],
      },
      colors: {
        background: "#0a0a0a",
        foreground: "#ededed",
        charcoal: {
          DEFAULT: "#121212",
          light: "#1e1e1e",
          dark: "#0a0a0a",
        },
        primary: "#ffffff",
      },
    },
  },
  plugins: [],
};
export default config;
