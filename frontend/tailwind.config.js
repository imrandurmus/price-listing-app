/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: '#1e40af',
    },
    fontFamily: {
      poppins: ['Poppins', 'sans-serif'],
    },
  },
},
  plugins: [],
};
