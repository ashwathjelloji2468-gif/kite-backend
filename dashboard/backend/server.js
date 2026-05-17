const express = require("express");
const cors = require("cors");

const app = express();
app.use(cors());

// Mock data that matches your Holdings.js expectations
app.get("/allHoldings", (req, res) => {
  res.json([
    {
      name: "TCS",
      qty: 10,
      avg: 3250.5,
      price: 3400.0,
      net: "+4.60%",
      day: "+1.20%",
      isLoss: false,
    },
    {
      name: "INFY",
      qty: 15,
      avg: 1600.0,
      price: 1550.0,
      net: "-3.12%",
      day: "-0.50%",
      isLoss: true,
    },
  ]);
});

app.listen(3002, () => {
  console.log("Backend running on http://localhost:3002");
});
