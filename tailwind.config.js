/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.html", "./assets/**/*.js"],
  theme: {
    extend: {
      fontFamily: {
        iransans: "Roboto",
        iransansbold: "sans-serif",
      },
      colors: {
        primaryColor: "#ff5e3a",
        defaultColor: "#4f5665",
        blackColor: "#000",
        greyColor: "#f0f0f0",
        whiteColor: "#fff",
        lightpink: "#ffcce0",
      },
    },
  },
  plugins: [],
}
