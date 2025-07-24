/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
 theme: {
  extend: {
    animation: {
      slide: 'slide 25s linear infinite',
    },
    keyframes: {
      slide: {
        '0%': { transform: 'translateX(0)' },
        '100%': { transform: 'translateX(-50%)' },
      },
    },
  },
},
  plugins: [],
}
