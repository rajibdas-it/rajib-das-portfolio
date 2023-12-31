/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      bgNavy: "#001F3F", //for bg-1
      bgBlack: "#000000", //for bg-2
      curiousBlue: "#3498DB", //for button
      paleSky: "#707B7C", //for shadows
      myRed: "#800000"
    },
    fontFamily: {
      montserrat: ['Montserrat', 'sans - serif'],
      lora: ['Lora', 'serif']
    },
    extend: {},
  },
  plugins: [require("daisyui")],
}

