import React, { useState, useEffect } from "react";
import axios from "axios"; // 1. Imported Axios for database handshake requests

const Orders = () => {
  // 2. Initialize state for holding orders data array and loading lifecycle flags
  const [orders, setOrders] = useState([]);
  const [loading, setLoading] = useState(true);
  const BACKEND_URL = "https://kite-backend-lmin.onrender.com";

  // 3. Automatically fetch transaction entries when page mounts
  useEffect(() => {
    axios
      .get(`${BACKEND_URL}/allOrders`)
      .then((response) => {
        // Express passes parsed documents inside response.data
        setOrders(response.data);
        setLoading(false);
      })
      .catch((err) => {
        console.error("Critical error fetching orders archive layout:", err);
        setLoading(false);
      });
  }, []);

  if (loading) {
    return <div className="content">Loading historical orders log...</div>;
  }

  return (
    <div className="orders-container">
      {/* Dynamic Header pulling total orders count dynamically */}
      <div className="orders-header">
        <h6>Orders ({orders.length})</h6>
        <hr className="divider" />
      </div>

      {/* Conditional Rendering: Handle completely empty order logs cleanly */}
      {orders.length === 0 ? (
        <div className="no-orders-box">
          <p>You haven't placed any orders yet today.</p>
        </div>
      ) : (
        <div className="table-container">
          <table className="orders-table">
            <thead>
              <tr>
                <th>Instrument</th>
                <th>Qty.</th>
                <th>Price</th>
                <th>Type</th>
              </tr>
            </thead>
            <tbody>
              {orders.map((order, index) => {
                // Safeguard field property parsing setups
                const orderQty = order?.qty || 0;
                const orderPrice = order?.price || 0;
                const orderType = order?.mode || "BUY";

                // Color formatting flag setup: BUY gets profit green, SELL gets loss red
                const isBuyType = orderType === "BUY";

                return (
                  <tr key={order._id || index}>
                    <td className="instrument-name">{order.name}</td>
                    <td>{orderQty}</td>
                    <td>{Number(orderPrice).toFixed(2)}</td>
                    <td>
                      <span
                        className={
                          isBuyType ? "order-type-buy" : "order-type-sell"
                        }
                      >
                        {orderType}
                      </span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default Orders;
