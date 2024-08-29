/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        manrope: ["Manrope", "sans-serif"],
      },
      colors: {
        "dark-gray": "#48556A",
        "light-gray": "#9DAEC2",
      },
    },
  },
  plugins: [],
};
