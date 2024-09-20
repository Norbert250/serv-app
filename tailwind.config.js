/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        'primary': "#3366ff",
        'secondary': "white"
      }
    },
  },
  plugins: [],
}

