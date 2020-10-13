import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { ThemeProvider } from "@material-ui/styles";
import theme from "./components/styles/Theme.js";

function App() {
  return <ThemeProvider theme={theme}>Testing!</ThemeProvider>;
}

export default App;
