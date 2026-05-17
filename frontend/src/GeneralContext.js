import React, { useState } from "react";
import axios from "axios"; // 1. Imported Axios to submit orders to your database

export const GeneralContext = React.createContext();

export const GeneralContextProvider = (props) => {
  const [isBuyWindowOpen, setIsBuyWindowOpen] = useState(false);
  const [selectedStock, setSelectedStock] = useState("");
  const [windowMode, setWindowMode] = useState("BUY"); // Tracks active workflow: "BUY" or "SELL"
  const [allOrders, setAllOrders] = useState([]); // Stores local state backup of order history

  // Triggers the modal popup configured specifically for Buy operations
  const handleOpenBuyWindow = (stockName) => {
    setIsBuyWindowOpen(true);
    setSelectedStock(stockName);
    setWindowMode("BUY");
  };

  // Triggers the identical modal popup configured specifically for Sell operations
  const handleOpenSellWindow = (stockName) => {
    setIsBuyWindowOpen(true);
    setSelectedStock(stockName);
    setWindowMode("SELL");
  };

  // Resets layout visibility states cleanly on modal exit commands
  const handleCloseBuyWindow = () => {
    setIsBuyWindowOpen(false);
    setSelectedStock("");
  };

  // 2. UPDATED: Sends trade execution details directly to your Node/Express server via Axios
  const handleAddOrder = (newOrder) => {
    // Structure the data to match your Mongoose OrdersSchema format precisely
    const orderPayload = {
      name: newOrder.name,
      qty: newOrder.qty,
      price: newOrder.price,
      mode: newOrder.mode, // Handled dynamically ("BUY" or "SELL")
    };

    // Make an API POST call to your database layer endpoint
    axios
      .post("http://localhost:3002/addOrders", [orderPayload]) // Sent as an array since backend uses insertMany
      .then((res) => {
        console.log("Order saved to database successfully!");

        // Optimistically update React state history so the frontend UI changes instantly
        setAllOrders([orderPayload, ...allOrders]);
      })
      .catch((err) => {
        console.error(
          "Critical: Failed to save the transaction to MongoDB:",
          err,
        );
      });
  };

  return (
    <GeneralContext.Provider
      value={{
        isBuyWindowOpen,
        selectedStock,
        windowMode, // Expose the active mode (BUY/SELL) to the dashboard and modal
        allOrders,
        handleOpenBuyWindow,
        handleOpenSellWindow, // Expose the new sell trigger to the watchlist
        handleCloseBuyWindow,
        handleAddOrder,
      }}
    >
      {props.children}
    </GeneralContext.Provider>
  );
};
