import React from "react";

function Hero() {
  return (
    <div
      className="container"
      style={{ paddingTop: "100px", paddingBottom: "70px" }}
    >
      <div className="row justify-content-center text-center">
        <div className="col-lg-8 col-md-10">
          <h1
            style={{
              fontSize: "2.75rem",
              lineHeight: "1.45",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "80px",
            }}
          >
            We pioneered the discount broking model in India.
            <br />
            Now, we are breaking ground with our technology.
          </h1>
        </div>
      </div>

      <hr style={{ borderColor: "#eee", margin: "0" }} />

      <div className="row" style={{ paddingTop: "70px" }}>
        <div className="col-lg-6 col-md-6 px-4">
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
              marginBottom: "32px",
            }}
          >
            We kick-started operations on the 15th of August, 2010 with the goal
            of breaking all barriers that traders and investors face in India in
            terms of cost, support, and technology. We named the company
            Zerodha, a combination of Zero and "Rodha", the Sanskrit word for
            barrier.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
              marginBottom: "32px",
            }}
          >
            Today, our disruptive pricing models and in-house technology have
            made us the biggest stock broker in India.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
            }}
          >
            Over 1.6+ crore clients place billions of orders every year through
            our powerful ecosystem of investment platforms, contributing over
            15% of all Indian retail trading volumes.
          </p>
        </div>

        <div className="col-lg-6 col-md-6 px-4">
          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
              marginBottom: "32px",
            }}
          >
            In addition, we run a number of popular open online educational and
            community initiatives to empower retail traders and investors.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
              marginBottom: "32px",
            }}
          >
            <span style={{ color: "#387ed1", fontWeight: "500" }}>
              Rainmatter
            </span>
            , our fintech fund and incubator, has invested in several fintech
            startups with the goal of growing the Indian capital markets.
          </p>

          <p
            style={{
              fontSize: "1.2rem",
              lineHeight: "2",
              color: "#424242",
            }}
          >
            And yet, we are always up to something new every day. Catch up on
            the latest updates on our{" "}
            <span style={{ color: "#387ed1" }}>blog</span> or see what the media
            is <span style={{ color: "#387ed1" }}>saying about us</span> or
            learn more about our{" "}
            <span style={{ color: "#387ed1" }}>
              business and product philosophies
            </span>
            .
          </p>
        </div>
      </div>
    </div>
  );
}

export default Hero;
