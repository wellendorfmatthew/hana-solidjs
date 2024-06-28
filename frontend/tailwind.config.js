/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-purple": "#14042D",
        "purple-primary": "#8C5AD9",
        "orange-secondary": "#D9A059",
        "light-pink": "#E4D2FA",
        "muted-green": "#9EB1A4",
        "neon-green": "#59D977",
      },
      fontFamily: {
        "hana-logo": ["Lemon", "serif"],
        "hana-text": ["Grotesque", "sans-serif"],
      },
      screens: {
        bigPhone: "376px",
      },
    },
    plugins: [],
  },
};
