import React, { useState } from "react";

const Funds = () => {
  // State tracking for transaction modals
  const [isAddOpen, setIsAddOpen] = useState(false);
  const [isWithdrawOpen, setIsWithdrawOpen] = useState(false);
  const [transactionAmount, setTransactionAmount] = useState("");

  // Mock initial balance metrics matching your UI layout
  const [availableMargin, setAvailableMargin] = useState(4043.1);

  const handleAddFundsSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(transactionAmount);
    if (!amount || amount <= 0) return alert("Please enter a valid amount");

    // Add entry amount directly to available margin state
    setAvailableMargin((prev) => prev + amount);
    setTransactionAmount("");
    setIsAddOpen(false);
    alert(`Successfully deposited ₹${amount} via UPI!`);
  };

  const handleWithdrawSubmit = (e) => {
    e.preventDefault();
    const amount = parseFloat(transactionAmount);
    if (!amount || amount <= 0) return alert("Please enter a valid amount");
    if (amount > availableMargin)
      return alert("Insufficient available balance");

    // Deduct entry amount directly from available margin state
    setAvailableMargin((prev) => prev - amount);
    setTransactionAmount("");
    setIsWithdrawOpen(false);
    alert(`Withdrawal request for ₹${amount} submitted successfully!`);
  };

  return (
    <div className="funds-page-container">
      {/* Top action status strip layout */}
      <div className="funds-action-banner">
        <p className="instant-transfer-note">
          Instant, zero-cost fund transfers with UPI
        </p>
        <div className="funds-action-buttons">
          {/* 🎯 FIXED: Connected click listeners to activate modals */}
          <button className="btn-add-funds" onClick={() => setIsAddOpen(true)}>
            Add funds
          </button>
          <button
            className="btn-withdraw"
            onClick={() => setIsWithdrawOpen(true)}
          >
            Withdraw
          </button>
        </div>
      </div>

      <hr className="divider" />

      {/* Primary Balance Metrics Layout Display */}
      <div className="funds-grid-layout">
        <div className="funds-segment-column">
          <h5>Equity</h5>
          <div className="funds-table">
            <div className="funds-row major-row">
              <span className="funds-label">Available margin</span>
              <span className="funds-value highlight-blue">
                {availableMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="funds-row">
              <span className="funds-label">Used margin</span>
              <span className="funds-value">3,757.30</span>
            </div>
            <div className="funds-row">
              <span className="funds-label">Available cash</span>
              <span className="funds-value">
                {availableMargin.toLocaleString("en-IN", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                })}
              </span>
            </div>
            <div className="funds-row">
              <span className="funds-label">Opening Balance</span>
              <span className="funds-value">4,043.10</span>
            </div>
          </div>
        </div>

        <div className="funds-segment-column">
          <h5>Commodity</h5>
          <p className="no-account-notice">
            You don't have a commodity account
          </p>
          <span className="activate-link-btn">Activate account</span>
        </div>
      </div>

      {/* ==========================================
          🎯 FLOATING MODAL COMPONENT: ADD FUNDS
         ========================================== */}
      {isAddOpen && (
        <div className="funds-modal-overlay">
          <div className="funds-modal-box">
            <div className="modal-box-header">
              <h4>Add Funds</h4>
              <button
                className="modal-close-btn"
                onClick={() => {
                  setIsAddOpen(false);
                  setTransactionAmount("");
                }}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleAddFundsSubmit}>
              <div className="modal-form-group">
                <label>Amount (₹)</label>
                <input
                  type="number"
                  placeholder="E.g. 5000"
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  autoFocus
                  required
                />
              </div>
              <div className="modal-form-group">
                <label>Segment</label>
                <select disabled>
                  <option>Equity / Derivatives / Currency</option>
                </select>
              </div>
              <div className="modal-form-group">
                <label>Payment Method</label>
                <select>
                  <option>UPI (Instant - Zero Charges)</option>
                  <option>Netbanking</option>
                </select>
              </div>
              <div className="modal-actions-footer">
                <button
                  type="submit"
                  className="modal-btn-primary submit-deposit"
                >
                  Continue
                </button>
                <button
                  type="button"
                  className="modal-btn-link"
                  onClick={() => {
                    setIsAddOpen(false);
                    setTransactionAmount("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}

      {/* ==========================================
          🎯 FLOATING MODAL COMPONENT: WITHDRAW FUNDS
         ========================================== */}
      {isWithdrawOpen && (
        <div className="funds-modal-overlay">
          <div className="funds-modal-box">
            <div className="modal-box-header">
              <h4>Withdraw Funds</h4>
              <button
                className="modal-close-btn"
                onClick={() => {
                  setIsWithdrawOpen(false);
                  setTransactionAmount("");
                }}
              >
                &times;
              </button>
            </div>
            <form onSubmit={handleWithdrawSubmit}>
              <div className="modal-form-group">
                <label>Withdrawable Balance</label>
                <span className="withdrawable-balance-static">
                  ₹{availableMargin.toFixed(2)}
                </span>
              </div>
              <div className="modal-form-group">
                <label>Amount to Withdraw (₹)</label>
                <input
                  type="number"
                  placeholder="Amount to withdraw"
                  value={transactionAmount}
                  onChange={(e) => setTransactionAmount(e.target.value)}
                  max={availableMargin}
                  autoFocus
                  required
                />
              </div>
              <div className="modal-actions-footer">
                <button
                  type="submit"
                  className="modal-btn-primary submit-payout"
                >
                  Proceed Payout
                </button>
                <button
                  type="button"
                  className="modal-btn-link"
                  onClick={() => {
                    setIsWithdrawOpen(false);
                    setTransactionAmount("");
                  }}
                >
                  Cancel
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </div>
  );
};

export default Funds;
