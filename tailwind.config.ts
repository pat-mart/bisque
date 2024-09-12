import type { Config } from "tailwindcss";

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
  plugins: [],
};
export default config;
