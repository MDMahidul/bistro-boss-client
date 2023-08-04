/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    fontFamily:{
      main_font: ['Inter'],
      /* second_font: ['Cinzel serif'] */
    }
  },
  plugins: [require("daisyui")],
};

