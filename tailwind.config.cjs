/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Poppins", "sans-serif"],
      },
      gridTemplateColumns: {
        headingmd: "1fr 2fr",
      },
      backgroundColor: {
        accent: "#3A3AF4",
        primary: "#131313",
      },
    },
  },
  plugins: [],
};
