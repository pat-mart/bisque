import type { Config } from "tailwindcss";

const svgToDataUri = require("mini-svg-data-uri");

const colors = require("tailwindcss/colors");
const {
  default: flattenColorPalette,
} = require("tailwindcss/lib/util/flattenColorPalette");

const config: Config = {

  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}"
  ],

  theme: {
    screens: {
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },

    borderRadius: {
      '4xl': '2rem',
      'md': '0.375rem',
      'sm': '0.25rem',
      'lg': '0.5rem',
    },

    extend: {
      colors: {
        mutedAmber: '#B5651D',
        mutedLime: '#A3C18F',
        mutedEmerald: '#2F6D5B',
        slateShadow: '#101415'
      },
    },

    keyframes: {
      fadeIn: {
        '0%': {opacity: '0', transform: 'translateY(20px)'},
        '100%': {opacity: '1', transform: 'translateY(0)'}
      },

      fadeOut: {
        '0%': {opacity: '1', transform: 'translateY(0)'},
        '100%': {opacity: '0', transform: 'translateY(-20px)'}
      }
    },

    animation: {
      fadeIn: 'fadeIn 0.3s ease-out',
      fadeOut: 'fadeOut 0.25s ease-out'
    },

    fontFamily: {
      sans: ['Futura', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [
    addVariablesForColors,
    function ({ matchUtilities, theme }: any) {
      matchUtilities(
          {
            "bg-grid": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="32" height="32" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-grid-small": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="8" height="8" fill="none" stroke="${value}"><path d="M0 .5H31.5V32"/></svg>`
              )}")`,
            }),
            "bg-dot": (value: any) => ({
              backgroundImage: `url("${svgToDataUri(
                  `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32" width="16" height="16" fill="none"><circle fill="${value}" id="pattern-circle" cx="10" cy="10" r="1.6257413380501518"></circle></svg>`
              )}")`,
            }),
          },
          { values: flattenColorPalette(theme("backgroundColor")), type: "color" }
      );
    },
  ],
};

function addVariablesForColors({ addBase, theme }: any) {
  let allColors = flattenColorPalette(theme("colors"));
  let newVars = Object.fromEntries(
      Object.entries(allColors).map(([key, val]) => [`--${key}`, val])
  );

  addBase({
    ":root": newVars,
  });
}

export default config;
