/** @type {import('tailwindcss').Config} */
// const withMT = require("@material-tailwind/react/utils/withMT");
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  theme: {
    fontFamily: {
      sans: ['Share Tech Mono', 'sans-serif'],
    },
    extend: {
      colors: {
        brandBlue: '#4338CA',
      },
      backgroundImage: (theme) => ({
        hero: "url('../src/assets/hero.png')",
        hexagon: "url('../src/assets/hexagon.png')",
      }),
    },
  },
  plugins: [],
}
