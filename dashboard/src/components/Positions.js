import React, { useState, useEffect } from "react";
import axios from "axios"; // 1. Imported Axios for network handshake calls

const Positions = () => {
  // 2. Initialize state for positions data and loading states
  const [positions, setPositions] = useState([]);
  const [loading, setLoading] = useState(true);

  // 3. Fetch data from backend on component mount using Axios
  useEffect(() => {
    axios
      .get("http://localhost:3002/allPositions")
      .then((response) => {
        setPositions(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Error fetching positions with axios:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="content">Loading positions data...</div>;
  }

  const safePositions = Array.isArray(positions) ? positions : [];

  return (
    <div className="positions-container">
      {/* Section Header with dynamic count tracking */}
      <div className="positions-header">
        <h6>Positions ({safePositions.length})</h6>
        <hr className="divider" />
      </div>

      <div className="table-container">
        <table className="positions-table">
          <thead>
            <tr>
              <th>Product</th>
              <th>Instrument</th>
              <th>Qty.</th>
              <th>Avg. cost</th>
              <th>LTP</th>
              <th>P&L</th>
              <th>Day chg.</th>
            </tr>
          </thead>
          <tbody>
            {safePositions.map((stock, index) => {
              // Defensive parsing to ensure math structures don't break
              const qty = Number(stock?.qty) || 0;
              const avg = Number(stock?.avg) || 0;
              const price = Number(stock?.price) || 0;
              const productName = stock?.product || "MIS";
              const instrumentName = stock?.name || "Unknown";

              // Normalizing variable keys coming from database schema
              const dayChange = stock?.dayChg || stock?.day || "0.00%";

              // Metric equations mapping
              const curValue = price * qty;
              const totalCost = avg * qty;
              const pnl = curValue - totalCost;

              const isProfit = pnl >= 0;
              // Check if database specifically passed false for loss, or if math says profit
              const isDayProfit =
                stock?.isLoss === false || dayChange.startsWith("+");

              return (
                <tr key={stock._id || index}>
                  <td>
                    <span className="product-type">{productName}</span>
                  </td>
                  <td className="instrument-name">{instrumentName}</td>
                  <td>{qty}</td>
                  <td>{avg.toFixed(2)}</td>
                  <td>{price.toFixed(2)}</td>
                  <td className={isProfit ? "profit-text" : "loss-text"}>
                    {pnl.toFixed(2)}
                  </td>
                  <td className={isDayProfit ? "profit-text" : "loss-text"}>
                    {dayChange}
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Positions;
