/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#FFCC00",
          50: "#FFFAE5",
          100: "#FFF5CC",
          200: "#FFEB99",
          300: "#FFE066",
          400: "#FFD633",
          500: "#FFCC00",
          600: "#CCA300",
          700: "#997A00",
          800: "#665200",
          900: "#332900",
        },
        secondary: {
          DEFAULT: "#222126",
          50: "#E7E6EA",
          100: "#D2D1D7",
          200: "#A5A2AE",
          300: "#757283",
          400: "#4C4A55",
          500: "#222126",
          600: "#1B1A1E",
          700: "#141316",
          800: "#0F0E10",
          900: "#070708",
        },
      },
    },
  },
  plugins: [],
};
