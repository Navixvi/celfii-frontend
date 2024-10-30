/** @type {import('tailwindcss').Config} */
export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          md: "3rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        }
      },
      colors: {
        primary: "rgb(220 38 38)", // Rojo
        secondary: "#000000", // Negro
        accent: "#FFFFFF", // Blanco
      },
    },
  },
  plugins: [],
};

