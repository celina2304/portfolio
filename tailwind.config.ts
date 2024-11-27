import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}' ],
  theme: {
    extend: {
      colors: {
        // 363635 - 595a4a - b0fe76 - 81e979 - 8fbb99
        "jett-black": "#000",
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
      },
      fontFamily: {
        tusker: ['TuskerGrotesk', 'sans-serif'], 
        quicksand: ['Quicksand', 'sans-serif'], 
        poppins: ['Poppins', 'sans-serif']
      },
      fontSize: {
        'tusker-heading': ['120px', { lineHeight: '135px' }],
        'tusker-heading-mobile': ['50px', { lineHeight: '55px' }],
        'tusker-home-text': ['63px', {lineHeight: '65px'}],
        'tusker-home-text-mobile': ['43px', {lineHeight: '60px'}],
        'tusker-home-text-mobile2': ['43px', {lineHeight: '40px'}],
        'tusker-subheading': ['100px', { lineHeight: '115px', letterSpacing: '0.01rem' }],
        'tusker-subheading2': ['70px', { lineHeight: '105px', letterSpacing: '0.01rem' }],
        'tusker-card-heading': ['40px', { lineHeight: '55px', letterSpacing: '0.01rem' }],
      },
      padding: {
        'section-2xl': '200px',
        'section-xl': '50px',
        'section-mobile': '20px',
      },
      margin: {
        'section-xl': '50px',
      },
      backgroundClip: {
        text: "text",
      },
      boxShadow: {
        projectCard: "0px 0px 13px 3px #b0fe76"
      }
    },
  },
  plugins: [
    function ({ addUtilities, theme, e }) {
      const colors = theme('colors');
      const strokeColors = Object.keys(colors).reduce((acc, color) => {
        const colorShades = colors[color];
        if (typeof colorShades === 'object') {
          Object.keys(colorShades).forEach(shade => {
            const className = `.text-stroke-${e(`${color}-${shade}`)}`;
            const colorValue = colorShades[shade];
            acc[className] = {
              '-webkit-text-stroke': `2px ${colorValue}`,
              'color': 'transparent',
            };
          });
        }
        return acc;
      }, {});
      const strokeColors2 = Object.keys(colors).reduce((acc, color) => {
        const colorShades = colors[color];
        if (typeof colorShades === 'object') {
          Object.keys(colorShades).forEach(shade => {
            const className = `.text-stroke2-${e(`${color}-${shade}`)}`;
            const colorValue = colorShades[shade];
            acc[className] = {
              '-webkit-text-stroke': `2px ${colorValue}`,
              'color': 'black',
            };
          });
        }
        return acc;
      }, {});

      addUtilities(strokeColors, ['responsive', 'hover']);
      addUtilities(strokeColors2, ['responsive', 'hover']);
    },
    function ({ addUtilities, theme }) {
      const colors = theme('colors');
      const customProperties = Object.keys(colors).reduce((acc, color) => {
        const colorShades = colors[color];
        if (typeof colorShades === 'string') {
          // For simple color values
          acc[`:root`] = {
            ...acc[`:root`],
            [`--color-${color}`]: colorShades,
          };
        } else if (typeof colorShades === 'object') {
          // For shades of a color
          Object.keys(colorShades).forEach(shade => {
            acc[`:root`] = {
              ...acc[`:root`],
              [`--color-${color}-${shade}`]: colorShades[shade],
            };
          });
        }
        return acc;
      }, { ':root': {} });
    
      addUtilities(customProperties, ['responsive']);
    },
    
  ],
}

export default config;