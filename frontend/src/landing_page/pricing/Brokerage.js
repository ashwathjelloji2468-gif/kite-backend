import React, { useState } from "react";

function Brokerage() {
  const [activeTab, setActiveTab] = useState("equity");

  return (
    <div
      className="container"
      style={{ paddingTop: "40px", paddingBottom: "80px" }}
    >
      <div
        className="d-flex justify-content-start gap-5 border-bottom"
        style={{ marginBottom: "30px" }}
      >
        <h2
          onClick={() => setActiveTab("equity")}
          style={{
            cursor: "pointer",
            color: activeTab === "equity" ? "#387ed1" : "#424242",
            borderBottom: activeTab === "equity" ? "3px solid #387ed1" : "none",
            paddingBottom: "10px",
            fontSize: "3rem",
            fontWeight: "500",
          }}
        >
          Equity
        </h2>

        <h2
          onClick={() => setActiveTab("currency")}
          style={{
            cursor: "pointer",
            color: activeTab === "currency" ? "#387ed1" : "#424242",
            borderBottom:
              activeTab === "currency" ? "3px solid #387ed1" : "none",
            paddingBottom: "10px",
            fontSize: "3rem",
            fontWeight: "500",
          }}
        >
          Currency
        </h2>

        <h2
          onClick={() => setActiveTab("commodity")}
          style={{
            cursor: "pointer",
            color: activeTab === "commodity" ? "#387ed1" : "#424242",
            borderBottom:
              activeTab === "commodity" ? "3px solid #387ed1" : "none",
            paddingBottom: "10px",
            fontSize: "3rem",
            fontWeight: "500",
          }}
        >
          Commodity
        </h2>
      </div>

      {activeTab === "equity" && (
        <>
          <div className="table-responsive mb-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Equity delivery</th>
                  <th>Equity intraday</th>
                  <th>F&amp;O - Futures</th>
                  <th>F&amp;O - Options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>Zero Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>Flat Rs. 20 per executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.1% on buy &amp; sell</td>
                  <td>0.025% on the sell side</td>
                  <td>0.05% on the sell side</td>
                  <td>
                    0.15% of the intrinsic value on options that are bought and
                    exercised
                    <br />
                    <br />
                    0.15% on sell side (on premium)
                  </td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00307%
                    <br />
                    BSE: 0.00375%
                  </td>
                  <td>
                    NSE: 0.00183%
                    <br />
                    BSE: 0
                  </td>
                  <td>
                    NSE: 0.03553% (on premium)
                    <br />
                    BSE: 0.0325% (on premium)
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.015% or ₹1500 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="text-center"
            style={{
              color: "#387ed1",
              fontSize: "1.4rem",
              marginBottom: "80px",
            }}
          >
            Calculate your costs upfront using our brokerage calculator
          </p>
        </>
      )}

      {activeTab === "currency" && (
        <>
          <div className="table-responsive mb-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Currency futures</th>
                  <th>Currency options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or ₹ 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>No STT</td>
                  <td>No STT</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    NSE: 0.00035%
                    <br />
                    BSE: 0.00045%
                  </td>
                  <td>
                    NSE: 0.0311%
                    <br />
                    BSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>₹10 / crore</td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                  <td>0.0001% or ₹10 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="text-center"
            style={{
              color: "#387ed1",
              fontSize: "1.4rem",
              marginBottom: "80px",
            }}
          >
            Calculate your costs upfront using our brokerage calculator
          </p>
        </>
      )}

      {activeTab === "commodity" && (
        <>
          <div className="table-responsive mb-5">
            <table className="table table-bordered">
              <thead>
                <tr>
                  <th></th>
                  <th>Commodity futures</th>
                  <th>Commodity options</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td>Brokerage</td>
                  <td>0.03% or Rs. 20/executed order whichever is lower</td>
                  <td>₹ 20/executed order</td>
                </tr>
                <tr>
                  <td>STT/CTT</td>
                  <td>0.01% on sell side (Non-Agri)</td>
                  <td>0.05% on sell side</td>
                </tr>
                <tr>
                  <td>Transaction charges</td>
                  <td>
                    MCX: 0.0021%
                    <br />
                    NSE: 0.0001%
                  </td>
                  <td>
                    MCX: 0.0418%
                    <br />
                    NSE: 0.001%
                  </td>
                </tr>
                <tr>
                  <td>GST</td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                  <td>
                    18% on (brokerage + SEBI charges + transaction charges)
                  </td>
                </tr>
                <tr>
                  <td>SEBI charges</td>
                  <td>
                    Agri:
                    <br />
                    ₹1 / crore
                    <br />
                    Non-agri:
                    <br />
                    ₹10 / crore
                  </td>
                  <td>₹10 / crore</td>
                </tr>
                <tr>
                  <td>Stamp charges</td>
                  <td>0.002% or ₹200 / crore on buy side</td>
                  <td>0.003% or ₹300 / crore on buy side</td>
                </tr>
              </tbody>
            </table>
          </div>

          <p
            className="text-center"
            style={{
              color: "#387ed1",
              fontSize: "1.4rem",
              marginBottom: "80px",
            }}
          >
            Calculate your costs upfront using our brokerage calculator
          </p>
        </>
      )}

      <div style={{ marginTop: "40px", marginBottom: "80px" }}>
        <h2
          style={{ fontSize: "3rem", color: "#424242", marginBottom: "30px" }}
        >
          Charges for account opening
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Type of account</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Online account</td>
                <td>
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>Offline account</td>
                <td>
                  <span className="badge bg-success">FREE</span>
                </td>
              </tr>
              <tr>
                <td>NRI account (offline only)</td>
                <td>₹ 500</td>
              </tr>
              <tr>
                <td>
                  Partnership, LLP, HUF, or Corporate accounts (offline only)
                </td>
                <td>₹ 500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "40px", marginBottom: "30px" }}>
        <h2
          style={{ fontSize: "3rem", color: "#424242", marginBottom: "30px" }}
        >
          Demat AMC (Annual Maintenance Charge)
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Value of holdings</th>
                <th>AMC</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Up to ₹4 lakh</td>
                <td>
                  <span className="badge bg-success">FREE*</span>
                </td>
              </tr>
              <tr>
                <td>₹4 lakh - ₹10 lakh</td>
                <td>₹ 100 per year, charged quarterly*</td>
              </tr>
              <tr>
                <td>Above ₹10 lakh</td>
                <td>₹ 300 per year, charged quarterly</td>
              </tr>
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: "1.1rem", color: "#666", marginTop: "20px" }}>
          * Lower AMC is applicable only if the account qualifies as a Basic
          Services Demat Account (BSDA). BSDA account holders cannot hold more
          than one demat account. To learn more about BSDA,{" "}
          <span style={{ color: "#387ed1" }}>click here.</span>
        </p>
      </div>

      <div style={{ marginTop: "100px", marginBottom: "60px" }}>
        <h2
          style={{ fontSize: "3rem", color: "#424242", marginBottom: "30px" }}
        >
          Charges for optional value added services
        </h2>

        <div className="table-responsive">
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Service</th>
                <th>Billing Frequency</th>
                <th>Charges</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>Tickertape</td>
                <td>Monthly / Annual</td>
                <td>Free: 0 | Pro: 249/2399</td>
              </tr>
              <tr>
                <td>Smallcase</td>
                <td>Per transaction</td>
                <td>Buy &amp; Invest More: 100 | SIP: 10</td>
              </tr>
              <tr>
                <td>Kite Connect</td>
                <td>Monthly</td>
                <td>Connect: 500 | Personal: Free</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div style={{ marginTop: "100px" }}>
        <h2
          style={{ fontSize: "3rem", color: "#424242", marginBottom: "40px" }}
        >
          Charges explained
        </h2>

        <div className="row">
          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
              }}
            >
              Securities/Commodities transaction tax
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Tax by the government when transacting on the exchanges. Charged
              as above on both buy and sell sides when trading equity delivery.
              Charged only on selling side when trading intraday or on F&amp;O.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              When trading at Zerodha, STT/CTT can be a lot more than the
              brokerage we charge. Important to keep a tab.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Transaction/Turnover Charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Charged by exchanges (NSE, BSE, MCX) on the value of your
              transactions.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              BSE has revised transaction charges in XC, XD, XT, Z and ZP groups
              to ₹10,000 per crore w.e.f 01.01.2016. (XC and XD groups have been
              merged into a new group X w.e.f 01.12.2017)
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              BSE has revised transaction charges in SS and ST groups to
              ₹1,00,000 per crore of gross turnover.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              BSE has revised transaction charges for group A, B and other non
              exclusive scrips at ₹375 per crore of turnover on flat rate basis.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              BSE has revised transaction charges in M, MT, TS and MS groups to
              ₹275 per crore of gross turnover.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Call &amp; trade
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Additional charges of ₹50 per order for orders placed through a
              dealer at Zerodha including auto square off orders.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Stamp charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Stamp charges by the Government of India as per the Indian Stamp
              Act of 1899 for transacting in instruments on the stock exchanges
              and depositories.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              NRI brokerage charges
            </h4>
            <ul style={{ color: "#666", fontSize: "1.1rem", lineHeight: "2" }}>
              <li>
                For a non-PIS account, 0.5% or ₹50 per executed order for equity
                and F&amp;O (whichever is lower).
              </li>
              <li>
                For a PIS account, 0.5% or ₹200 per executed order for equity
                (whichever is lower).
              </li>
              <li>
                ₹500 + GST as yearly account maintenance charges (AMC) charges.
              </li>
            </ul>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Account with debit balance
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              If the account is in debit balance, any order placed will be
              charged ₹40 per executed order instead of ₹20 per executed order.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Charges for Investor's Protection Fund Trust (IPFT) by NSE
            </h4>
            <ul style={{ color: "#666", fontSize: "1.1rem", lineHeight: "2" }}>
              <li>
                Equity and Futures - ₹0.01 per crore + GST of the traded value.
              </li>
              <li>
                Options - ₹0.01 per crore + GST traded value (premium value).
              </li>
              <li>
                Currency - ₹0.05 per lakh + GST of turnover for Futures and ₹2
                per lakh + GST of premium for Options.
              </li>
            </ul>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Margin Trading Facility (MTF)
            </h4>
            <ul style={{ color: "#666", fontSize: "1.1rem", lineHeight: "2" }}>
              <li>
                MTF Interest: 0.04% per day (₹40 per lakh) on the funded amount.
              </li>
              <li>
                MTF Brokerage: 0.3% or Rs. 20/executed order, whichever is
                lower.
              </li>
              <li>
                MTF pledge charge: ₹15 + GST per pledge and unpledge request per
                ISIN.
              </li>
            </ul>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Disclaimer
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              For delivery based trades, a minimum of ₹0.01 will be charged per
              contract note. Clients who opt to receive physical contract notes
              will be charged ₹20 per contract note plus courier charges.
              Brokerage will not exceed the rates specified by SEBI and the
              exchanges. All statutory and regulatory charges will be levied at
              actuals.
            </p>
          </div>

          <div className="col-lg-6 col-md-6 col-sm-12 mb-5">
            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
              }}
            >
              GST
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Tax levied by the government on the services rendered. 18% of (
              brokerage + SEBI charges + transaction charges)
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              SEBI Charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Charged at ₹10 per crore + GST by Securities and Exchange Board of
              India for regulating the markets.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              DP (Depository participant) charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              ₹15.34 per scrip (₹3.5 CDSL fee + ₹9.5 Zerodha fee + ₹2.34 GST) is
              charged on the trading account ledger when stocks are sold,
              irrespective of quantity.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Female demat account holders (as first holder) will enjoy a
              discount of ₹0.25 per transaction on the CDSL fee.
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Debit transactions of mutual funds &amp; bonds get an additional
              discount of ₹0.25 on the CDSL fee.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Pledging charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              ₹30 + GST per pledge request per ISIN.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              AMC (Account maintenance charges)
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              For BSDA demat account: Zero charges if the holding value is less
              than ₹4,00,000. To learn more about BSDA,{" "}
              <span style={{ color: "#387ed1" }}>Click here</span>
            </p>

            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              For non-BSDA demat accounts: ₹300/year + 18% GST charged quarterly
              (90 days). To learn more about AMC,{" "}
              <span style={{ color: "#387ed1" }}>Click here</span>
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Corporate action order charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              ₹20 plus GST will be charged for OFS / buyback / takeover /
              delisting orders placed through Console.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Off-market transfer charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              ₹25 per transaction.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Physical CMR request
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              First CMR request is free. ₹20 + ₹100 (courier charge) + 18% GST
              for subsequent requests.
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Payment gateway charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              ₹9 + GST (Not levied on transfers done via UPI)
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Delayed Payment Charges
            </h4>
            <p
              style={{ fontSize: "1.15rem", color: "#666", lineHeight: "1.9" }}
            >
              Interest is levied at 18% a year or 0.05% per day on the debit
              balance in your trading account.{" "}
              <span style={{ color: "#387ed1" }}>Learn more.</span>
            </p>

            <h4
              style={{
                fontSize: "2rem",
                color: "#424242",
                marginBottom: "20px",
                marginTop: "30px",
              }}
            >
              Trading using 3-in-1 account with block functionality
            </h4>
            <ul style={{ color: "#666", fontSize: "1.1rem", lineHeight: "2" }}>
              <li>Delivery &amp; MTF Brokerage: 0.5% per executed order.</li>
              <li>Intraday Brokerage: 0.05% per executed order.</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Brokerage;
