/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'my-white': '#fffffe',
        'my-black': '#272343',
        'my-skyblue': '#bae8e8',
        'my-lightblue': '#e3f6f5',
        'my-yellow': '#ffd803',
      }
    },
  },
  plugins: [],
}
