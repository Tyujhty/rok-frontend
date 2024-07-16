/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          60: "#FCFCFC",
          30: "#131313",
          10: "#58CDA3",
          hover10: "#8EDFC2",
          gray10: "#E3E3E3",
          danger: "#CD5858",
          dangerHover: "#D18C8C",
        },
      },
    },
  },
  plugins: [],
};
