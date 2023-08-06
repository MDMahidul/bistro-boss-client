/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontSize:{
        'cover-title':'4rem',
        'cover-subtitle':'3rem',
      }
    },
    fontFamily:{
      main_font: ['Inter'],
      second_font: ['Cinzel serif']
    }
  },
  plugins: [require("daisyui")],
};

