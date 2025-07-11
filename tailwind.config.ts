import type { Config } from "tailwindcss";
import { nextui } from "@nextui-org/react";
const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      screens: {
        xs: "480px",
        "13in": "1390px",
      },
      colors: {
        primaryYellow: "#FACA4A",
        homeBodyBg: "#F4F6F8",
        textPrimary: "#1C252E",
        textSecondary: "#637381",
        blue800: "#013065",
        blue700: "#024897",
        blue600: "#025FCA",
        blue500: "#0373F3",
        blue100: "#CDE4FE",
        blue50: "#E6F1FF",
        errMain: "#FF5630",
        errDarker: "#7A0916",
        warningLight: "#FFD666",
        warningLighter: "#FFF5CC",
        warningMain: "#FFAB00",
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};
export default config;
