// tailwind.config.js
module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      backgroundImage: theme => ({
        'landing': "url('/src/background2.png')"
      })
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}