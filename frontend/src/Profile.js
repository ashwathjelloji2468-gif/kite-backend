import React from "react";

// 🚀 Live Render Backend URL reference for network queries
const BACKEND_URL = "https://kite-backend-lmin.onrender.com";

const Profile = () => {
  // Mocking standard structural user metadata variables matching Zerodha's style
  const userProfileData = {
    name: "Student User",
    email: "student_club@zerodha.com",
    clientCode: "ZU12345",
    pan: "ABCDE1234F",
    accountStatus: "Active",
    segmentActive: "NSE, BSE, MCX",
    bankName: "HDFC Bank Ltd.",
    accountNumber: "XXXXXX10293",
  };

  return (
    <div className="profile-page-container">
      {/* Structural Account Identification Banner Header */}
      <div className="profile-header">
        <div className="profile-banner-avatar">
          {userProfileData.clientCode.substring(0, 2)}
        </div>
        <div className="profile-identity-block">
          <h6>{userProfileData.name}</h6>
          <p className="profile-email-sub">{userProfileData.email}</p>
        </div>
      </div>

      <hr className="divider" />

      {/* Grid Split Content Panel Layout */}
      <div className="profile-info-grid">
        {/* Left Card Segment: Account Essentials */}
        <div className="info-segment-card">
          <h5>Account Details</h5>
          <div className="meta-data-table">
            <div className="meta-row">
              <span className="meta-label">Client ID</span>
              <span className="meta-value value-highlight">
                {userProfileData.clientCode}
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">PAN Card</span>
              <span className="meta-value">{userProfileData.pan}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Status</span>
              <span className="meta-value status-indicator-active">
                {userProfileData.accountStatus}
              </span>
            </div>
          </div>
        </div>

        {/* Right Card Segment: System Clearances & Banking */}
        <div className="info-segment-card">
          <h5>Trading Profile</h5>
          <div className="meta-data-table">
            <div className="meta-row">
              <span className="meta-label">Active Segments</span>
              <span className="meta-value">
                {userProfileData.segmentActive}
              </span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Linked Bank</span>
              <span className="meta-value">{userProfileData.bankName}</span>
            </div>
            <div className="meta-row">
              <span className="meta-label">Account No.</span>
              <span className="meta-value">
                {userProfileData.accountNumber}
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
