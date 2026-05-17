import React from "react";

function Hero() {
  return (
    <div
      className="container text-center"
      style={{ paddingTop: "100px", paddingBottom: "80px" }}
    >
      <h1
        style={{
          fontSize: "3rem",
          color: "#424242",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        Zerodha Products
      </h1>

      <p
        style={{
          fontSize: "1.4rem",
          color: "#666",
          marginBottom: "20px",
        }}
      >
        Sleek, modern, and intuitive trading platforms
      </p>

      <p
        style={{
          fontSize: "1.1rem",
          color: "#387ed1",
        }}
      >
        Check out our investment offerings →
      </p>
    </div>
  );
}

export default Hero;
