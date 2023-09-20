import React from "react";
import Error from "../../images/Error.png";
import { Link } from "react-router-dom";

const Missing = () => {
  return (
    <>
      <div className="container" style={{ display: "block", height: "80vh" }}>
        <img
          src={Error}
          alt=""
          style={{ height: "200px", marginTop: "100px", marginLeft: "42%" }}
        />
        <p
          style={{
            fontSize: "100px",
            fontStyle: "italic",
            textAlign: "center",
          }}>
          Page is not Found.
        </p>
        <h3
          style={{
            fontSize: "30px",
            fontStyle: "italic",
            textAlign: "center",
          }}>
          Go to
          <Link to="/" style={{ textDecoration: "none", color:'#e4dbb4' }}>
            {" "}
            Home
          </Link>{" "}
        </h3>
      </div>
    </>
  );
};

export default Missing;

// , justifyContent: 'center', alignItems: 'center'
