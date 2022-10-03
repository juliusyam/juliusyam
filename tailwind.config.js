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
        tomorrow: ['tomorrow'],
      },
      colors: {
        'jy-cyan-300': '#afccc8',
        'jy-cyan': '#69aaac',
        'jy-lime-300': '#c1ccaf',
        'jy-lime': '#c3da68',
        'jy-blue': '#6978AC',
        'jy-background': '#171717',
      },
      dropShadow: {
        'jy-text': [
          '5px 0 0 rgba(195, 218, 104, 1)',
          '-3px -3px 0 rgba(105, 170, 172, 1)',
        ],
        'text': '3px 3px 1px rgba(23, 23, 23, 1)',
      },
      rotate: {
        '135': '135deg'
      },
      gridTemplateColumns: {
        'tech': '15em calc(100% - 10em)',
        'portfolio-display': '30% 70%',
      },
      height: {
        'screen-without-nav': 'calc(100vh - 5em)',
      },
      fontSize: {
        '14xl': '12rem',
      },
      inset: {
        '15': '3.75rem',
      }
    },
  },
  plugins: [],
}
