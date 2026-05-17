import React, { useContext } from "react";
import { useNavigate } from "react-router-dom";
import { GeneralContext } from "./GeneralContext";

const UserMenu = ({ onClose }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.clear();
    sessionStorage.clear();

    
    onClose?.();

    navigate("/");
    console.log("User successfully logged out.");
  };

  return (
    <div className="user-dropdown-menu">
      <div className="user-menu-header">
        <h6>User Name</h6>
        <p>student_club@zerodha.com</p>
      </div>

      <hr className="menu-divider" />

      <ul className="menu-links-list">
        {/* 🎯 FIXED BOTH LINES BELOW WITH SAFETY CHECKS: onClose?.() */}
        <li
          onClick={() => {
            navigate("/profile");
            onClose?.();
          }}
        >
          <span className="menu-icon">👤</span> My Profile
        </li>
        <li
          onClick={() => {
            navigate("/settings");
            onClose?.();
          }}
        >
          <span className="menu-icon">⚙️</span> Settings
        </li>

        <li className="logout-item" onClick={handleLogout}>
          <span className="menu-icon logout-icon">🚪</span> Log out
        </li>
      </ul>
    </div>
  );
};

export default UserMenu;
