// src/components/Settings.js
import React from "react";
import Switch from "@mui/material/Switch";

function Settings({ darkMode, setDarkMode }) {
  // Handler that triggers whenever the Dark Theme switch is flipped
  const handleThemeToggle = (event) => {
    setDarkMode(event.target.checked);
  };

  return (
    <div style={{ padding: "24px", fontFamily: "sans-serif" }}>
      <h2 style={{ margin: "0 0 4px 0", fontSize: "24px", fontWeight: "500" }}>
        Settings
      </h2>
      <p style={{ margin: "0 0 32px 0", color: "#666", fontSize: "14px" }}>
        Customize your workspace interface parameters, execution triggers, and
        security alerts.
      </p>

      <div style={{ display: "flex", gap: "24px" }}>
        {/* Card 1: Platform Settings */}
        <div
          style={{
            flex: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "24px",
            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          }}
        >
          <h3
            style={{ margin: "0 0 4px 0", fontSize: "18px", fontWeight: "500" }}
          >
            Platform Settings
          </h3>
          <p style={{ margin: "0 0 24px 0", color: "#888", fontSize: "12px" }}>
            Adjust standard visibility filters across your layout panels.
          </p>

          {/* Marketwatch Switch */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <div style={{ fontWeight: "500", fontSize: "14px" }}>
                Marketwatch Change %
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>
                Display absolute price variations against previous close
                numbers.
              </div>
            </div>
            <Switch defaultChecked />
          </div>

          {/* Dark Theme Switch (Fully Functional) */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "500", fontSize: "14px" }}>
                Dark Theme
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>
                Switch workspace layout color palettes over to low-light mode
                styles.
              </div>
            </div>
            <Switch
              checked={darkMode}
              onChange={handleThemeToggle}
              inputProps={{ "aria-label": "Dark theme toggle" }}
            />
          </div>
        </div>

        {/* Card 2: Trading & Orders */}
        <div
          style={{
            flex: 1,
            border: "1px solid #e0e0e0",
            borderRadius: "8px",
            padding: "24px",
            backgroundColor: darkMode ? "#1e1e1e" : "#ffffff",
          }}
        >
          <h3
            style={{ margin: "0 0 4px 0", fontSize: "18px", fontWeight: "500" }}
          >
            Trading & Orders
          </h3>
          <p style={{ margin: "0 0 24px 0", color: "#888", fontSize: "12px" }}>
            Configure instant confirmations and modal layout window anchor
            behaviors.
          </p>

          {/* Sticky Order Window Switch */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              marginBottom: "20px",
            }}
          >
            <div>
              <div style={{ fontWeight: "500", fontSize: "14px" }}>
                Sticky Order Window
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>
                Keep the buy/sell floating entry panel open post execution.
              </div>
            </div>
            <Switch />
          </div>

          {/* Order Confirmations Switch */}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
            }}
          >
            <div>
              <div style={{ fontWeight: "500", fontSize: "14px" }}>
                Order Confirmations
              </div>
              <div style={{ color: "#888", fontSize: "12px" }}>
                Show safety verification dialog warnings before placing market
                orders.
              </div>
            </div>
            <Switch defaultChecked />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Settings;
