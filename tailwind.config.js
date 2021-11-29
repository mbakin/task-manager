module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
      'light': '#ffffff',
      'sidebar-text-color': '#5EEAD4',
      'sidebar-background-color': '#EAE7AF',
      }
  },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
