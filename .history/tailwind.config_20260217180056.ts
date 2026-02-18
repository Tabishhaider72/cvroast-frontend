import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        bgPrimary: "#FDF9ED",
        accentPrimary: "#FFEB3B",
        textPrimary: "#1B3022",
        cta: "#1B3022",
        secondaryBtn: "#FFFFFF",
        visualAccent: "#C2410C",
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "sans-serif"],
      },
    },
  },
  plugins: [],
};

export default config;
