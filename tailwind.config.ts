import type { Config } from "tailwindcss";

const config: Config = {
  content: ["./app/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        paper: "#F7F5F0",
        "paper-raised": "#FFFFFF",
        ink: "#1C2321",
        "ink-soft": "#4A4F49",
        ledger: "#2F5233",
        stamp: "#A23B2E",
        line: "#D8D3C7",
        gold: "#B8912B",
      },
      fontFamily: {
        display: ["var(--font-fraunces)", "Georgia", "serif"],
        body: ["var(--font-plex-sans)", "system-ui", "sans-serif"],
        mono: ["var(--font-plex-mono)", "monospace"],
      },
    },
  },
  plugins: [],
};
export default config;
