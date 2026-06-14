import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--color-background)",
        surface: "var(--color-surface)",
        border: "var(--color-border)",
        "text-primary": "var(--color-text-primary)",
        "text-secondary": "var(--color-text-secondary)",
        accent: "var(--color-accent)",
        "accent-tint": "var(--color-accent-tint)",
      },
      borderRadius: {
        none: "var(--radius-none)",
        sm: "var(--radius-sm)",
        md: "var(--radius-md)",
      },
      boxShadow: {
        hover: "var(--shadow-hover)",
        "nav-scrolled": "var(--shadow-nav-scrolled)",
      },
      fontFamily: {
        serif: ["var(--font-lora)", "serif"],
        sans: ["var(--font-inter)", "sans-serif"],
        mono: ["var(--font-jetbrains-mono)", "monospace"],
      },
      fontSize: {
        hero: [
          "clamp(2.5rem, 4vw + 1.5rem, 3.75rem)",
          { lineHeight: "1.1", letterSpacing: "-0.01em" },
        ],
        h2: [
          "clamp(1.75rem, 2.5vw + 1.2rem, 2.25rem)",
          { lineHeight: "1.2" },
        ],
        h3: [
          "clamp(1.25rem, 1vw + 1rem, 1.375rem)",
          { lineHeight: "1.3" },
        ],
        body: [
          "clamp(1rem, 0.5vw + 0.9rem, 1.0625rem)",
          { lineHeight: "1.65" },
        ],
        nav: [
          "clamp(0.9375rem, 0.9375rem, 0.9375rem)",
          { lineHeight: "1.5" },
        ],
        meta: [
          "clamp(0.8125rem, 0.8125rem, 0.8125rem)",
          { lineHeight: "1.5" },
        ],
        tag: [
          "clamp(0.75rem, 0.75rem, 0.75rem)",
          { lineHeight: "1.4", letterSpacing: "0.04em" },
        ],
      },
    },
  },
  plugins: [],
};
export default config;
