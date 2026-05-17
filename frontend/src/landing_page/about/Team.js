 import React from "react";

function Team() {
  const people = [
    {
      name: "Nithin Kamath",
      role: "Founder, CEO",
      image: "https://zerodha.com/static/images/nithin-kamath.jpg",
      desc1:
        "Nithin bootstrapped and founded Zerodha in 2010 to overcome the hurdles he faced during his decade long stint as a trader. Today, Zerodha has changed the landscape of the Indian broking industry.",
      desc2:
        "He is a member of the SEBI Secondary Market Advisory Committee (SMAC) and the Market Data Advisory Committee (MDAC).",
      desc3: "Playing basketball is his zen.",
      links: ["Homepage", "TradingQnA", "Twitter"],
    },
  ];

  return (
    <div className="container" style={{ paddingTop: "100px", paddingBottom: "80px" }}>
      <div className="row text-center">
        <div className="col-12">
          <h2
            style={{
              fontSize: "2.6rem",
              fontWeight: "500",
              color: "#424242",
              marginBottom: "80px",
            }}
          >
            People
          </h2>
        </div>
      </div>

      <div className="row align-items-center" style={{ marginBottom: "100px" }}>
        <div className="col-lg-5 text-center">
          <img
            src={people[0].image}
            alt={people[0].name}
            style={{
              width: "320px",
              height: "320px",
              objectFit: "cover",
              borderRadius: "50%",
              margin: "0 auto 30px",
            }}
          />
          <h4 style={{ color: "#424242", fontWeight: "500", fontSize: "2rem" }}>
            {people[0].name}
          </h4>
          <p style={{ color: "#666", fontSize: "1.2rem", marginTop: "20px" }}>
            {people[0].role}
          </p>
        </div>

        <div className="col-lg-7" style={{ color: "#424242", fontSize: "1.2rem", lineHeight: "2" }}>
          <p>{people[0].desc1}</p>
          <p>{people[0].desc2}</p>
          <p>{people[0].desc3}</p>
          <p>
            Connect on{" "}
            <span style={{ color: "#387ed1" }}>Homepage</span> /{" "}
            <span style={{ color: "#387ed1" }}>TradingQnA</span> /{" "}
            <span style={{ color: "#387ed1" }}>Twitter</span>
          </p>
        </div>
      </div>

      <div className="row text-center">
        {people.slice(1).map((person, index) => (
          <div className="col-lg-4 col-md-6 mb-5" key={index}>
            <img
              src={person.image}
              alt={person.name}
              style={{
                width: "260px",
                height: "260px",
                objectFit: "cover",
                borderRadius: "50%",
                margin: "0 auto 25px",
              }}
            />
            <h4 style={{ color: "#424242", fontWeight: "500", fontSize: "1.8rem" }}>
              {person.name}
            </h4>
            <p style={{ color: "#666", fontSize: "1.1rem", marginTop: "15px" }}>
              {person.role}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Team;