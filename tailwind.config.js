/* eslint-disable no-undef */
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    // colors: {
    //   bgNavy: "#001F3F", //for bg-1
    //   bgBlack: "#000000", //for bg-2
    //   curiousBlue: "#3498DB", //for button
    //   paleSky: "#707B7C", //for shadows
    //   myRed: "#800000"
    //   // myRed: "#0ef"
    // },
    fontFamily: {
      montserrat: ['Montserrat', 'sans - serif'],
      lora: ['Lora', 'serif']
    },
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'skill-spin': 'spin 20s linear infinite',
        'bounce-slow': 'bounce 2s linear infinite',
      }
    },
  },
  plugins: [require("daisyui")],
}

