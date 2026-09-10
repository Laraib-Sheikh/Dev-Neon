import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        paper: "#FAFAF7",
        panel: "#F1F0E9",
        ink: "#12211C",
        soft: "#4B5B54",
        line: "#E1E4DE",
        green: {
          DEFAULT: "#0E6B55",
          deep: "#0A4A3B",
          soft: "#E6EFEC",
        },
        rust: {
          DEFAULT: "#D9622B",
          soft: "#FBE9DF",
        },
      },
      fontFamily: {
        display: ["var(--font-display)"],
        body: ["var(--font-body)"],
        mono: ["var(--font-mono)"],
      },
      maxWidth: {
        wrap: "1180px",
      },
      boxShadow: {
        lift: "0 1px 2px rgba(18, 33, 28, 0.04), 0 12px 32px rgba(18, 33, 28, 0.08)",
      },
      keyframes: {
        "fade-up": {
          from: { opacity: "0", transform: "translateY(12px)" },
          to: { opacity: "1", transform: "translateY(0)" },
        },
      },
      animation: {
        "fade-up": "fade-up 0.5s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
export default config;
