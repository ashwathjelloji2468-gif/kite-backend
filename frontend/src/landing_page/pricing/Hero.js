import React from "react";

function Hero() {
  return (
    <div
      className="container text-center"
      style={{ paddingTop: "100px", paddingBottom: "80px" }}
    >
      <h1
        style={{
          fontSize: "3.2rem",
          color: "#424242",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        Charges
      </h1>

      <p
        style={{
          fontSize: "1.5rem",
          color: "#666",
          marginBottom: "70px",
        }}
      >
        List of all charges and taxes
      </p>

      <div className="row text-center align-items-start">
        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="/media/pricingEquity.svg"
            alt="Free equity delivery"
            style={{ width: "65%", marginBottom: "25px" }}
          />
          <h3
            style={{
              fontSize: "2.5rem",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Free equity delivery
          </h3>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#666",
              lineHeight: "1.8",
            }}
          >
            All equity delivery investments (NSE, BSE), are absolutely free — ₹
            0 brokerage.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="/media/intradayTrades.svg"
            alt="Intraday and F&O trades"
            style={{ width: "65%", marginBottom: "25px" }}
          />
          <h3
            style={{
              fontSize: "2.5rem",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Intraday and F&amp;O trades
          </h3>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#666",
              lineHeight: "1.8",
            }}
          >
            Flat ₹ 20 or 0.03% (whichever is lower) per executed order on
            intraday trades across equity, currency, and commodity trades. Flat
            ₹ 20 on all option trades.
          </p>
        </div>

        <div className="col-lg-4 col-md-4 col-sm-12 mb-5">
          <img
            src="/media/pricingMF.svg"
            alt="Free direct MF"
            style={{ width: "65%", marginBottom: "25px" }}
          />
          <h3
            style={{
              fontSize: "2.5rem",
              color: "#424242",
              marginBottom: "20px",
            }}
          >
            Free direct MF
          </h3>
          <p
            style={{
              fontSize: "1.3rem",
              color: "#666",
              lineHeight: "1.8",
            }}
          >
            All direct mutual fund investments are absolutely free — ₹ 0
            commissions &amp; DP charges.
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
