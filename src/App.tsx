import React from "react";
import "./App.css";
import LandingPage from "./pages/LandingPage";
import { ThemeProvider, createTheme } from "@mui/material/styles";

declare module "@mui/material/styles" {
  interface Theme {
    status: {
      danger: string;
    };
  }
  // allow configuration using `createTheme`
  interface ThemeOptions {
    status?: {
      danger?: string;
    };
  }
}

const theme = createTheme({
  palette: {
    primary: {
      main: "#ffffff",
    },
    secondary: {
      main: "#0091ea",
    },
    error: {
      main: "#b71c1c",
    },
    warning: {
      main: "#ffff00",
    },
  },
});

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <LandingPage />
      </ThemeProvider>
    </div>
  );
}

export default App;
