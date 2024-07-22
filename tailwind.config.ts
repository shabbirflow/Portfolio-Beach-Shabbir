import type { Config } from "tailwindcss";
import "daisyui";
import "tailwind-scrollbar";

export const themeNames = [
  "light",
  "dark",
  "synthwave",
  "business",
  "cyberpunk",
  "night",
  "forest",
  "aqua",
  "pastel",
  "bumblebee",
  "luxury",
  "dracula",
  "acid",
  "cmyk",
  "lofi"
];

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
    },
  },
  plugins: [require("daisyui"), require('tailwind-scrollbar')({ nocompatible: true })], 
  daisyui: {
    themes: themeNames,
  },
};
export default config;
