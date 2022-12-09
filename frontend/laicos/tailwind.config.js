/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      spacing: {
        '22': '22%',
      },

      colors: {
        'purple': '#a76981',
        'light-purple': '#F0DBDB',
      },
      
    },
  },
  plugins: [],
}