/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        'darkblue':'#16181E',
        'middleblue': '#21242D',
        'darkgray':'#00000033',
        'lightgreen':'#00B9AE'
      }
    },
  },
  plugins: [],
}

