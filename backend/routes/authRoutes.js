// routes/authRoutes.js
const express = require("express");
const router = express.Router();
const {
  loginPasswordCheck,
  verify2FA,
} = require("../controllers/authController");

// Route mapping for login flows
router.post("/login-password", loginPasswordCheck);
router.post("/verify-2fa", verify2FA);

module.exports = router;
