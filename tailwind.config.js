module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      colors: {
        primary: "#BE1E2D",
      },
    },
    fontFamily: {
      RacingSans: ["Racing Sans One", "serif"],
      Rubik: ["Rubik", "serif"],
    },
    container: {
      center: true,
      padding: "2.5rem",
      screens: {
        lg: "1124px",
        xl: "1124px",
        "2xl": "1124px",
      },
    },
  },
  plugins: [],
};
