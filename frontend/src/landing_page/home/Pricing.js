import React from "react";

function Pricing() {
  return (
    <div
      className="container"
      style={{
        padding: "90px 0",
      }}
    >
      <div className="row align-items-center">
        <div className="col-lg-4 col-md-12">
          <h1
            style={{
              fontSize: "2.8rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "28px",
            }}
          >
            Unbeatable pricing
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              color: "#666",
              marginBottom: "28px",
              maxWidth: "95%",
            }}
          >
            We pioneered the concept of discount broking and price transparency
            in India. Flat fees and no hidden charges.
          </p>

          <a
            href="/pricing"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontSize: "1.15rem",
              fontWeight: "500",
            }}
          >
            See pricing <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>

        <div className="col-lg-8 col-md-12">
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              gap: "35px",
              flexWrap: "wrap",
            }}
          >
            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                minWidth: "180px",
              }}
            >
              <h2
                style={{
                  fontSize: "4.5rem",
                  fontWeight: "500",
                  color: "#f9a825",
                  margin: "0",
                  lineHeight: "1",
                }}
              >
                ₹0
              </h2>
              <p
                style={{
                  margin: "0",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  maxWidth: "130px",
                }}
              >
                Free account opening
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                minWidth: "180px",
              }}
            >
              <h2
                style={{
                  fontSize: "4.5rem",
                  fontWeight: "500",
                  color: "#f9a825",
                  margin: "0",
                  lineHeight: "1",
                }}
              >
                ₹0
              </h2>
              <p
                style={{
                  margin: "0",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  maxWidth: "130px",
                }}
              >
                Free equity delivery and direct mutual funds
              </p>
            </div>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                gap: "14px",
                minWidth: "180px",
              }}
            >
              <h2
                style={{
                  fontSize: "4.5rem",
                  fontWeight: "500",
                  color: "#f9a825",
                  margin: "0",
                  lineHeight: "1",
                }}
              >
                ₹20
              </h2>
              <p
                style={{
                  margin: "0",
                  fontSize: "1rem",
                  color: "#666",
                  lineHeight: "1.6",
                  maxWidth: "130px",
                }}
              >
                Intraday and F&amp;O
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
