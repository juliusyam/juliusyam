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
        'jy-cyan-300': '#afccc8',
        'jy-cyan': '#69aaac',
        'jy-lime-300': '#c1ccaf',
        'jy-lime': '#c3da68',
      },
      dropShadow: {
        'jy-text': [
          '5px 0 0 rgba(195, 218, 104, 1)',
          '-3px -3px 0 rgba(105, 170, 172, 1)',
        ],
      },
    },
  },
  plugins: [],
}
