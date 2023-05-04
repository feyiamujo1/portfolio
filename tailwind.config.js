/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        yellow: "#ffa02a",
        light_blue: "#45dfcd"
      }
    },
    fontFamily: {
      "raleway": ['Raleway', "sans-serif"],
    }
  },
  plugins: [],
}

