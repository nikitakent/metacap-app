/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'branding-purple': '#8c52ff',
        'branding-marine-navy': '#0d383b',
        'branding-tennis-green': '#9cba3b',
      },
      fontFamily: {
        'sailors': ['Sailors', 'sans-serif'],
        'sailors-slant': ['Sailors Slant', 'sans-serif'],
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
