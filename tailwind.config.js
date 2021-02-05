module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        brown: '#3d180f',
      },
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
