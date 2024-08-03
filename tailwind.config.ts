import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        "plum": "#F9B9F2",
        "lilac": "#BCA0BC",
        "gunmetal": "#2B3D41",
        "paynes-gray": "#4C5F6B",
        "cadet-gray": "#83A0A0",
      }
    },
  },
  plugins: [],
}

export default config;