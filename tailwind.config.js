/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'black-suable': "#121212",
        "hidro": "#116DC2",
        "carb": "#010F1C",
        "bg-button": "#003667",
        "molecules": "#D8EBFD",
        "border-mol": "#5086B7CC",
        "bg-input": "#D5EBFF",
        "border-input": "#00203E",
        "mol-text": "#010F1C",
        "bg-mol": "#116DC2",
        "card": "#1A3B59",
        "name": "#D4E9FD",
        "molecule": "#003667"
      },
      width: {
        "30-pc": "30%",
      }, 
      fontFamily: {
        "plus-jakarta-sans": ["Plus Jakarta Sans", "sans"]
      },
      borderRadius: {
        "rounded-30": "30px"
      }
    },
  },
  plugins: [],
}