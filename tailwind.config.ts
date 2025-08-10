import { Config } from "tailwindcss";

/** @type {import('tailwindcss').Config} */
const config: Config = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        "background": "#F6F9F1",
        "primary-accent": "#b0fe76",
        "secondary-accent": "#81e979",
        "tertiary-accent": "#8fbb99",
        "primary-text": "#001B2E",
      },
      fontFamily: {
        poppins: ['Quicksand', 'sans-serif'],
        tusker: ['Poppins', 'sans-serif']
      },
      padding: {
        'section-xl': '3rem',
        'section-mobile': '2rem',
      },
      margin: {
        'section-xl': '50px',
      },
      backgroundClip: {
        text: "text",
      },
      boxShadow: {
        projectCard: "0px 0px 25px -3px #b0fe76",
        main: "0px 16px 39px -5px #b8b8b8"
      },
      screens: {
        xs: "420px"
      },
      fontSize: {
        heading: ""
      }
    },
  },
  plugins: [
    function ({ addBase, theme }) {
      const colors = theme('colors');
      const fonts = theme('fontFamily');

      const customProperties = {};

      const flattenColors = (obj, prefix = '') => {
        Object.keys(obj).forEach(key => {
          const value = obj[key];
          if (typeof value === 'string') {
            customProperties[`--${prefix}${key}`] = value;
          } else if (typeof value === 'object') {
            flattenColors(value, `${prefix}${key}-`);
          }
        });
      };

      flattenColors(colors);

      Object.keys(fonts).forEach(font => {
        customProperties[`--font-${font}`] = fonts[font].join(', ');
      });

      addBase({
        ':root': customProperties
      });
    }

  ],
}

export default config;