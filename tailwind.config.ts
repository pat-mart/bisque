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
      }
    },

    fontFamily: {
      sans: ['Futura', 'sans-serif'],
      serif: ['Merriweather', 'serif']
    }
  },
  plugins: [],
};
export default config;
