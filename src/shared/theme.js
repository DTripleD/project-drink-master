const theme = (currentTheme) => ({
  colors: {
    black: currentTheme === "dark" ? "#0A0A11" : "#f3f3f3",
    blue: "#161F37",
    grey: "#434D67",
    lightBlue: "#4070CD",
    green: "#BCE6D2",
    white: currentTheme === "dark" ? "#f3f3f3" : "#0A0A11",
    backgroundLight: "#dee4e7",
    lightGrey: "rgba(243, 243, 243, 0.5)",
  },
  fonst: {},
  breakpoint: {
    mobile: 375,
    tablet: 768,
    desktop: 1440,
  },
  device: {
    mobail: "screen and (min-width: 375px)",
    tablet: "screen and (min-width: 768px)",
    desktop: "screen and (min-width: 1440px)",
  },
  currentTheme,
});

export default theme;
