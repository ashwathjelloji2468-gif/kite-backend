// src/data/data.js

// Watchlist data matching your layout view names and percentages
export const watchlist = [
  {
    name: "INFY",
    price: 1555.45,
    percent: "-1.60%",
    isDown: true,
  },
  {
    name: "ONGC",
    price: 116.80,
    percent: "-0.09%",
    isDown: true,
  },
  {
    name: "TCS",
    price: 3194.80,
    percent: "-0.25%",
    isDown: true,
  },
  {
    name: "KPITTECH",
    price: 266.45,
    percent: "3.54%",
    isDown: false,
  },
  {
    name: "QUICKHEAL",
    price: 308.55,
    percent: "-0.15%",
    isDown: true,
  },
  {
    name: "WIPRO",
    price: 577.75,
    percent: "0.32%",
    isDown: false,
  },
  {
    name: "M&M",
    price: 779.80,
    percent: "-0.01%",
    isDown: true,
  },
  {
    name: "RELIANCE",
    price: 2112.40,
    percent: "1.44%",
    isDown: false,
  },
  {
    name: "HUL",
    price: 512.40,
    percent: "1.04%",
    isDown: false,
  }
];

export const holdings = [
  {
    name: "BHARTIARTL",
    qty: 2,
    avg: 538.05,
    price: 541.15,
    netChg: "+0.58%",
    dayChg: "+2.99%",
    isLoss: false,
  },
  {
    name: "HDFCBANK",
    qty: 2,
    avg: 1383.40,
    price: 1522.35,
    netChg: "+10.04%",
    dayChg: "+0.11%",
    isLoss: false,
  },
  {
    name: "HINDUNILVR",
    qty: 1,
    avg: 2335.85,
    price: 2417.40,
    netChg: "+3.49%",
    dayChg: "+1.85%",
    isLoss: false,
  },
  {
    name: "INFY",
    qty: 1,
    avg: 1350.50,
    price: 1555.45,
    netChg: "+15.18%",
    dayChg: "-1.60%",
    isLoss: true,
  },
  {
    name: "ITC",
    qty: 5,
    avg: 202.00,
    price: 207.90,
    netChg: "+2.92%",
    dayChg: "+0.80%",
    isLoss: false,
  },
  {
    name: "KPITTECH",
    qty: 5,
    avg: 250.30,
    price: 266.45,
    netChg: "+6.45%",
    dayChg: "+3.54%",
    isLoss: false,
  }
];

export const positions = [
  {
    product: "MIS",
    name: "INFY",
    qty: 1,
    avg: 1350.50,
    price: 1555.45,
    day: "-1.60%",
    isLoss: true,
  },
  {
    product: "CNC",
    name: "RELIANCE",
    qty: 2,
    avg: 2112.40,
    price: 2112.40,
    day: "+1.44%",
    isLoss: false,
  }
];

export const orders = [
  {
    name: "RELIANCE",
    qty: 2,
    price: 0.30,
    status: "EXECUTED",
    mode: "BUY",
  }
];