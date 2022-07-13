module.exports = {
  content: ["./src/**/*.{html,js, jsx}", "./public/*.html"],
  theme: {
    container: {
      padding: "2rem",
    },
    extend: {
      fontFamily: {
        'montserrat': "Montserrat, sans-serif",
      },
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
}
