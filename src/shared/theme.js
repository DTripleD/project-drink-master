const theme = (currentTheme) => ({
  colors: {
    black: currentTheme === "dark" ? "#0A0A11" : "#F3F3F3",
    blue: "#161F37",
    grey: currentTheme === "dark" ? "#434D67" : "#0cc20c",
    lightBlue: "#4070CD",
    green: "#BCE6D2",
    white: currentTheme === "dark" ? "#F3F3F3" : "#0A0A11",
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
});

export default theme;
