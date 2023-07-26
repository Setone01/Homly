/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,css,js,jsx,ts}"],
  theme: {
    extend: {
      fontFamily: {
        Lexend: ["Lexend", "sans-serif"],
      },
      colors: {
        primary: "hsla(270, 83%, 18%, 1)",
        primaryText: "hsla(270, 39%, 32%, 1)",
        secondary: "hsla(34, 93%, 48%, 1)",
        textPurple: "hsla(270, 39%, 32%, 1)",
        textGrey: "hsla(0, 0%, 20%, 1)",
        lightGrey: "hsla(46, 2%, 33%, 1)",
        textGrey: "hsla(0, 0%, 49%, 1)",
        bgGrey: "hsla(0, 0%, 82%, 1)",
        colorGrey: "hsla(30, 1%, 70%, 1)",
        smokewhite: "hsla(0, 0%, 0%, 0.07),"
      },
    },
    screens: {
      vs: "220px",
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
};
