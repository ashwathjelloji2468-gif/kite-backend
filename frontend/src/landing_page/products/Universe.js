import React from "react";

function Universe() {
  const products = [
    {
      logo: "/media/zerodhaFundhouse.png",
      description:
        "Our asset management venture that is creating simple and transparent index funds to help you save for your goals.",
    },
    {
      logo: "/media/sensibullLogo.svg",
      description:
        "Options trading platform that lets you create strategies, analyze positions, and examine data points like open interest, FII/DII, and more.",
    },
    {
      logo: "/media/partnerlogo.svg",
      description:
        "Investment research platform that offers detailed insights on stocks, sectors, supply chains, and more.",
    },
    {
      logo: "/media/streakLogo.png",
      description:
        "Systematic trading platform that allows you to create and backtest strategies without coding.",
    },
    {
      logo: "/media/smallcaseLogo.png",
      description:
        "Thematic investing platform that helps you invest in diversified baskets of stocks or ETFs.",
    },
    {
      logo: "/media/dittoLogo.png",
      description:
        "Personalized advice on life and health insurance. No spam and no mis-selling.",
    },
  ];

  return (
    <div
      className="container text-center"
      style={{ paddingTop: "80px", paddingBottom: "100px" }}
    >
      <h2
        style={{
          fontSize: "2.8rem",
          color: "#424242",
          fontWeight: "500",
          marginBottom: "20px",
        }}
      >
        The Zerodha Universe
      </h2>

      <p
        style={{
          fontSize: "1.3rem",
          color: "#666",
          marginBottom: "40px",
        }}
      >
        Extend your trading and investment experience even further with our
        partner platforms
      </p>

      <div className="row">
        {products.map((item, index) => (
          <div className="col-lg-4 col-md-6 mb-5" key={index}>
            <img
              src={item.logo}
              alt="partner logo"
              style={{
                height: "60px",
                margin: "0 auto 25px",
                objectFit: "contain",
              }}
            />
            <p
              style={{
                fontSize: "1.05rem",
                color: "#666",
                lineHeight: "1.8",
                maxWidth: "300px",
                margin: "0 auto",
              }}
            >
              {item.description}
            </p>
          </div>
        ))}
      </div>

      <button
        className="btn btn-primary"
        style={{
          marginTop: "30px",
          backgroundColor: "#387ed1",
          border: "none",
          fontSize: "1.3rem",
          padding: "12px 32px",
          borderRadius: "4px",
        }}
      >
        Sign up for free
      </button>
    </div>
  );
}

export default Universe;
