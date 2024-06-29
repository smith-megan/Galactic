/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: { burgundy: "rgb(40, 16, 16)" },
      fontFamily: {
        "font-header": ["Dosis", '"sans-serif"'],
      },
    },
  },
  plugins: [],
}
