/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.{html,js}"],
  theme: {
    screens: {
      sm: "640px",
      md: "768px",
      lg: "992px",
      xl: "1340px",
    },
    extend: {
      colors: {
        tgray: {
          50: "#f35525",
          100: "#1e1e1e",
          200: "#7a7a7a",
          300: "#cdcdcd",
          400: "#ee626b",
          500: "#fafafa",
          600:"#ffeee9"
        },
}
    },
  },
  plugins: [],
}

