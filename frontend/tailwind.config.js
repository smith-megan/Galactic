/** @type {import('tailwindcss').Config} */

export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        pattern: "url('./assets/darkbrass.png')",
        elevator: "url('./assets/levels.jpg')",
      },
      colors: {
        "burgundy-500": "rgb(40, 16, 16)",
        "burgundy-300": "#730707",
        "burgundy-400": "#480606",
        "charcoal-300": "#171D1B",
        "cream-100": "#F8E5CD",
        "cream-200": "#E3CBAE",
        "cream-300": "#B69D7E",
        "navy-400": "#2A3540",
      },
      fontFamily: {
        header: ["Wittgenstein", "serif"],
        body: ["Mukta", "sans-serif"],
      },
    },
  },
  plugins: [],
}
