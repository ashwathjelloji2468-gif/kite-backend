import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import Dashboard from "./Dashboard";

const Home = ({ darkMode, setDarkMode }) => {
  // Check if our pseudo-authentication token exists
  const isAuthenticated = localStorage.getItem("token");

  // If the user isn't logged in, instantly boot them back to the Zerodha login screen
  if (!isAuthenticated) {
    return <Navigate to="/login" replace />;
  }

  return (
    <>
      <Routes>
        <Route
          path="/*"
          element={<Dashboard darkMode={darkMode} setDarkMode={setDarkMode} />}
        />
      </Routes>
    </>
  );
};

export default Home;
