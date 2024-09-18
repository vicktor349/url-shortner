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
        background: "var(--background)",
        foreground: "var(--foreground)",
        primary: "#9c9ba1",
      },
      backgroundColor: {
        primary: "#2dd0cc"
      },
      fontFamily: {
        Poppins: "Poppins"
      }
    },
  },
  plugins: [],
};
export default config;
