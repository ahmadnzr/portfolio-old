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
    },
  },
  plugins: [],
}
