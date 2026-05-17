import React from "react";

function LeftSection({
  imageURL,
  productName,
  productDescription,
  tryDemo,
  learnMore,
  googlePlay,
  appStore,
}) {
  return (
    <div
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="row align-items-center">
        <div className="col-lg-7">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>

        <div className="col-lg-5">
          <h2
            style={{
              fontSize: "2.8rem",
              color: "#424242",
              fontWeight: "500",
              marginBottom: "30px",
            }}
          >
            {productName}
          </h2>

          <p
            style={{
              fontSize: "1.3rem",
              lineHeight: "1.8",
              color: "#424242",
              marginBottom: "30px",
            }}
          >
            {productDescription}
          </p>

          <div style={{ marginBottom: "30px" }}>
            {tryDemo && (
              <a
                href="/#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                  marginRight: "40px",
                }}
              >
                {tryDemo} →
              </a>
            )}

            {learnMore && (
              <a
                href="/#"
                style={{
                  color: "#387ed1",
                  textDecoration: "none",
                  fontSize: "1.2rem",
                }}
              >
                {learnMore} →
              </a>
            )}
          </div>

          <div>
            {googlePlay && (
              <img
                src={googlePlay}
                alt="Google Play"
                style={{ width: "180px", marginRight: "20px" }}
              />
            )}

            {appStore && (
              <img src={appStore} alt="App Store" style={{ width: "180px" }} />
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeftSection;
