/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        signika: ['Signika', 'sans-serif'],
        lato: ["Lato", "sans-serif"],
        inter: ["Inter", "sans-serif"]
      },
      colors: {
        primary: "#1e6bd3",
        secondary: "#007aff",
        dark: {
          50 : "#1D2939",
          100: "#212121",
          200: "#1b2129",
          300: "#2d2d2d",
          400: "#525a6d",
          500 : "#344054"
        },
        txt: {
          100: "#98a2b3",
          200: "#858585",
          300: "#5a5a5b",
          400: "#6a6a6a",
          500 : "#4F547B",
          600 : "#667085"
        },
        link: "#6e6d6d",
        bgGray: "#f4f4f4",
        bgGray2: "#F9FAFB",
        bgGray3 : "#E6EAEEB2",
        border: "#cfcfcf",
      },
      fontSize : {
        "larger": "clamp(2.2rem, -0.07999999999999963rem + 7.6vw, 6rem)",
        "large": "clamp(2rem, 0.9363636363636363rem + 1.2121212121212124vw, 3.2rem)",
        "medium-300" : "clamp(1.7rem, 1.28rem + 1.4vw, 2.4rem)",
        "medium-200": "clamp(1.3rem, 0.9363636363636363rem + 1.2121212121212124vw, 2.1rem)",
        "medium-100": "clamp(1.5rem, 1.2rem + 1vw, 2rem)",
        "small-400" : "clamp(1.3rem, 1.06rem + 0.7999999999999998vw, 1.7rem)",
        "small-300": "clamp(1rem, 0.7272727272727273rem + 0.9090909090909092vw, 1.6rem)",
        "small-200": "clamp(0.8rem, 0.43636363636363634rem + 1.2121212121212124vw, 1.6rem)",
        "small-100": "clamp(1.2rem, 1.02rem + 0.6000000000000001vw, 1.5rem)",
        "small-50": "clamp(1.1rem, 0.66rem + 0.8vw, 1.3rem)",
      }
    },
  },
  plugins: [],
}
