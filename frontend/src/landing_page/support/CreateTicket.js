import React, { useState } from "react";

function CreateTicket() {
  const [openSections, setOpenSections] = useState({
    "Account Opening": true,
    "Your Zerodha Account": true,
    Kite: true,
    Funds: true,
    Console: true,
    Coin: true,
  });

  const toggleSection = (title) => {
    setOpenSections((prev) => ({
      ...prev,
      [title]: !prev[title],
    }));
  };

  const ticketSections = [
    {
      title: "Account Opening",
      icon: "⊕",
      links: [
        "Resident individual",
        "Minor",
        "Non Resident Indian (NRI)",
        "Company, Partnership, HUF and LLP",
        "Glossary",
      ],
    },
    {
      title: "Your Zerodha Account",
      icon: "◉",
      links: [
        "Your Profile",
        "Account modification",
        "Client Master Report (CMR) and Depository Participant (DP)",
        "Nomination",
        "Transfer and conversion of securities",
      ],
    },
    {
      title: "Kite",
      icon: "◎",
      links: [
        "IPO",
        "Trading FAQs",
        "Margin Trading Facility (MTF) and Margins",
        "Charts and orders",
        "Alerts and Nudges",
        "General",
      ],
    },
    {
      title: "Funds",
      icon: "₹",
      links: ["Add money", "Withdraw money", "Add bank accounts", "eMandates"],
    },
    {
      title: "Console",
      icon: "©",
      links: [
        "Portfolio",
        "Corporate actions",
        "Funds statement",
        "Reports",
        "Profile",
        "Segments",
      ],
    },
    {
      title: "Coin",
      icon: "◌",
      links: [
        "Mutual funds",
        "National Pension Scheme (NPS)",
        "Fixed Deposit (FD)",
        "Features on Coin",
        "Payments and Orders",
        "General",
      ],
    },
  ];

  const quickLinks = [
    "Track account opening",
    "Track segment activation",
    "Intraday margins",
    "Kite user manual",
    "Learn how to create a ticket",
  ];

  const notices = [
    "Trading holiday on account of Maharashtra Day on May 01, 2026",
    "Surveillance measure on scrips - April 2026",
  ];

  return (
    <div className="container" style={{ padding: "55px 0 80px 0" }}>
      <div className="row">
        <div className="col-lg-8 col-md-12">
          {ticketSections.map((section, index) => (
            <div
              key={index}
              style={{
                border: "1px solid #eee",
                marginBottom: "30px",
                backgroundColor: "#fff",
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  borderBottom: openSections[section.title]
                    ? "1px solid #f1f1f1"
                    : "none",
                  minHeight: "85px",
                }}
              >
                <div
                  style={{
                    width: "72px",
                    height: "85px",
                    backgroundColor: "#fafafa",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "1.8rem",
                    color: "#387ed1",
                    borderRight: "1px solid #f1f1f1",
                  }}
                >
                  {section.icon}
                </div>

                <div
                  style={{
                    flex: 1,
                    padding: "0 20px",
                    fontSize: "1.8rem",
                    color: "#424242",
                    fontWeight: "400",
                  }}
                >
                  {section.title}
                </div>

                <button
                  onClick={() => toggleSection(section.title)}
                  style={{
                    marginRight: "20px",
                    border: "none",
                    background: "transparent",
                    fontSize: "1.6rem",
                    color: "#387ed1",
                    cursor: "pointer",
                  }}
                >
                  {openSections[section.title] ? "⌃" : "⌄"}
                </button>
              </div>

              {openSections[section.title] && (
                <div style={{ padding: "22px 28px 22px 48px" }}>
                  <ul style={{ margin: 0, paddingLeft: "22px" }}>
                    {section.links.map((link, idx) => (
                      <li
                        key={idx}
                        style={{
                          color:
                            idx === 3 && section.title !== "Funds"
                              ? "#444"
                              : "#387ed1",
                          fontSize: "1.15rem",
                          marginBottom: "20px",
                          lineHeight: "1.7",
                        }}
                      >
                        <a
                          href="/"
                          style={{
                            color:
                              idx === 3 && section.title !== "Funds"
                                ? "#444"
                                : "#387ed1",
                            textDecoration: "none",
                          }}
                        >
                          {link}
                        </a>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="col-lg-4 col-md-12">
          <div
            style={{
              backgroundColor: "#fff7ed",
              borderLeft: "4px solid orange",
              padding: "20px 24px",
              marginBottom: "24px",
            }}
          >
            <ul style={{ margin: 0, paddingLeft: "20px" }}>
              {notices.map((notice, index) => (
                <li
                  key={index}
                  style={{
                    marginBottom: "18px",
                    color: "#387ed1",
                    fontSize: "1.1rem",
                    lineHeight: "1.8",
                  }}
                >
                  <a
                    href="/"
                    style={{
                      color: "#387ed1",
                      textDecoration: "underline",
                    }}
                  >
                    {notice}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div
            style={{
              border: "1px solid #eee",
              backgroundColor: "#fff",
            }}
          >
            <div
              style={{
                backgroundColor: "#fafafa",
                padding: "18px 20px",
                borderBottom: "1px solid #eee",
                fontSize: "1.5rem",
                color: "#424242",
                fontWeight: "400",
              }}
            >
              Quick links
            </div>

            {quickLinks.map((item, index) => (
              <div
                key={index}
                style={{
                  padding: "20px",
                  borderBottom:
                    index !== quickLinks.length - 1 ? "1px solid #eee" : "none",
                  fontSize: "1.12rem",
                  color: "#387ed1",
                }}
              >
                <a
                  href="/"
                  style={{
                    color: "#387ed1",
                    textDecoration: "none",
                  }}
                >
                  {index + 1}. {item}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default CreateTicket;
