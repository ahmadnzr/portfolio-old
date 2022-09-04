/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        screenCard: 'calc(100vh - 3rem)',
      },
    },
  },
  plugins: [],
}
