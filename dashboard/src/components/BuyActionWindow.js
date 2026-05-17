import React, { useState, useContext } from "react";
import { GeneralContext } from "./GeneralContext";

const BuyActionWindow = () => {
  // 1. UPDATED: Destructured windowMode directly from GeneralContext instead of props
  const { selectedStock, windowMode, handleCloseBuyWindow, handleAddOrder } =
    useContext(GeneralContext);

  const [qty, setQty] = useState(1);
  const [price, setPrice] = useState(0);

  const handleActionClick = () => {
    handleAddOrder({
      name: selectedStock,
      qty: parseInt(qty),
      price: parseFloat(price) || 0,
      mode: windowMode, // Safely logs "BUY" or "SELL" directly from context state
    });
    handleCloseBuyWindow();
  };

  // 2. FIXED: Dynamically matches color buttons directly against the context's state windowMode
  const actionButtonClass =
    windowMode === "BUY" ? "btn btn-blue" : "btn btn-red";

  return (
    <div className="buy-window-popup" id="buy-window">
      <div className="regular-order">
        <div className="inputs">
          <fieldset>
            <legend>Qty.</legend>
            <input
              type="number"
              onChange={(e) => setQty(e.target.value)}
              value={qty}
            />
          </fieldset>
          <fieldset>
            <legend>Price</legend>
            <input
              type="number"
              step="0.05"
              onChange={(e) => setPrice(e.target.value)}
              value={price}
            />
          </fieldset>
        </div>
      </div>

      <div className="buttons">
        {/* Renders text dynamically and applies blue or red styling instantly */}
        <button className={actionButtonClass} onClick={handleActionClick}>
          {windowMode}
        </button>
        <button className="btn btn-grey" onClick={handleCloseBuyWindow}>
          Cancel
        </button>
      </div>
    </div>
  );
};

export default BuyActionWindow;
