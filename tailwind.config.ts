import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        accent: {
          blue: "#3b82f6",
          violet: "#8b5cf6",
          emerald: "#10b981",
        },
        dark: {
          bg: "#0a0a0a",
          surface: "#111111",
          border: "#1f1f1f",
        },
      },
      fontFamily: {
        sans: ["var(--font-inter)", "system-ui", "sans-serif"],
        display: ["var(--font-space)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;


