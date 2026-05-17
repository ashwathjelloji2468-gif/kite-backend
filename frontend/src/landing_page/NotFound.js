import React from "react";
import { Link } from "react-router-dom";

function NotFound() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
        textAlign: "center",
      }}
    >
      <h1
        style={{
          fontSize: "3rem",
          fontWeight: "600",
          color: "#424242",
          marginBottom: "20px",
        }}
      >
        404
      </h1>

      <p
        style={{
          fontSize: "1.2rem",
          color: "#666",
          marginBottom: "30px",
        }}
      >
        Page not found.
      </p>

      <Link to="/" className="btn btn-primary">
        Go to Home
      </Link>
    </div>
  );
}

export default NotFound;
