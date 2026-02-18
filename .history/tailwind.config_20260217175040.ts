import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}", "./components/**/*.{ts,tsx}"],
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
        sans: ["var(--font-poppins)"],
      },
    },
  },
  plugins: [],
};

export default config;
