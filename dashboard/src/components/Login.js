import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [step, setStep] = useState(1); // Step 1: Password, Step 2: TOTP
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");
  const [totp, setTotp] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const navigate = useNavigate();

  const BACKEND_URL = "https://kite-backend-lmin.onrender.com"; // 🚀 New live link!

  // --- PHASE 1 HANDLER: Verify Password with Backend ---
  const handlePasswordSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage(""); // Clear past errors

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/login-password`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, password }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid credentials");
      }

      // If credentials check out, advance to the 2FA view panel
      if (data.require2FA) {
        setStep(2);
      }
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  // --- PHASE 2 HANDLER: Verify Authenticator App TOTP with Backend ---
  const handleTotpSubmit = async (e) => {
    e.preventDefault();
    setErrorMessage("");

    try {
      const response = await fetch(`${BACKEND_URL}/api/auth/verify-2fa`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ userId, totpCode: totp }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.message || "Invalid security code");
      }

      // Success! Securely store session JWT token in browser state storage
      localStorage.setItem("token", data.token);
      localStorage.setItem("username", data.user.username);
      localStorage.setItem("userId", data.user.userId);

      // Redirect seamlessly to your main working dashboard
      navigate("/dashboard");
    } catch (err) {
      setErrorMessage(err.message);
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.loginCard}>
        {/* Kite Crimson Logo */}
        <div style={styles.logoContainer}>
          <img
            src="https://kite.zerodha.com/static/images/kite-logo.svg"
            alt="Kite Logo"
            style={styles.logo}
          />
        </div>

        {/* Dynamic Warning Message Alert Badge */}
        {errorMessage && <div style={styles.errorBadge}>{errorMessage}</div>}

        {step === 1 ? (
          <form onSubmit={handlePasswordSubmit}>
            <h2 style={styles.heading}>Login to Kite</h2>
            <input
              type="text"
              placeholder="User ID"
              value={userId}
              onChange={(e) => setUserId(e.target.value.toUpperCase())}
              style={styles.input}
              required
            />
            <input
              type="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={styles.input}
              required
            />
            <button type="submit" style={styles.button}>
              Login
            </button>
            <div style={styles.linksContainer}>
              <a href="#forgot" style={styles.link}>
                Forgot user ID or password?
              </a>
            </div>
          </form>
        ) : (
          <form onSubmit={handleTotpSubmit}>
            <h2 style={styles.heading}>Two-factor authentication</h2>
            <p style={styles.subheading}>
              Enter the 6-digit TOTP from your authenticator app
            </p>
            <input
              type="text"
              placeholder="6-Digit TOTP"
              maxLength="6"
              value={totp}
              onChange={(e) => setTotp(e.target.value)}
              style={styles.inputCentered}
              required
            />
            <button type="submit" style={styles.button}>
              Continue
            </button>
            <div style={styles.linksContainer}>
              <span
                onClick={() => {
                  setStep(1);
                  setErrorMessage("");
                }}
                style={styles.link}
              >
                Back to Login
              </span>
            </div>
          </form>
        )}
      </div>
    </div>
  );
};

// Zerodha Aesthetic Styling Objects
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    backgroundColor: "#fbfbfb",
    fontFamily: "sans-serif",
  },
  loginCard: {
    width: "350px",
    padding: "40px",
    backgroundColor: "#ffffff",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    textAlign: "center",
    boxShadow: "0 2px 4px rgba(0,0,0,0.05)",
  },
  logoContainer: {
    marginBottom: "30px",
  },
  logo: {
    height: "45px",
  },
  heading: {
    fontSize: "22px",
    fontWeight: "400",
    color: "#444444",
    marginBottom: "24px",
  },
  subheading: {
    fontSize: "13px",
    color: "#999999",
    marginBottom: "20px",
  },
  errorBadge: {
    backgroundColor: "#fde8e8",
    color: "#e53e3e",
    fontSize: "13px",
    padding: "10px",
    borderRadius: "4px",
    marginBottom: "15px",
    border: "1px solid #f8b4b4",
    textAlign: "left",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "14px",
    boxSizing: "border-box",
    outline: "none",
  },
  inputCentered: {
    width: "100%",
    padding: "12px",
    margin: "10px 0",
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    fontSize: "18px",
    letterSpacing: "4px",
    textAlign: "center",
    boxSizing: "border-box",
  },
  button: {
    width: "100%",
    padding: "12px",
    backgroundColor: "#ff5722",
    color: "#ffffff",
    border: "none",
    borderRadius: "4px",
    fontSize: "15px",
    fontWeight: "500",
    cursor: "pointer",
    marginTop: "15px",
  },
  linksContainer: {
    marginTop: "20px",
    fontSize: "12px",
  },
  link: {
    color: "#387ed1",
    textDecoration: "none",
    cursor: "pointer",
  },
};

export default Login;
