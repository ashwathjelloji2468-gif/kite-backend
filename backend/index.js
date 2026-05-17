require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");

const PORT = process.env.PORT || 3002;
const uri = process.env.MONGO_URL;

const { HoldingsModel } = require("./model/HoldingsModel");
const { OrdersModel } = require("./model/OrdersModel");
const { PositionsModel } = require("./model/PositionsModel");

const app = express();

app.use(
  cors({
    origin: [
      "https://kite-backend-azure.vercel.app",
      "https://kite-backend-t5ba.vercel.app",
      "http://localhost:3000",
    ],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }),
);
app.use(express.json());

// ==========================================================================
// 🔐 AUTHENTICATION DATABASE SCHEMA & MODELS
// ==========================================================================
const UserSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
    unique: true,
    uppercase: true,
    trim: true,
  },
  username: { type: String, required: true },
  password: { type: String, required: true },
  twoFactorSecret: { type: String, default: "" },
  is2FAEnabled: { type: Boolean, default: false },
});

// Avoid overwriting model if it compiles multiple times during reloads
const UserModel = mongoose.models.User || mongoose.model("User", UserSchema);

// ==========================================================================
// 🛠️ AUTHENTICATION ENDPOINTS (Zerodha 2-Phase Login Setup)
// ==========================================================================

