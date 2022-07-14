module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    fontFamily: {
      sans: '"Noto Sans", Arial, sans-serif',
    },
    extend: {
      fontFamily: {
        montserrat: "Montserrat, sans-serif",
      },
      colors: {
        main: "#005EEB",
        darkAccent: "#100490",
        lightAccent: "#E5E3FF",
        sub: "white"
      },
      margin: {
        s: "1rem",
        m: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "16rem",
      },
      padding: {
        s: "1rem",
        m: "2rem",
        lg: "4rem",
        xl: "8rem",
        "2xl": "16rem",
      }
    },
  },
  plugins: [require("tailwindcss-debug-screens")],
}
