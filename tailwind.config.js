/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        light: {
          60: "#FCFCFC",
          30: "#0E456C",
          10: "#58CDA3",
          hover10: "#398B6E",
        },
      },
    },
  },
  plugins: [],
};
