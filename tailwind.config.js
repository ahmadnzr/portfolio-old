/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      height: {
        screenCard: 'calc(100vh - 3rem)',
        cardTwo: 'calc(100vh - 15rem)',
      },
      keyframes: {
        swipe: {
          '0%': { transform: 'translateX(-10%)' },
          '50%': { transform: 'translateX(-100%)' },
          '100%': { transform: 'translateX(0%)' },
        },
      },
      animation: {
        'swipe-image': 'swipe 5s linear infinite',
      },
    },
  },
  plugins: [],
}
