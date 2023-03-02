/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
      },
      spacing: {
        120: "505px",
        62: "252px",
        200: "780px"
      },
      scale: {
        '102': '1.02',
      }
    },
  },
  plugins: [],
}