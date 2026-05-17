import React, { useState, useEffect } from "react";
import axios from "axios";
// 🎯 1. IMPORT YOUR VERTICAL GRAPH COMPONENT HERE
import { VerticalGraph } from "./VerticalGraph";
const Holdings = () => {
  // Initialize state for holdings data
  const [holdings, setHoldings] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch data using Axios inside your useEffect hook
  useEffect(() => {
    axios
      .get("http://localhost:3002/allHoldings")
      .then((response) => {
        setHoldings(response.data);
        loading === true && setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching holdings with axios:", err);
        setLoading(false);
      });
  }, [loading]);

  // Dynamic Aggregations: Calculate bottom summary row values dynamically
  let totalInvestment = 0;
  let currentTotalValue = 0;

  holdings.forEach((stock) => {
    totalInvestment += stock.avg * stock.qty;
    currentTotalValue += stock.price * stock.qty;
  });

  const totalPnL = currentTotalValue - totalInvestment;
  const totalPnLPercent =
    totalInvestment > 0 ? (totalPnL / totalInvestment) * 100 : 0;

  // Helper to break down number decimals cleanly for the typography styling layout
  const splitNumber = (num) => {
    const parts = num.toFixed(2).split(".");
    return { integer: parts[0], decimal: parts[1] };
  };

  const investmentSplit = splitNumber(totalInvestment);
  const currentValSplit = splitNumber(currentTotalValue);

  // 🎯 2. TRANSFORM MONGODB HOLDINGS DATA INTO CHARTJS FORMAT
  const graphData = {
    labels: holdings.map((stock) => stock.name), // e.g., ["BHARTIARTL", "HDFCBANK", ...]
    datasets: [
      {
        // The properties below will be cleanly styled by your custom VerticalGraph component options
        data: holdings.map((stock) => stock.price * stock.qty), // Maps current market value totals
      },
    ],
  };

  if (loading) {
    return <div className="content">Loading holdings data...</div>;
  }

  return (
    <div className="holdings-container">
      {/* Dynamic Section Header */}
      <div className="holdings-header">
        <h6>Holdings ({holdings.length})</h6>
        <hr className="divider" />
      </div>

      <div className="table-container">
        <table className="holdings-table">
          <thead>
            <tr>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>Cur. val</th>
              <th>P&L</th>
              <th>Net chg.</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {holdings.map((stock, index) => {
              const currValue = stock.price * stock.qty;
              const totalCost = stock.avg * stock.qty;
              const pnl = currValue - totalCost;

              const netChangeStr = stock.netChg || stock.net || "0.00%";
              const dayChangeStr = stock.dayChg || stock.day || "0.00%";

              const isProfit = netChangeStr.startsWith("+");
              const isDayProfit = dayChangeStr.startsWith("+");

              return (
                <tr key={stock._id || index}>
                  <td className="instrument-name">{stock.name}</td>
                  <td>{stock.qty}</td>
                  <td>{stock.avg.toFixed(2)}</td>
                  <td>{stock.price.toFixed(2)}</td>
                  <td>{currValue.toFixed(2)}</td>
                  <td className={pnl >= 0 ? "profit-text" : "loss-text"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={isProfit ? "profit-text" : "loss-text"}>
                    {netChangeStr}
                  </td>
                  <td className={isDayProfit ? "profit-text" : "loss-text"}>
                    {dayChangeStr}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>

      {/* Bottom Aggregations Row Layout */}
      <div className="holdings-summary-row">
        <div className="summary-col">
          <h5>
            {parseInt(investmentSplit.integer).toLocaleString()}.
            <span>{investmentSplit.decimal}</span>
          </h5>
          <p>Total investment</p>
        </div>
        <div className="summary-col">
          <h5>
            {parseInt(currentValSplit.integer).toLocaleString()}.
            <span>{currentValSplit.decimal}</span>
          </h5>
          <p>Current value</p>
        </div>
        <div className="summary-col">
          <h5 className={totalPnL >= 0 ? "profit-text" : "loss-text"}>
            {totalPnL >= 0 ? "" : "-"}
            {Math.abs(totalPnL).toFixed(2)} ({totalPnL >= 0 ? "+" : ""}
            {totalPnLPercent.toFixed(2)}%)
          </h5>
          <p>P&L</p>
        </div>
      </div>

      {/* 🎯 3. MOUNT THE ZERODHA STYLE GRAPH COMPONENT RIGHT BELOW THE SUMMARY */}
      <div
        className="holdings-graph-section"
        style={{
          marginTop: "40px",
          backgroundColor: "#ffffff",
          border: "1px solid #eeeeee",
          borderRadius: "4px",
        }}
      >
        <VerticalGraph data={graphData} />
      </div>
    </div>
  );
};

export default Holdings;
