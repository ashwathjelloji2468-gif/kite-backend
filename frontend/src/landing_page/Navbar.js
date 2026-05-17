import React, { useState } from "react";
import { Link } from "react-router-dom";

function Navbar() {
  const [hovered, setHovered] = useState("");

  const linkStyle = (name) => ({
    color: hovered === name ? "#387ed1" : "#666",
    fontSize: "1.05rem",
    textDecoration: "none",
    transition: "color 0.3s ease",
  });

  return (
    <nav
      className="navbar navbar-expand-lg"
      style={{
        backgroundColor: "#fff",
        borderBottom: "1px solid #eee",
        padding: "18px 0",
        position: "sticky",
        top: "0",
        zIndex: "1000",
        width: "100%",
      }}
    >
      <div className="container">
        <Link
          className="navbar-brand"
          to="/"
          style={{ textDecoration: "none" }}
        >
          <img
            src="/media/logo.svg"
            alt="Zerodha logo"
            style={{ width: "150px" }}
          />
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
          style={{
            border: "none",
            boxShadow: "none",
          }}
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNav">
          <ul
            className="navbar-nav ms-auto"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "30px",
            }}
          >
            <li className="nav-item">
              <Link
                to="/signup"
                style={linkStyle("signup")}
                onMouseEnter={() => setHovered("signup")}
                onMouseLeave={() => setHovered("")}
              >
                Signup
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/about"
                style={linkStyle("about")}
                onMouseEnter={() => setHovered("about")}
                onMouseLeave={() => setHovered("")}
              >
                About
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/products"
                style={linkStyle("products")}
                onMouseEnter={() => setHovered("products")}
                onMouseLeave={() => setHovered("")}
              >
                Products
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/pricing"
                style={linkStyle("pricing")}
                onMouseEnter={() => setHovered("pricing")}
                onMouseLeave={() => setHovered("")}
              >
                Pricing
              </Link>
            </li>

            <li className="nav-item">
              <Link
                to="/support"
                style={linkStyle("support")}
                onMouseEnter={() => setHovered("support")}
                onMouseLeave={() => setHovered("")}
              >
                Support
              </Link>
            </li>

            <li className="nav-item">
              <span
                style={{
                  color: hovered === "menu" ? "#387ed1" : "#666",
                  fontSize: "1.4rem",
                  transition: "color 0.3s ease",
                  cursor: "pointer",
                }}
                onMouseEnter={() => setHovered("menu")}
                onMouseLeave={() => setHovered("")}
              >
                <i className="fa-solid fa-bars"></i>
              </span>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;