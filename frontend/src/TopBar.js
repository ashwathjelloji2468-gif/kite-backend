import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import UserMenu from "./UserMenu";

const Topbar = () => {
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // 🎯 FETCH REAL USER DATA: Grab the active userId or fall back to "USERID"
  const activeUserId = localStorage.getItem("userId") || "USERID";

  // Get first two characters of user ID for a clean avatar badge look (e.g., "KI")
  const avatarInitials = activeUserId.substring(0, 2).toUpperCase();

  const toggleUserMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="topbar-container">
      {/* Left side: Market Indices Layout */}
      <div className="indices-container">
        <p>
          NIFTY 50 <span className="index-val">100.2</span>
        </p>
        <p>
          SENSEX <span className="index-val">100.2</span>
        </p>
      </div>

      {/* Right side: Navigation Area Layout */}
      <div className="menu-container">
        <div className="menus">
          {/* Main Logo Container */}
          <img
            src="https://kite.zerodha.com/static/images/kite-logo.svg"
            alt="Kite Logo"
            className="logo"
          />

          <ul>
            <li>
              <Link
                to="/"
                className={`menu ${location.pathname === "/" ? "selected" : ""}`}
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/orders"
                className={`menu ${location.pathname === "/orders" ? "selected" : ""}`}
              >
                Orders
              </Link>
            </li>
            <li>
              <Link
                to="/holdings"
                className={`menu ${location.pathname === "/holdings" ? "selected" : ""}`}
              >
                Holdings
              </Link>
            </li>
            <li>
              <Link
                to="/positions"
                className={`menu ${location.pathname === "/positions" ? "selected" : ""}`}
              >
                Positions
              </Link>
            </li>
            <li>
              <Link
                to="/funds"
                className={`menu ${location.pathname === "/funds" ? "selected" : ""}`}
              >
                Funds
              </Link>
            </li>
            <li>
              <Link
                to="/apps"
                className={`menu ${location.pathname === "/apps" ? "selected" : ""}`}
              >
                Apps
              </Link>
            </li>
          </ul>

          {/* Profile User Badge Wrapper */}
          <div
            className="avatar-container"
            onClick={toggleUserMenu}
            style={{ position: "relative", cursor: "pointer" }}
          >
            {/* 🎯 Real Dynamic Variable Labels */}
            <span className="avatar">{avatarInitials}</span>
            <span className="user-id">{activeUserId}</span>

            {/* Conditional Dropdown Renderer */}
            {isMenuOpen && <UserMenu />}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Topbar;
