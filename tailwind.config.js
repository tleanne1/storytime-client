/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        sky: "#D1EEFC",
        lavender: "#E5DFF5",
        coral: "#F8C8C4",
        night: "#2D3142",
        white: "#FFFFFF"
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        display: ["Merriweather", "serif"],
      },
    },
  },
  plugins: [],
};
