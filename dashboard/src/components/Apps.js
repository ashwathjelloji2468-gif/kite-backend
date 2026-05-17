import React from "react";

const Apps = () => {
  // Mock data representing Zerodha's authentic ecosystem integration products
  const ecosystemApps = [
    {
      name: "Smallcase",
      tagline: "Thematic investment platforms",
      description:
        "Invest in diversified, thematic portfolios of stocks or ETFs managed by top SEBI-registered professionals.",
      logo: "https://smallcase.com/static/images/logo.svg",
      link: "https://www.smallcase.com",
    },
    {
      name: "Sensibull",
      tagline: "Options trading platform",
      description:
        "Analyze, trade, and build sophisticated options strategies with real-time tracking, open interest charts, and risk scanners.",
      logo: "https://sensibull.com/images/sensibull-logo.svg",
      link: "https://sensibull.com",
    },
    {
      name: "Streak",
      tagline: "Algorithmic & systematic trading",
      description:
        "Create, backtest, and deploy trading algorithms and indicators instantly without writing a single line of complex code.",
      logo: "https://www.streak.tech/images/streak_logo.svg",
      link: "https://www.streak.tech",
    },
    {
      name: "GoldenPi",
      tagline: "Bonds & fixed income platform",
      description:
        "Discover and invest securely in corporate bonds, debentures, and high-yield fixed-income assets directly from your account portfolio.",
      logo: "https://goldenpi.com/assets/images/logo.svg",
      link: "https://goldenpi.com",
    },
  ];

  return (
    <div className="apps-page-container">
      {/* Platform Page Header */}
      <div className="apps-header">
        <h6>Ecosystem Apps</h6>
        <p className="apps-subtitle">
          Discover seamless extension tools integrated directly with your
          trading account credentials.
        </p>
        <hr className="divider" />
      </div>

      {/* Grid Layout Cards mapping arrays dynamically */}
      <div className="apps-grid-layout">
        {ecosystemApps.map((app, index) => (
          <div className="app-card" key={index}>
            <div className="app-card-header">
              <div className="app-title-block">
                <h5>{app.name}</h5>
                <span>{app.tagline}</span>
              </div>
            </div>
            <p className="app-description">{app.description}</p>
            <a
              href={app.link}
              target="_blank"
              rel="noopener noreferrer"
              className="app-launch-btn"
            >
              Launch App
            </a>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Apps;
