/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        ocr: ['ocr'],
      },
      colors: {
        'jy-cyan': '#69aaac',
        'jy-lime': '#c3da68',
      }
    },
  },
  plugins: [],
}
