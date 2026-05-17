import React from "react";

function Hero() {
  return (
    <div
      style={{
        backgroundColor: "#f5f5f5",
        padding: "60px 0 50px 0",
        borderBottom: "1px solid #eee",
      }}
    >
      <div className="container">
        <div className="d-flex justify-content-between align-items-center mb-4 flex-wrap">
          <h1
            style={{
              fontSize: "3.5rem",
              color: "#424242",
              margin: 0,
              fontWeight: "500",
            }}
          >
            Support Portal
          </h1>

          <button
            style={{
              backgroundColor: "#387ed1",
              color: "white",
              border: "none",
              padding: "12px 22px",
              fontSize: "1.1rem",
              borderRadius: "4px",
              fontWeight: "500",
            }}
          >
            My tickets
          </button>
        </div>

        <div
          style={{
            backgroundColor: "#fff",
            border: "1px solid #eee",
            borderRadius: "4px",
            padding: "18px 20px",
            display: "flex",
            alignItems: "center",
            gap: "12px",
          }}
        >
          <span style={{ fontSize: "1.3rem", color: "#666" }}>🔍</span>
          <input
            type="text"
            placeholder="Eg: How do I open my account, How do i activate F&O..."
            style={{
              border: "none",
              outline: "none",
              width: "100%",
              fontSize: "1.35rem",
              color: "#666",
              backgroundColor: "transparent",
            }}
          />
        </div>
      </div>
    </div>
  );
}

export default Hero;
