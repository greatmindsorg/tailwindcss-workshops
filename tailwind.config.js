/** @type {import('tailwindcss').Config} */
const { baseThemeTailwindcss } = require('./styles/baseThemeTailwindcss.ts');
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    ...baseThemeTailwindcss,
    extend: {},
  },
  plugins: [],
  corePlugins: {
    preflight: true,
  }
}
