/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'], 
        lato : ["Lato", "sans-serif"],
        inter : ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#1e6bd3",
        secondary: "#007aff",
        dark: {
          100: "#212121",
          200: "#1b2129",
          300: "#2d2d2d",
        },
        txt: {
          100: "#98a2b3",
          200: "#858585",
          300: "#5a5a5b",
          400: "#6a6a6a"
        },
        link: "#6e6d6d",
        bgGray: "#f4f4f4",
        border: "#cfcfcf",
      }
    },
  },
  plugins: [],
}
