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
        // Spectrum of Trust Color Palette
        primary: {
          DEFAULT: "#005f73", // Deep Teal - Nav, Headers, Footer
        },
        secondary: {
          DEFAULT: "#0a9396", // Bio-Luminescent Green - CTAs, Active States
        },
        alert: {
          DEFAULT: "#ee9b00", // Alert Orange
        },
        background: {
          DEFAULT: "#f8f9fa", // Cloud Dancer - Global background
        },
        text: {
          DEFAULT: "#212529", // Slate Gray - Body text
        },
      },
      fontFamily: {
        serif: ["var(--font-serif)", "serif"],
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
export default config;
