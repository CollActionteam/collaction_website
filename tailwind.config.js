/** @type {import('tailwindcss/tailwind-config').TailwindConfig} */

// eslint-disable-next-line @typescript-eslint/no-var-requires
const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
  content: [
    './src/components/**/*.{js,ts,jsx,tsx}',
    './src/pages/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    screens: {
      xs: '390px',
      ...defaultTheme.screens,
    },
    // only used in index page
    container: {
      padding: {
        DEFAULT: '1rem',
        sm: '2rem',
        md: '7rem',
        lg: '16rem',
      },
    },

    extend: {
      colors: {
        secondary: '#F9F9F9',
        primary: {
          0: '#EFEFEF',
          100: '#CCCCCC',
          200: '#999999',
          300: '#666666',
          400: '#333333',
          500: '#000000',
          DEFAULT: '#000000',
        },
        collaction: {
          100: '#D2F3EB',
          200: '#A5E8D8',
          300: '#92E3D0',
          400: '#4AD1B1',
          500: '#2EB494',
          DEFAULT: '#2EB494',
        },
      },
      boxShadow: {
        DEFAULT: '0px 5px 50px 0px rgba(0, 0, 0, 0.2)',
      },
      fontFamily: {
        sans: 'Rubik, sans-serif',
      },
      fontSize: {
        footnote: ['13px', '18px'],
        button: ['15px', '20px'],
        body: ['17px', '26px'],
        headline: ['17px', '22px'],
        'title-2': ['22px', '28px'],
        'title-1': ['28px', '34px'],
        'title-lg': ['40px', '41px'],
        featured: ['80px', '80px'],
      },
      height: {
        440: '440px',
        940: '940px',
      },
      width: {
        208: '52rem',
      },
      minWidth: {
        350: '350px',
      },
      maxWidth: {
        350: '350px',
        400: '400px',
        500: '500px',
        600: '600px',
        864: '864px',
      },
      spacing: {
        13: '3.25rem',
        15: '3.75rem',
        18: '4.5rem',
        22: '5.5rem',
        26: '6.5rem',
      },
      padding: {
        440: '440px',
        940: '940px',
      },
      borderRadius: {
        '3xl': '1.25rem',
        '4xl': '1.5rem',
      },
    },
  },
  plugins: [
    // https://gist.github.com/parafeu/3cf1c52d374a52091a685ce030563411
    require('./src/plugins/scrollbar.js'),
    require('@tailwindcss/line-clamp'),
    require('@tailwindcss/aspect-ratio'),
  ],
};
