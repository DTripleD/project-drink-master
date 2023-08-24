import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { ThemeProvider } from "@emotion/react";

const theme = {
  colors: {
    black: "#0A0A11",
    blue: "#161F37",
    grey: "#434D67",
    lightBlue: "#4070CD",
    green: "#BCE6D2",
    white: "#F3F3F3",
  },
  fonst: {},
  breakpoint: {
    mobile: 375,
    tablet: 768,
    desktop: 1440,
  },
};

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </Router>
  </React.StrictMode>
);
