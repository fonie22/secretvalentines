/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  plugins: [],
  theme: {
    extend: {
      fontFamily: {
        'cherry-swash': ['Raleway', 'sans-serif'],
        'dancing-script': ['Dancing Script', 'cursive'],
      },
      colors: {
        'red': '#E11D48',  
        'green': '#EC4899',  
        'gray': '#FBCFE8',
      },
    },
  },
}

