/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        freDoka:" 'Fredoka', sans- serif",
        poppins: "'Poppins', sans- serif",
        amatic : "'Amatic SC', cursive",
      }
    },
  },
plugins: [require("daisyui")],
}