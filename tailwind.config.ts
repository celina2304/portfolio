import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      // 363635 - 595a4a - b0fe76 - 81e979 - 8fbb99
      colors: {
        "jet": { 
          DEFAULT: '#363635',
          100: '#0b0b0b', 
          200: '#161615', 
          300: '#202020', 
          400: '#2b2b2a', 
          500: '#363635', 
          600: '#5f5f5d', 
          700: '#878785', 
          800: '#afafae', 
          900: '#d7d7d6' },
        "ebony": { 
          DEFAULT: '#595a4a', 
          100: '#12120f', 
          200: '#23241d', 
          300: '#35362c', 
          400: '#47483b', 
          500: '#595a4a', 
          600: '#7e8069', 
          700: '#a0a18d', 
          800: '#c0c1b3', 
          900: '#dfe0d9' },
        "green_yellow": { 
          DEFAULT: '#b0fe76', 
          100: '#204a00', 
          200: '#419401', 
          300: '#61de01', 
          400: '#87fe2c', 
          500: '#b0fe76', 
          600: '#c1fe91', 
          700: '#d0ffad', 
          800: '#e0ffc8', 
          900: '#efffe4' },
        "light_green": { 
          DEFAULT: '#81e979', 
          100: '#0d3d0a', 
          200: '#1a7914', 
          300: '#28b61e', 
          400: '#45df3b', 
          500: '#81e979', 
          600: '#98ed92', 
          700: '#b2f2ad', 
          800: '#ccf6c9', 
          900: '#e5fbe4' },
        "cambridge_blue": { 
          DEFAULT: '#8fbb99', 
          100: '#19291d', 
          200: '#32523a', 
          300: '#4c7b57', 
          400: '#67a275', 
          500: '#8fbb99', 
          600: '#a6c9ae', 
          700: '#bdd6c3', 
          800: '#d3e4d7', 
          900: '#e9f1eb' } 
      }
    },
  },
  plugins: [],
}

export default config;