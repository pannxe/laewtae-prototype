module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    colors: {
      blue : '#29394a',
      red : '#a43a4d',
      white : '#f5e6e9',
      black : '#1d242b'
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
