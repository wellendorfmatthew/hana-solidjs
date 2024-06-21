/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "hana-bg": "#14042D",
        "btn-bg-primary": "#8C5AD9",
        "btn-bg-secondary": "#D9A059",
        "input-bg": "#E4D2FA",
        "btn-bg-disabled": "#9EB1A4",
        "selection-bg": "#59D977",
      },
      fontFamily: {
        "hana-logo": ["Lemon", "serif"],
        "hana-text": ["Grotesque", "sans-serif"],
      },
      screens: {
        "bigPhone": '376px',
      }
    },
    plugins: [],
  },
};
