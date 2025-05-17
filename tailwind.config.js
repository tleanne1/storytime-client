/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cream: "#F6F1F1",
        paleblue: "#AFD3E2",
        blue: "#19A7CE",
        darkblue: "#146C94",
        white: "#FFFFFF"
      },
    },
  },
  plugins: [],
};
