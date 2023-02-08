/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        120: "505px",
        62: "252px"
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}