import React, { useState, useContext } from "react";
import { GeneralContext } from "./GeneralContext";
// 🎯 1. IMPORT YOUR DOUGHNUT CHART COMPONENT HERE
import { DoughnutChart } from "./DoughnoutChart";

// 🚀 Live Render Backend URL reference for network queries
const BACKEND_URL = "https://kite-backend-lmin.onrender.com";

const WatchList = () => {
  const [searchQuery, setSearchQuery] = useState("");

  // Destructure the state triggers from your global layout context handler
  const { openBuyWindow, openSellWindow } = useContext(GeneralContext);

  // Complete mock array matching active instruments available in your dashboard state
  const instrumentUniverse = [
    { name: "INFY", price: "1555.45", percent: "-1.60%", isDown: true },
    { name: "ONGC", price: "116.80", percent: "-0.09%", isDown: true },
    { name: "TCS", price: "3194.80", percent: "-0.25%", isDown: true },
    { name: "KPITTECH", price: "266.45", percent: "3.54%", isDown: false },
    { name: "QUICKHEAL", price: "308.55", percent: "-0.15%", isDown: true },
    { name: "WIPRO", price: "577.75", percent: "0.32%", isDown: false },
    { name: "M&M", price: "779.80", percent: "-0.01%", isDown: true },
    { name: "RELIANCE", price: "2112.40", percent: "1.44%", isDown: false },
    { name: "HUL", price: "512.40", percent: "1.04%", isDown: false },
    { name: "SBIN", price: "612.30", percent: "0.85%", isDown: false },
    { name: "HDFCBANK", price: "1522.35", percent: "-0.40%", isDown: true },
    { name: "BHARTIARTL", price: "541.15", percent: "1.20%", isDown: false },
    { name: "ITC", price: "207.90", percent: "-0.10%", isDown: true },
  ];

  // Filter instruments matching the query string input text variations
  const filteredInstruments = instrumentUniverse.filter((stock) =>
    stock.name.toLowerCase().includes(searchQuery.toLowerCase()),
  );

  // 🎯 2. TRANSFORM FILTERED WATCHLIST ARRAY DATA INTO CHARTJS DOUGHNUT FORMAT
  // This updates dynamically in real-time as the user types into the search field!
  const doughnutData = {
    labels: filteredInstruments.map((stock) => stock.name),
    datasets: [
      {
        data: filteredInstruments.map((stock) => parseFloat(stock.price)),
        // Generate soft colors: an elegant shade of green if up, clean gray/red if down
        backgroundColor: filteredInstruments.map((stock) =>
          stock.isDown ? "rgba(223, 74, 74, 0.75)" : "rgba(76, 175, 80, 0.75)",
        ),
        hoverBackgroundColor: filteredInstruments.map((stock) =>
          stock.isDown ? "rgba(223, 74, 74, 0.95)" : "rgba(76, 175, 80, 0.95)",
        ),
      },
    ],
  };

  return (
    <div className="watchlist-container">
      {/* Search Bar Inputs Box Header */}
      <div className="search-bar-wrapper">
        <input
          type="text"
          placeholder="Search eg: infy, bse, nifty fut weekly, gold mcx"
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          className="watchlist-search-input"
        />
        <span className="search-count-badge">
          {filteredInstruments.length} / {instrumentUniverse.length}
        </span>
      </div>

      {/* Interactive List Renderer View Panel */}
      <div className="watchlist-stocks-list">
        {filteredInstruments.length > 0 ? (
          filteredInstruments.map((stock, index) => (
            <div className="watchlist-stock-row" key={index}>
              <div className="stock-identity-info">
                <span
                  className={`stock-ticker-name ${stock.isDown ? "text-red" : "text-green"}`}
                >
                  {stock.name}
                </span>
              </div>

              <div className="stock-metrics-display">
                <span className="stock-percent-delta">{stock.percent}</span>
                <span
                  className={`stock-live-price ${stock.isDown ? "text-red" : "text-green"}`}
                >
                  {stock.price}
                </span>
              </div>

              {/* HOVER ACTION CONTROLS PANEL */}
              <div className="watchlist-action-overlay-buttons">
                <button
                  className="action-btn-buy"
                  onClick={() => openBuyWindow?.(stock.name)}
                >
                  B
                </button>
                <button
                  className="action-btn-sell"
                  onClick={() => openSellWindow?.(stock.name)}
                >
                  S
                </button>
              </div>
            </div>
          ))
        ) : (
          <div className="no-search-results">
            No stocks match your query parameter
          </div>
        )}
      </div>

      {/* 🎯 3. MOUNT THE STYLED DOUGHNUT COMPONENT AT THE BOTTOM OF THE WATCHLIST */}
      {filteredInstruments.length > 0 && (
        <div
          className="watchlist-chart-section"
          style={{
            marginTop: "25px",
            padding: "15px 10px",
            backgroundColor: "#ffffff",
            borderTop: "1px solid #eeeeee",
          }}
        >
          <p
            style={{
              margin: "0 0 15px 10px",
              fontSize: "13px",
              fontWeight: "500",
              color: "#444444",
            }}
          >
            Watchlist Allocation Price-Weight
          </p>
          <DoughnutChart data={doughnutData} />
        </div>
      )}
    </div>
  );
};

export default WatchList;
