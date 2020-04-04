module.exports = {
  theme: {
    extend: {
      gridTemplateColumns: {
        main: "220px 1fr 330px",
        recentfiles: "1fr 20% 20% 5%",
        folder: "20% 1fr 20%"
      },
      gridTemplateRows: {},
      fontSize: {
        tiny: "0.50rem"
      }
    }
  },
  variants: {
    margin: ["responsive", "first", "last", "hover", "focus"]
  },
  plugins: []
};
