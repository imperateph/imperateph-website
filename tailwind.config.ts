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
      },
      backgroundImage: {
        'vertical-custom-gradient': 'linear-gradient(180deg, rgba(255,255,255,0) 38%, rgba(46,49,145,1) 85%)',
      }
    },
  },
  plugins: [],
};
export default config;
