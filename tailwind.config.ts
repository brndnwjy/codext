import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        lightBlue: "#D4D1E2",
        primaryBlue: "#2657A4",
        heading: "#060E1A",
        text: "#51565E",
        arrowRed: "#B25D0F",
        arrowGreen: "#4D9D0E",
        arrowBlue: "#0E479D",
        gradientBlueLeft: "#4586E9",
        gradientBlueRight: "#3036C6",
      },
    },
  },
  plugins: [],
};
export default config;
