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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#2e3191",
        primaryDark: "#0e0f2b",
        accent: "#ddac00",
        backgroundOne: "#e4e5ff",
        backgroundTwo: "#c0c0dd",
      },
    },
  },
  plugins: [],
};
export default config;
