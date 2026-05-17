import React from "react";

function Education() {
  return (
    <div className="container" style={{ padding: "70px 0 40px 0" }}>
      <div
        className="row"
        style={{
          alignItems: "center",
          marginBottom: "120px",
        }}
      >
        <div className="col-lg-6 col-md-12" style={{ textAlign: "center" }}>
          <img
            src="media/education.svg"
            alt="Varsity education illustration"
            style={{
              width: "85%",
              maxWidth: "520px",
            }}
          />
        </div>

        <div className="col-lg-6 col-md-12">
          <h1
            style={{
              fontSize: "2.7rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "28px",
            }}
          >
            Free and open market education
          </h1>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              color: "#666",
              marginBottom: "22px",
              maxWidth: "95%",
            }}
          >
            Varsity, the largest online stock market education book in the world
            covering everything from the basics to advanced trading.
          </p>

          <a
            href="/varsity"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontSize: "1.15rem",
              fontWeight: "500",
              display: "inline-block",
              marginBottom: "42px",
            }}
          >
            Varsity <i className="fa-solid fa-arrow-right-long"></i>
          </a>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "1.9",
              color: "#666",
              marginBottom: "22px",
              maxWidth: "95%",
            }}
          >
            TradingQ&amp;A, the most active trading and investment community in
            India for all your market related queries.
          </p>

          <a
            href="/tradingqna"
            style={{
              textDecoration: "none",
              color: "#387ed1",
              fontSize: "1.15rem",
              fontWeight: "500",
              display: "inline-block",
            }}
          >
            TradingQ&amp;A <i className="fa-solid fa-arrow-right-long"></i>
          </a>
        </div>
      </div>
    </div>
  );
}

export default Education;
