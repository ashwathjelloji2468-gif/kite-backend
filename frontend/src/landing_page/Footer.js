import React from "react";
import { Link } from "react-router-dom";

function Footer() {
  const footerLinkStyle = {
    display: "block",
    fontSize: "0.9rem",
    color: "#666",
    textDecoration: "none",
    marginBottom: "10px",
  };

  const inlineLinkStyle = {
    color: "#387ed1",
    textDecoration: "none",
  };

  return (
    <footer
      style={{ backgroundColor: "rgb(250, 250, 250)", marginTop: "50px" }}
    >
      <div className="container" style={{ padding: "50px 0 30px 0" }}>
        <div className="row">
          <div className="col-lg-3 col-md-6 mb-4">
            <img
              src="/media/logo.svg"
              style={{ width: "50%", marginBottom: "15px" }}
              alt="Zerodha logo"
            />

            <p
              style={{
                fontSize: "0.85rem",
                color: "#666",
                marginBottom: "15px",
              }}
            >
              &copy; 2010 - 2026, Zerodha Broking Ltd.
              <br />
              All rights reserved.
            </p>

            <div
              style={{
                fontSize: "1.2rem",
                color: "#424242",
                marginBottom: "15px",
              }}
            >
              <i
                className="fa-brands fa-x-twitter"
                style={{ marginRight: "15px" }}
              ></i>
              <i
                className="fa-brands fa-facebook"
                style={{ marginRight: "15px" }}
              ></i>
              <i
                className="fa-brands fa-instagram"
                style={{ marginRight: "15px" }}
              ></i>
              <i className="fa-brands fa-linkedin-in"></i>
            </div>

            <div
              style={{
                fontSize: "1.2rem",
                color: "#424242",
                marginBottom: "20px",
              }}
            >
              <i
                className="fa-brands fa-youtube"
                style={{ marginRight: "15px" }}
              ></i>
              <i
                className="fa-brands fa-whatsapp"
                style={{ marginRight: "15px" }}
              ></i>
              <i className="fa-brands fa-telegram"></i>
            </div>

            <div
              style={{
                display: "flex",
                gap: "10px",
                alignItems: "center",
                flexWrap: "wrap",
              }}
            >
              <img
                src="/media/googlePlayBadge.svg"
                alt="Get it on Google Play"
                style={{ width: "140px" }}
              />
              <img
                src="/media/appstoreBadge.svg"
                alt="Download on the App Store"
                style={{ width: "140px" }}
              />
            </div>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p
              style={{
                fontWeight: "600",
                color: "#424242",
                marginBottom: "15px",
              }}
            >
              Account
            </p>
            <Link to="/signup" style={footerLinkStyle}>Open demat account</Link>
            <Link to="/signup" style={footerLinkStyle}>Minor demat account</Link>
            <Link to="/signup" style={footerLinkStyle}>NRI demat account</Link>
            <Link to="/signup" style={footerLinkStyle}>HUF demat account</Link>
            <Link to="/products" style={footerLinkStyle}>Commodity</Link>
            <Link to="/products" style={footerLinkStyle}>Dematerialisation</Link>
            <Link to="/products" style={footerLinkStyle}>Fund transfer</Link>
            <Link to="/products" style={{ ...footerLinkStyle, marginBottom: 0 }}>MTF</Link>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p
              style={{
                fontWeight: "600",
                color: "#424242",
                marginBottom: "15px",
              }}
            >
              Support
            </p>
            <Link to="/support" style={footerLinkStyle}>Contact us</Link>
            <Link to="/support" style={footerLinkStyle}>Support portal</Link>
            <Link to="/support" style={footerLinkStyle}>How to file a complaint?</Link>
            <Link to="/support" style={footerLinkStyle}>Status of your complaints</Link>
            <Link to="/support" style={footerLinkStyle}>Bulletin</Link>
            <Link to="/support" style={footerLinkStyle}>Circular</Link>
            <Link to="/support" style={footerLinkStyle}>Z-Connect blog</Link>
            <Link to="/support" style={{ ...footerLinkStyle, marginBottom: 0 }}>Downloads</Link>
          </div>

          <div className="col-lg-2 col-md-6 mb-4">
            <p
              style={{
                fontWeight: "600",
                color: "#424242",
                marginBottom: "15px",
              }}
            >
              Company
            </p>
            <Link to="/about" style={footerLinkStyle}>About</Link>
            <Link to="/about" style={footerLinkStyle}>Philosophy</Link>
            <Link to="/about" style={footerLinkStyle}>Press & media</Link>
            <Link to="/about" style={footerLinkStyle}>Careers</Link>
            <Link to="/about" style={footerLinkStyle}>Zerodha Cares (CSR)</Link>
            <Link to="/about" style={footerLinkStyle}>Zerodha.tech</Link>
            <Link to="/about" style={footerLinkStyle}>Open source</Link>
            <Link to="/about" style={{ ...footerLinkStyle, marginBottom: 0 }}>Referral program</Link>
          </div>

          <div className="col-lg-3 col-md-6 mb-4">
            <p
              style={{
                fontWeight: "600",
                color: "#424242",
                marginBottom: "15px",
              }}
            >
              Quick links
            </p>
            <Link to="/products" style={footerLinkStyle}>Upcoming IPOs</Link>
            <Link to="/pricing" style={footerLinkStyle}>Brokerage charges</Link>
            <Link to="/products" style={footerLinkStyle}>Market holidays</Link>
            <Link to="/products" style={footerLinkStyle}>Economic calendar</Link>
            <Link to="/pricing" style={footerLinkStyle}>Calculators</Link>
            <Link to="/products" style={footerLinkStyle}>Markets</Link>
            <Link to="/products" style={footerLinkStyle}>Sectors</Link>
            <Link to="/products" style={{ ...footerLinkStyle, marginBottom: 0 }}>Gift Nifty</Link>
          </div>
        </div>

        <div
          style={{
            marginTop: "35px",
            fontSize: "0.8rem",
            color: "#999",
            lineHeight: "1.5",
          }}
        >
          <p>
            Zerodha Broking Ltd.: Member of NSE, BSE, MCX & MSEI - SEBI
            Registration no.: INZ00031633 CDSL/NSDL: Depository services through
            Zerodha Broking Ltd. - SEBI Registration no.: IN-DP-431-2019
            Registered Address: Zerodha Broking Ltd., #153/154, 4th Cross,
            Dollars Colony, Opp. Clarence Public School, J.P Nagar 4th Phase,
            Bengaluru - 560078, Karnataka, India.
          </p>
          <p>
            For any complaints pertaining to securities broking please write to{" "}
            <a
              href="mailto:complaints@zerodha.com"
              style={inlineLinkStyle}
            >
              complaints@zerodha.com
            </a>
            , for DP related to{" "}
            <a href="mailto:dp@zerodha.com" style={inlineLinkStyle}>
              dp@zerodha.com
            </a>
            . Please ensure you carefully read the Risk Disclosure Document as
            prescribed by SEBI | ICF
          </p>
          <p>
            Procedure to file a complaint on{" "}
            <Link to="/support" style={inlineLinkStyle}>
              SEBI SCORES
            </Link>
            : Register on SCORES portal. Mandatory details for filing complaints
            on SCORES: Name, PAN, Address, Mobile Number, E-mail ID. Benefits:
            Effective Communication, Speedy redressal of the grievances
          </p>
          <p>
            <Link to="/support" style={inlineLinkStyle}>
              Smart Online Dispute Resolution
            </Link>{" "}
            |{" "}
            <Link to="/support" style={inlineLinkStyle}>
              Grievances Redressal Mechanism
            </Link>
          </p>
          <p>
            Investments in securities market are subject to market risks; read
            all the related documents carefully before investing.
          </p>
          <p>
            Attention investors: 1) Stock brokers can accept securities as
            margins from clients only by way of pledge in the depository system
            w.e.f. September 01, 2020. 2) Update your e-mail and phone number
            with your stock broker / depository participant and receive OTP
            directly from depository on your e-mail and/or mobile number to
            create pledge. 3) Check your securities / MF / bonds in the
            consolidated account statement issued by NSDL/CDSL every month.
          </p>
          <p>
            India’s largest broker based on networth as per NSE.{" "}
            <Link to="/about" style={inlineLinkStyle}>
              NSE broker factsheet
            </Link>
          </p>
          <p>
            “Prevent unauthorised transactions in your account. Update your
            mobile numbers/email IDs with your stock brokers. Receive
            information of your transactions directly from Exchange on your
            mobile/email at the end of the day. Issued in the interest of
            investors. KYC is one time exercise while dealing in securities
            markets - once KYC is done through a SEBI registered intermediary
            (broker, DP, Mutual fund, etc.), you need not undergo the same
            process again when you approach another intermediary.”
          </p>
          <p>
            “Dear Investor, if you are subscribing to an IPO, there is no need
            to issue a cheque. Please write the Bank account number and sign the
            IPO application form to authorize your bank to make payment in case
            of allotment. In case of no allotment the funds will remain in your
            bank account. As a business we don't give stock tips, and have not
            authorized anyone to trade on behalf of others. If you find anyone
            claiming to be part of Zerodha and offering such services,{" "}
            <Link to="/support" style={inlineLinkStyle}>
              please create a ticket here
            </Link>
            .
          </p>
          <p>
            “Customers availing insurance advisory services offered by Ditto
            (Tacticial Consulting Services Pvt. Ltd) IRDAI Registered Corporate
            Agent (Composite) License No CA0738) will not have access to the
            exchange investor grievance redressal forum, SEBI SCORES/ODR, or
            arbitration mechanism for such products.”
          </p>
          <p>
            “Fixed deposit products offered on this platform are third-party
            products (TPP) and are not Exchange traded products. These are
            offered through Blostem Fintech Private Limited. Zerodha Broking
            Limited (SEBI Registration No.: INZ00031633) is acting solely as a
            distributor for these products. Any disputes arising with respect to
            such distribution activity will not have access to SEBI SCORES/ODR,
            Exchange Investor Grievance Redressal Forum, or Arbitration
            Mechanism. Fixed deposits are regulated by the Reserve Bank of India
            (RBI).”
          </p>
        </div>

        <div
          style={{
            marginTop: "25px",
            borderTop: "1px solid #eee",
            paddingTop: "20px",
            fontSize: "0.85rem",
            color: "#666",
            display: "flex",
            flexWrap: "wrap",
            gap: "15px",
          }}
        >
          <span>NSE</span>
          <span>BSE</span>
          <span>MCX</span>
          <Link to="/about" style={inlineLinkStyle}>Terms & conditions</Link>
          <Link to="/about" style={inlineLinkStyle}>Policies & procedures</Link>
          <Link to="/about" style={inlineLinkStyle}>Privacy policy</Link>
          <Link to="/about" style={inlineLinkStyle}>Disclosure</Link>
          <Link to="/about" style={inlineLinkStyle}>For investor's attention</Link>
          <Link to="/about" style={inlineLinkStyle}>Investor charter</Link>
        </div>
      </div>
    </footer>
  );
}

export default Footer;