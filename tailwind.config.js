/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],

  theme: {
    fontFamily: {
      poppins: ["Poppins"],
      grape: ["Grape Nuts"],
    },
    colors: {
      primary: "#4eac0f",
      secondary: "#242423",
      white: "#fff",
    },
    extend: {},
  },
  plugins: [],
};
