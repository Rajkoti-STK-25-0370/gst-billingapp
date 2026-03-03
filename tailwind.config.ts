import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        stackly: {
          50:  "#eef6ff",
          100: "#d9ebff",
          200: "#b7d6ff",
          300: "#8ab7ff",
          400: "#5e95ff",
          500: "#3576ff",   // primary
          600: "#1f5ae6",
          700: "#1847b4",
          800: "#123585",
          900: "#0c255c",   // dark bar
        },
        slateInk: "#1f2937",
      },
      boxShadow: {
        "inner-deep":
          "inset 0 12px 24px rgba(0,0,0,0.25), 0 8px 24px rgba(0,0,0,0.22)",
      },
      backgroundImage: {
        "stackly-gloss":
          "linear-gradient(180deg, #3C7BFF 0%, #2157E6 60%, #143A96 100%)",
      },
    },
  },
  plugins: [],
};
export default config;