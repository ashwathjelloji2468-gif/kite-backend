import React from "react";

function RightSection({
  imageURL,
  productName,
  productDescription,
  learnMore,
}) {
  return (
    <div
      className="container"
      style={{ paddingTop: "80px", paddingBottom: "80px" }}
    >
      <div className="row align-items-center">
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

        <div className="col-lg-7">
          <img src={imageURL} alt={productName} style={{ width: "100%" }} />
        </div>
      </div>
    </div>
  );
}

export default RightSection;
