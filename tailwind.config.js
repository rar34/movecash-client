/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        tealColor: '#008080'
      }
    },
  },
  plugins: [
    require('daisyui'),
  ],
}

