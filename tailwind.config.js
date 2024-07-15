/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
      },
      container: {
        center: true,
        padding: "1rem", // default padding
        screens: {
          "sm": "576px",
          "md": "768px",
          "lg": "960px",
          "xl": "9920px",
          "2xl": "1200px", // You can add more custom breakpoints if needed
        },
      },
    },
  },
  plugins: [],
};
