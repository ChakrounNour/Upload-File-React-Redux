/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#ff9201",
        secondary: "#1c1c1c",
        gris: "#A1A1A1",
        danger: "#e05453",
        blue500: "#317fc9",
        blueDark: "#198cf7",
        blueGris: "#434551",
        success: "#3bb373",
      },
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ["focus-group"],
    },
  },
};
