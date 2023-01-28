/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
      },
      keyframes:{
        girar:{
          '0%':{transform: 'rotate(0deg)'},
          '50%':{transform: 'rotate(180deg)'},
          '100%':{transform: 'rotate(360deg)'}
        }
      }
    },
  },
  plugins: [],
}