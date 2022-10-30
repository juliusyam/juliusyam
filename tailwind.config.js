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
        'jy-blue-700': '#5a6899',
        'jy-green': '#69CFA3',
        'jy-red': '#e14c5a',
        'jy-background': '#171717',
      },
      dropShadow: {
        'jy-text': [
          '2px 0 0 rgba(195, 218, 104, 1)',
          '-1px -1px 0 rgba(105, 170, 172, 1)',
        ],
        'jy-text-xl': [
          '5px 0 0 rgba(195, 218, 104, 1)',
          '-3px -3px 0 rgba(105, 170, 172, 1)',
        ],
        'nav-text': [
          '5px 1px 0 rgba(195, 218, 104, 0.5)',
          '-10px -10px 0 rgba(105, 170, 172, 0.15)'
        ],
        'text': '3px 3px 1px rgba(23, 23, 23, 1)',
      },
      rotate: {
        '135': '135deg',
        '270': '270deg',
      },
      gridTemplateColumns: {
        'tech': '15em calc(100% - 16em)',
        'tech-xl': '10em calc(100% - 11em)',
        'tech-sm': '5em calc(100% - 6em)',
        'portfolio-display-md': '10% 90%',
        'portfolio-display-lg': '20% 80%',
        'portfolio-display-xl': '30% 70%',
      },
      height: {
        'screen-without-nav': 'calc(100vh - 5em)',
        'carousel': 'calc(100vh - 9rem)',
        'carousel-sm': 'calc(100vh - 16rem)',
      },
      fontSize: {
        '14xl': '12rem',
      },
      inset: {
        '15': '3.75rem',
      },
    },
  },
  plugins: [
    require('@tailwindcss/line-clamp'),
  ],
}
