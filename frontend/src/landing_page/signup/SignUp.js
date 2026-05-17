import React, { useState } from "react";

function SignUp() {
  const [openFaq, setOpenFaq] = useState(0);

  const faqData = [
    {
      question: "What are the charges for opening a demat account?",
      answer: (
        <>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            The account maintenance charges is applicable based on the account
            type.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            For Basic Services Demat Account: Zero charges if the holding value
            is less than ₹4,00,000.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            For non-Basic Services Demat Account demat accounts: ₹300 per year +
            GST.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            To learn more about BSDA,{" "}
            <span style={{ color: "#387ed1", cursor: "pointer" }}>
              Click here.
            </span>
          </p>
        </>
      ),
    },
    {
      question: "Can I open a demat account without a bank account?",
      answer: (
        <>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            To open a demat account, you must have a bank account in your name.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            If UPI verification is completed successfully, no proof of bank is
            needed. However, if bank verification fails, you'll need to provide
            either a cancelled cheque or a bank statement to link your bank
            account to Zerodha.
          </p>
        </>
      ),
    },
    {
      question: "What is a Basic Services Demat Account (BSDA)?",
      answer: (
        <>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            BSDA is a demat account designed for retail investors with smaller
            holdings. It automatically applies if you have only one demat
            account per PAN and holdings of up to ₹10 lakhs in it.
          </p>
          <p
            style={{
              fontSize: "18px",
              color: "#666",
              lineHeight: "1.9",
              marginBottom: "10px",
            }}
          >
            You will not be charged any Account Maintenance Charge (AMC) for
            holdings up to ₹4 lakhs value, and only ₹25/quarter if holdings are
            between ₹4 lakhs and ₹10 lakhs.
          </p>
        </>
      ),
    },
    {
      question: "Can I open a demat and trading account using the mobile app?",
      answer: (
        <p
          style={{
            fontSize: "18px",
            color: "#666",
            lineHeight: "1.9",
            marginBottom: "10px",
          }}
        >
          Yes, You can open a demat and trading account completely online using
          the Zerodha Kite mobile app, available on Android and iOS.
        </p>
      ),
    },
  ];

  const accountTypes = [
    {
      title: "Individual Account",
      desc: "Invest in equity, mutual funds and derivatives",
      icon: "👤",
      active: false,
    },
    {
      title: "HUF Account",
      desc: "Make tax-efficient investments for your family",
      icon: "👪",
      active: false,
    },
    {
      title: "NRI Account",
      desc: "Invest in equity, mutual funds, debentures, and more",
      icon: "🌐",
      active: false,
    },
    {
      title: "Minor Account",
      desc: "Teach your little ones about money & invest for their future with them",
      icon: "🧒",
      active: false,
    },
    {
      title: "Corporate / LLP/ Partnership",
      desc: "Manage your business surplus and investments easily",
      icon: "🏢",
      active: true,
    },
  ];

  const investmentOptions = [
    {
      title: "Stocks",
      desc: "Invest in all exchange-listed securities",
      icon: "/media/stocks-acop.svg",
    },
    {
      title: "Mutual funds",
      desc: "Invest in commission-free direct mutual funds",
      icon: "/media/mf-acop.svg",
    },
    {
      title: "IPO",
      desc: "Apply to the latest IPOs instantly via UPI",
      icon: "/media/ipo-acop.svg",
    },
    {
      title: "Futures & options",
      desc: "Hedge and mitigate market risk through simplified F&O trading",
      icon: "/media/fo-acop.svg",
    },
  ];

  const benefits = [
    {
      title: "Unbeatable pricing",
      desc: "Zero charges for equity & mutual fund investments. Flat ₹20 fees for intraday and F&O trades.",
    },
    {
      title: "Best investing experience",
      desc: "Simple and intuitive trading platform with an easy-to-understand user interface.",
    },
    {
      title: "No spam or gimmicks",
      desc: `Committed to transparency — no gimmicks, spam, "gamification", or intrusive push notifications.`,
    },
    {
      title: "The Zerodha universe",
      desc: "More than just an app — gain free access to the entire ecosystem of our partner products.",
    },
  ];

  return (
    <div style={{ fontFamily: "Inter, sans-serif", color: "#424242" }}>
      <div
        className="container"
        style={{ paddingTop: "70px", paddingBottom: "70px" }}
      >
        <div className="text-center">
          <h1
            style={{
              fontSize: "52px",
              fontWeight: "500",
              marginBottom: "18px",
              color: "#424242",
            }}
          >
            Open a free demat and trading account online
          </h1>

          <p
            style={{
              fontSize: "28px",
              color: "#666",
              lineHeight: "1.6",
            }}
          >
            Start investing brokerage free and join a community of 1.6+ crore
            investors and traders
          </p>
        </div>

        <div className="row align-items-center" style={{ marginTop: "60px" }}>
          <div className="col-lg-7 col-md-12 text-center">
            <img
              src="/media/account_open.svg"
              alt="Signup illustration"
              style={{ width: "85%" }}
            />
          </div>

          <div className="col-lg-5 col-md-12" style={{ marginTop: "20px" }}>
            <h2
              style={{
                fontSize: "48px",
                fontWeight: "500",
                marginBottom: "6px",
              }}
            >
              Signup now
            </h2>

            <p
              style={{
                fontSize: "26px",
                color: "#666",
                marginBottom: "30px",
              }}
            >
              Or track your existing application
            </p>

            <div
              style={{
                display: "flex",
                alignItems: "center",
                border: "1px solid #cfcfcf",
                borderRadius: "4px",
                overflow: "hidden",
                height: "74px",
                marginBottom: "22px",
              }}
            >
              <div
                style={{
                  padding: "0 18px",
                  fontSize: "24px",
                  color: "#424242",
                  borderRight: "1px solid #ddd",
                  minWidth: "120px",
                  display: "flex",
                  alignItems: "center",
                  height: "100%",
                  backgroundColor: "#fff",
                }}
              >
                🇮🇳 +91
              </div>

              <input
                type="text"
                placeholder="Enter your mobile number"
                style={{
                  border: "none",
                  outline: "none",
                  width: "100%",
                  height: "100%",
                  fontSize: "24px",
                  padding: "0 18px",
                  color: "#666",
                }}
              />
            </div>

            <button
              style={{
                width: "100%",
                backgroundColor: "#387ed1",
                color: "#fff",
                border: "none",
                borderRadius: "4px",
                padding: "18px 20px",
                fontSize: "22px",
                fontWeight: "500",
                marginBottom: "24px",
              }}
            >
              Get OTP
            </button>

            <p
              style={{
                fontSize: "16px",
                color: "#666",
                lineHeight: "1.8",
                marginBottom: "20px",
              }}
            >
              By proceeding, you agree to the Zerodha{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>terms</span>{" "}
              &{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>
                privacy policy
              </span>
            </p>

            <hr style={{ borderColor: "#eee" }} />

            <p style={{ fontSize: "18px", color: "#666" }}>
              Looking to open NRI account?{" "}
              <span style={{ color: "#387ed1", cursor: "pointer" }}>
                Click here
              </span>
            </p>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ paddingTop: "30px", paddingBottom: "70px" }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "500",
            textAlign: "center",
            color: "#424242",
          }}
        >
          Investment options with Zerodha demat account
        </h2>

        <div className="row" style={{ marginTop: "50px" }}>
          {investmentOptions.map((item, index) => (
            <div className="col-lg-6 col-md-6 col-sm-12 mb-5" key={index}>
              <div
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                }}
              >
                <img
                  src={item.icon}
                  alt={item.title}
                  style={{ width: "110px", marginRight: "25px" }}
                />
                <div>
                  <h3
                    style={{
                      fontSize: "26px",
                      fontWeight: "500",
                      marginBottom: "10px",
                      color: "#424242",
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    style={{
                      fontSize: "20px",
                      color: "#666",
                      lineHeight: "1.7",
                    }}
                  >
                    {item.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center" style={{ marginTop: "20px" }}>
          <button
            style={{
              backgroundColor: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "16px 42px",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            Explore Investments
          </button>
        </div>
      </div>

      <div
        style={{
          backgroundColor: "#fbfbfb",
          paddingTop: "80px",
          paddingBottom: "80px",
        }}
      >
        <div className="container">
          <h2
            style={{
              fontSize: "32px",
              fontWeight: "500",
              textAlign: "center",
              color: "#424242",
            }}
          >
            Steps to open a demat account with Zerodha
          </h2>

          <div className="row align-items-center" style={{ marginTop: "50px" }}>
            <div className="col-lg-6 col-md-12 text-center">
              <img
                src="/media/steps-acop.svg"
                alt="Steps"
                style={{ width: "85%" }}
              />
            </div>

            <div className="col-lg-6 col-md-12" style={{ marginTop: "20px" }}>
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "22px 0",
                  borderBottom: "1px solid #e6e6e6",
                }}
              >
                <span
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#666",
                    marginRight: "20px",
                  }}
                >
                  01
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#424242",
                  }}
                >
                  Enter the requested details
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "22px 0",
                  borderBottom: "1px solid #e6e6e6",
                }}
              >
                <span
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#666",
                    marginRight: "20px",
                  }}
                >
                  02
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#424242",
                  }}
                >
                  Complete e-sign & verification
                </span>
              </div>

              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  padding: "22px 0",
                  borderBottom: "1px solid #e6e6e6",
                }}
              >
                <span
                  style={{
                    width: "52px",
                    height: "52px",
                    borderRadius: "50%",
                    border: "1px solid #ddd",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "20px",
                    color: "#666",
                    marginRight: "20px",
                  }}
                >
                  03
                </span>
                <span
                  style={{
                    fontSize: "24px",
                    color: "#424242",
                  }}
                >
                  Start investing!
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ paddingTop: "80px", paddingBottom: "80px" }}
      >
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 text-center">
            <img
              src="/media/acop-benefits.svg"
              alt="Benefits"
              style={{ width: "72%" }}
            />
            <h2
              style={{
                fontSize: "32px",
                fontWeight: "500",
                textAlign: "center",
                color: "#424242",
                marginTop: "30px",
              }}
            >
              Benefits of opening a Zerodha demat account
            </h2>
          </div>

          <div className="col-lg-6 col-md-12" style={{ marginTop: "20px" }}>
            {benefits.map((item, index) => (
              <div key={index} style={{ marginBottom: "50px" }}>
                <h3
                  style={{
                    fontSize: "28px",
                    fontWeight: "500",
                    marginBottom: "14px",
                    color: "#424242",
                  }}
                >
                  {item.title}
                </h3>
                <p
                  style={{
                    fontSize: "20px",
                    color: "#666",
                    lineHeight: "1.9",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "60px" }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "500",
            textAlign: "center",
            color: "#424242",
          }}
        >
          Explore different account types
        </h2>

        <div className="row" style={{ marginTop: "50px" }}>
          {accountTypes.map((item, index) => (
            <div className="col-lg-4 col-md-6 col-sm-12 mb-4" key={index}>
              <div
                style={{
                  position: "relative",
                  borderRadius: "6px",
                  padding: "34px 28px",
                  minHeight: "220px",
                  backgroundColor: "#fff",
                  border: item.active
                    ? "1px solid #387ed1"
                    : "1px solid #e6e6e6",
                  boxShadow: item.active
                    ? "0 0 0 1px rgba(56,126,209,0.15)"
                    : "none",
                }}
              >
                <div
                  style={{
                    position: "absolute",
                    left: "-14px",
                    top: "28px",
                    width: "40px",
                    height: "40px",
                    borderRadius: "50%",
                    backgroundColor: "#fff",
                    border: "1px solid #edf2ff",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                    fontSize: "22px",
                  }}
                >
                  {item.icon}
                </div>

                <h3
                  style={{
                    fontSize: "22px",
                    fontWeight: "500",
                    marginBottom: "20px",
                    color: "#424242",
                  }}
                >
                  {item.title}
                </h3>

                <p
                  style={{
                    fontSize: "18px",
                    color: "#666",
                    lineHeight: "1.8",
                  }}
                >
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div
        className="container"
        style={{ paddingTop: "20px", paddingBottom: "70px" }}
      >
        <h2
          style={{
            fontSize: "32px",
            fontWeight: "500",
            textAlign: "left",
            color: "#424242",
            marginBottom: "30px",
          }}
        >
          FAQs
        </h2>

        {faqData.map((item, index) => (
          <div
            key={index}
            style={{
              borderTop: "1px solid #eee",
              paddingTop: "0",
              marginBottom: "20px",
            }}
          >
            <div
              style={{
                width: "105px",
                height: "4px",
                backgroundColor: "#387ed1",
                marginBottom: "18px",
              }}
            ></div>

            <button
              onClick={() => setOpenFaq(openFaq === index ? -1 : index)}
              style={{
                width: "100%",
                background: "none",
                border: "none",
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "0",
                cursor: "pointer",
                textAlign: "left",
              }}
            >
              <span
                style={{
                  fontSize: "22px",
                  color: "#424242",
                  fontWeight: "500",
                  lineHeight: "1.6",
                }}
              >
                {item.question}
              </span>

              <span
                style={{
                  fontSize: "24px",
                  color: "#666",
                  marginLeft: "20px",
                }}
              >
                {openFaq === index ? "⌃" : "⌄"}
              </span>
            </button>

            {openFaq === index && (
              <div style={{ paddingTop: "20px", paddingBottom: "8px" }}>
                {item.answer}
              </div>
            )}
          </div>
        ))}

        <div className="text-center" style={{ marginTop: "90px" }}>
          <h2
            style={{
              fontSize: "54px",
              fontWeight: "500",
              marginBottom: "20px",
              color: "#424242",
            }}
          >
            Open a Zerodha account
          </h2>

          <p
            style={{
              fontSize: "24px",
              color: "#666",
              marginBottom: "28px",
              lineHeight: "1.7",
            }}
          >
            Simple and intuitive apps · ₹0 for investments · ₹20 for intraday
            and F&O trades.
          </p>

          <button
            style={{
              backgroundColor: "#387ed1",
              color: "#fff",
              border: "none",
              borderRadius: "4px",
              padding: "16px 42px",
              fontSize: "22px",
              fontWeight: "500",
            }}
          >
            Signup for free
          </button>
        </div>
      </div>
    </div>
  );
}

export default SignUp;
