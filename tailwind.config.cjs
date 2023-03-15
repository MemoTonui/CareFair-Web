const defaultTheme = require("tailwindcss/defaultTheme");
const colors = require("tailwindcss/colors");

const path = require("path");

/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: {
    content: [
      "./public/**.*.html",
      "./src/**/*.vue",
      path.resolve(__dirname, "./node_modules/litepie-datepicker/**/*.js"),
    ],
  },
  content: ["./public/**/*.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    colors: {
    
    },
    extend: {
      fontFamily: {
        sans: ["Open Sans", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        'primary': '#0093B8',
        'secondary': '#21706D',
        'light-green': '#00A39B',
        'green': '#008F11',
        'orange': '#FF8800',
        'pink': '#F9627B',
        'maroon': '#7A0049',
        'dark-pink': '#BA095B',
        'white':"#FFF"
      },
      boxShadow: {
        blue: "0 0 3px #4285f4",
      },
    },
  },
  variants: {
    extend: {
      margin: ["first"],
      cursor: ["disabled"],
      textOpacity: ["disabled"],
      textColor: ["disabled"],
    },
  },
  plugins: [],
};