// Phase 1: User ID & Password Verification
app.post("/api/auth/login-password", async (req, res) => {
  try {
    const { userId, password } = req.body;

    const user = await UserModel.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: "Invalid User ID or Password" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid User ID or Password" });
    }

    // Passwords match! Prompt frontend to request Phase 2 (TOTP)
    res.status(200).json({
      message: "Password verified. 2FA pin verification required.",
      require2FA: true,
      tempUserId: user.userId,
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// Phase 2: Verify 6-Digit Time-based OTP (Google Authenticator App Pin)
app.post("/api/auth/verify-2fa", async (req, res) => {
  try {
    const { userId, totpCode } = req.body;

    const user = await UserModel.findOne({ userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Validate the rotating token against the base32 key string
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: totpCode,
      window: 1, // Variance allowance buffer for server latency
    });

    if (!verified) {
      return res
        .status(400)
        .json({ message: "Invalid 2FA Authenticator Code" });
    }

    // Success! Generate token authorization header cookie payload
    const token = jwt.sign(
      { id: user._id, userId: user.userId },
      process.env.JWT_SECRET || "SUPERSECRETKEY123",
      { expiresIn: "1d" },
    );

    res.status(200).json({
      message: "Login Successful",
      token: token,
      user: { userId: user.userId, username: user.username },
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
});

// ==========================================================================
// 🚀 DUMMY TEST DATA GENERATOR (Use this once to make a login user!)
// ==========================================================================
app.get("/seedTestUser", async (req, res) => {
  try {
    // Check if test user exists
    const existingUser = await UserModel.findOne({ userId: "KITE123" });
    if (existingUser) {
      return res.send("Test user 'KITE123' already exists in database!");
    }

    // Encrypt password string securely
    const hashedPassword = await bcrypt.hash("password123", 10);

    // Generate a secure 2FA registration key
    const secret = speakeasy.generateSecret({ name: "Kite Clone (KITE123)" });

    const newUser = new UserModel({
      userId: "KITE123",
      username: "Jashwath",
      password: hashedPassword,
      twoFactorSecret: secret.base32, // Storing base32 secret
      is2FAEnabled: true,
    });

    await newUser.save();

    res.json({
      message: "User created successfully!",
      userId: "KITE123",
      password: "password123",
      instruction:
        "To generate 2FA pins, use the Secret Key below in your Google Authenticator app or copy the current OTP using an online TOTP tool.",
      secretKeyForAuthenticatorApp: secret.base32,
      authQrSetupUrl: secret.otpauth_url,
    });
  } catch (err) {
    res.status(500).send("User generation failed: " + err.message);
  }
});

// ==========================================================================
// 1. SEEDING ENDPOINTS (Used to populate/reset mock data)
// ==========================================================================

// Seed Holdings Data
app.get("/addHoldings", async (req, res) => {
  let tempHoldings = [
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
      avg: 1383.4,
      price: 1522.35,
      netChg: "+10.04%",
      dayChg: "+0.11%",
      isLoss: false,
    },
    {
      name: "HINDUNILVR",
      qty: 1,
      avg: 2335.85,
      price: 2417.4,
      netChg: "+3.49%",
      dayChg: "+1.85%",
      isLoss: false,
    },
    {
      name: "INFY",
      qty: 1,
      avg: 1350.5,
      price: 1555.45,
      netChg: "+15.18%",
      dayChg: "-1.60%",
      isLoss: true,
    },
    {
      name: "ITC",
      qty: 5,
      avg: 202.0,
      price: 207.9,
      netChg: "+2.92%",
      dayChg: "+0.80%",
      isLoss: false,
    },
    {
      name: "KPITTECH",
      qty: 5,
      avg: 250.3,
      price: 266.45,
      netChg: "+6.45%",
      dayChg: "+3.54%",
      isLoss: false,
    },
  ];
  try {
    await HoldingsModel.deleteMany({});
    await HoldingsModel.insertMany(tempHoldings);
    res.send(
      "Holdings database reset and seeded successfully without duplicates!",
    );
  } catch (err) {
    res.status(500).send("Error seeding holdings data.");
  }
});

// Seed Orders Data
app.get("/addOrders", async (req, res) => {
  let tempOrders = [
    { name: "INFY", qty: 2, price: 1555.45, mode: "BUY" },
    { name: "HDFCBANK", qty: 1, price: 1522.35, mode: "SELL" },
    { name: "ITC", qty: 10, price: 207.9, mode: "BUY" },
    { name: "BHARTIARTL", qty: 5, price: 541.15, mode: "BUY" },
    { name: "HINDUNILVR", qty: 2, price: 2417.4, mode: "SELL" },
  ];
  try {
    await OrdersModel.deleteMany({});
    await OrdersModel.insertMany(tempOrders);
    res.send(
      "Orders database reset and seeded successfully without duplicates!",
    );
  } catch (err) {
    res.status(500).send("Error seeding orders data.");
  }
});

// Seed Positions Data
app.get("/addPositions", async (req, res) => {
  let tempPositions = [
    {
      name: "EICHERMOT",
      qty: 10,
      avg: 3150.0,
      price: 3210.5,
      netChg: "+1.92%",
      dayChg: "+0.45%",
      product: "MIS",
      isLoss: false,
    },
    {
      name: "TATASTEEL",
      qty: 100,
      avg: 112.4,
      price: 109.8,
      netChg: "-2.31%",
      dayChg: "-1.15%",
      product: "MIS",
      isLoss: true,
    },
    {
      name: "RELIANCE",
      qty: 5,
      avg: 2450.0,
      price: 2485.0,
      netChg: "+1.42%",
      dayChg: "+0.85%",
      product: "CO",
      isLoss: false,
    },
    {
      name: "SBIN",
      qty: 50,
      avg: 580.2,
      price: 574.6,
      netChg: "-0.96%",
      dayChg: "-0.30%",
      product: "MIS",
      isLoss: true,
    },
  ];
  try {
    await PositionsModel.deleteMany({});
    await PositionsModel.insertMany(tempPositions);
    res.send(
      "Positions database reset and seeded successfully without duplicates!",
    );
  } catch (err) {
    res.status(500).send("Error seeding positions data.");
  }
});

// ==========================================================================
// 2. FETCHING ENDPOINTS (Used by React Frontend to read current states)
// ==========================================================================
app.get("/allHoldings", async (req, res) => {
  try {
    let allHoldings = await HoldingsModel.find({});
    res.json(allHoldings);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch holdings" });
  }
});

app.get("/allPositions", async (req, res) => {
  try {
    let allPositions = await PositionsModel.find({});
    res.json(allPositions);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch positions" });
  }
});

app.get("/allOrders", async (req, res) => {
  try {
    let allOrders = await OrdersModel.find({});
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch orders" });
  }
});

// Add this route anywhere inside your backend index.js file
app.get("/getSecret", async (req, res) => {
  try {
    // Find our test user profile in MongoDB
    const user = await UserModel.findOne({ userId: "KITE123" });

    if (!user) {
      return res.status(404).json({
        error:
          "User account not found. Please visit /seedTestUser first to create it.",
      });
    }

    // Return the secret key directly as text
    res.json({
      userId: user.userId,
      username: user.username,
      secretKeyForAuthenticatorApp: user.twoFactorSecret,
    });
  } catch (err) {
    res
      .status(500)
      .json({ error: "Failed to read database profile: " + err.message });
  }
});

// ==========================================================================
// 3. DATABASE CONNECTION & INITIALIZATION
// ==========================================================================
mongoose
  .connect(uri)
  .then(() => {
    console.log("DB CONNECTED!!");
    app.listen(PORT, () => {
      console.log(`App Started on port ${PORT}!!`);
    });
  })
  .catch((err) => {
    console.error("Database connection initialization failed:", err);
  });
