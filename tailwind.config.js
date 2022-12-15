/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./screens/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./App.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
        colors: {
          "hascoding": "#138ec7"
        }
    },
  },
  plugins: [],
}
