import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      width: {
        "555": "555px",
        "0.48": "48%",
      },
      top: {
        "-1/2": "-50%",
      },
      maxWidth: {
        "555": "555px",
      },
      border: {
        "border-primary": "1px solid #47AB4B",
      },
      borderWidth: {
        "1": "1px",
      },
      colors: {
        primary: "#47AB4B",
        background: "var(--background)",
        foreground: "var(--foreground)",
      },
    },
  },
  plugins: [],
};
export default config;
