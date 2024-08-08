import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
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
        "custom-linear-gradient": "linear-gradient(#ABC7D9, #003049)",
      },
      colors: {
        bgColor: "#E9E7DD",
        altBgColor: "#B2B899",
        textColor: "#585858",
        navbarColor: "#636B3F",
        footerColor: "#747C5D",
        textGreen: "#70823E",
        sideNavbarColor: "#8B8B8B",
        nonWhiteBg: "#F2F3F4",
      },
      keyframes: {
        slideIn: {
          "0%": { transform: "translateX(-100%)", opacity: "0" },
          "100%": { transform: "translateX(0)", opacity: "1" },
        },
      },
      animation: {
        slideIn: "slideIn 1s ease-out forwards",
      },
    },
  },
  plugins: [],
});
export default config;
