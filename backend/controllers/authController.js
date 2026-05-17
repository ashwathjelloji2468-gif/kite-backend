// controllers/authController.js
const User = require("../models/User");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const speakeasy = require("speakeasy");

// --- PHASE 1: LOGIN WITH USER ID & PASSWORD ---
exports.loginPasswordCheck = async (req, res) => {
  try {
    const { userId, password } = req.body;

    // Find user in database
    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(400).json({ message: "Invalid User ID or Password" });
    }

    // Compare passwords safely
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid User ID or Password" });
    }

    // Success! Do NOT send JWT token yet. Prompt for Phase 2 (TOTP)
    res.status(200).json({
      message: "Password accepted. 2FA verification required.",
      require2FA: true,
      tempUserId: user.userId, // Send back user ID to keep track of the session on frontend
    });
  } catch (error) {
    res.status(500).json({ message: "Server error", error: error.message });
  }
};

// --- PHASE 2: VERIFY 6-DIGIT TOTP SECURITY PIN ---
exports.verify2FA = async (req, res) => {
  try {
    const { userId, totpCode } = req.body;

    const user = await User.findOne({ userId });
    if (!user) {
      return res.status(404).json({ message: "User not found" });
    }

    // Verify the code against the secret key in the database
    const verified = speakeasy.totp.verify({
      secret: user.twoFactorSecret,
      encoding: "base32",
      token: totpCode,
      window: 1, // Allows a small time variance window of 30 seconds for network delays
    });

    if (!verified) {
      return res
        .status(400)
        .json({ message: "Invalid 2FA Authenticator Code" });
    }

    // Everything is clean! Generate final JWT Token for application state login
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
};
