/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'hana-bg': '#14042D',
        'btn-primary': '#8C5AD9',
        'btn-secondary': '#D9A059',
        'input-bg': '#E4D2FA',
        'btn-disabled': '#9EB1A4',
        'selection-bg': '#59D977'
      },
      fontFamily: {
        'hana-logo': ['Lemon', 'serif'],
        'hana-text': ['Grotesque', 'sans-serif']
      }
    },
  },
  plugins: [],
}

