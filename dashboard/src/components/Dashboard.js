import React, { useContext } from "react";
import { Routes, Route } from "react-router-dom";
import Topbar from "./TopBar";
import WatchList from "./WatchList";
import Summary from "./Summary";
import Orders from "./Orders";
import Holdings from "./Holdings";
import Positions from "./Positions";
import Funds from "./Funds";
import BuyActionWindow from "./BuyActionWindow";
import { GeneralContext } from "./GeneralContext";
import Apps from "./Apps";
import Profile from "./Profile";
import Settings from "./Settings";

const Dashboard = ({ darkMode, setDarkMode }) => {
  // Destructure windowMode alongside isBuyWindowOpen
  const { isBuyWindowOpen, windowMode } = useContext(GeneralContext);

  return (
    <div className="main-layout">
      {/* Keeping this Topbar as the master header menu */}
      <Topbar darkMode={darkMode} setDarkMode={setDarkMode} />

      {/* Screen splits horizontally below the Topbar navigation menu */}
      <div className="dashboard-container">
        <WatchList />

        <div className="content">
          <Routes>
            <Route path="/" element={<Summary />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/holdings" element={<Holdings />} />
            <Route path="/positions" element={<Positions />} />

            {/* Mapped the sub-routing match token for the Funds page */}
            <Route path="/funds" element={<Funds />} />

            {/* Added the routing match token for the Apps page */}
            <Route path="/apps" element={<Apps />} />
            <Route path="/profile" element={<Profile />} />

            {/* Forwarding the theme functions directly into your settings view router */}
            <Route
              path="/settings"
              element={
                <Settings darkMode={darkMode} setDarkMode={setDarkMode} />
              }
            />
          </Routes>
        </div>
      </div>

      {/* Pass the dynamic windowMode state ("BUY" or "SELL") to the window */}
      {isBuyWindowOpen && <BuyActionWindow mode={windowMode} />}
    </div>
  );
};

export default Dashboard;
