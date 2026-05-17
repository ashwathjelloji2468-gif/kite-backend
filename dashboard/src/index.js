import React, { useState } from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import "./index.css";
import Home from "./components/Home";

// 🎯 THE FIX: Import the Login component so React recognizes it below
import Login from "./components/Login";

// Import your context provider to keep the dashboard working perfectly
import { GeneralContextProvider } from "./components/GeneralContext";

function Root() {
  // Manage global dark theme state
  const [darkMode, setDarkMode] = useState(false);

  // Material-UI dynamic style configurations
  const theme = createTheme({
    palette: {
      mode: darkMode ? "dark" : "light",
      background: {
        default: darkMode ? "#121212" : "#ffffff",
        paper: darkMode ? "#1e1e1e" : "#ffffff",
      },
      text: {
        primary: darkMode ? "#ffffff" : "#000000",
        secondary: darkMode ? "#aaaaaa" : "#666666",
      },
    },
  });

  return (
    <GeneralContextProvider>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <BrowserRouter>
          <Routes>
            {/* 1. Independent standalone path for your clean Zerodha Login portal */}
            <Route path="/login" element={<Login />} />

            {/* 2. All other routes are nested inside Home layout */}
            <Route
              path="/*"
              element={<Home darkMode={darkMode} setDarkMode={setDarkMode} />}
            />
          </Routes>
        </BrowserRouter>
      </ThemeProvider>
    </GeneralContextProvider>
  );
}

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>,
);
