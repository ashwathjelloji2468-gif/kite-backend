import React from "react";

function OpenAccount() {
  return (
    <div
      className="container"
      style={{
        paddingTop: "90px",
        paddingBottom: "100px",
      }}
    >
      <div className="row text-center">
        <div className="col-12">
          <h1
            style={{
              fontSize: "3rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "24px",
            }}
          >
            Open a Zerodha account
          </h1>

          <p
            style={{
              fontSize: "1.25rem",
              color: "#666",
              lineHeight: "1.8",
              marginBottom: "35px",
            }}
          >
            Modern platforms and apps, ₹0 investments, and flat ₹20 intraday and
            F&amp;O trades.
          </p>

          <button
            className="btn btn-primary"
            style={{
              backgroundColor: "#387ed1",
              border: "none",
              padding: "14px 34px",
              fontSize: "1.25rem",
              fontWeight: "500",
              borderRadius: "4px",
              minWidth: "260px",
            }}
          >
            Sign up for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default OpenAccount;
