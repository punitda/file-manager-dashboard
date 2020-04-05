module.exports = {
  theme: {
    screens: {
      sm: "640px",
      // => @media (min-width: 640px) { ... }

      md: "768px",
      // => @media (min-width: 768px) { ... }

      lg: "1024px",
      // => @media (min-width: 1024px) { ... }

      xl: "1280px",
      // => @media (min-width: 1280px) { ... }

      "2xl": "1800px",
    },
    extend: {
      gridTemplateColumns: {
        main: "220px 1fr 330px",
        recentfiles: "1fr 20% 20% 5%",
        folder: "20% 1fr 20%",
      },
      gridTemplateRows: {},
      fontSize: {
        tiny: "0.50rem",
      },
    },
  },
  variants: {
    margin: ["responsive", "first", "last", "hover", "focus"],
  },
  plugins: [],
};
