import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/styles/Theme.js";
import Header from "./components/Header.js";

function App() {
  return (
    <ThemeProvider theme={theme}>
      <Header />
      Testing!
    </ThemeProvider>
  );
}

export default App;
