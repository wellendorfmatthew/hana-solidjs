/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        "purple-dark": "#14042D",
        "purple-primary": "#8C5AD9",
        "orange-secondary": "#D9A059",
        "pink-light": "#E4D2FA",
        "green-muted": "#9EB1A4",
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
