import React from "react";
import PZT from "../../images/PZT.png";
import YMW from "../../images/YMW.jpg";
import { Link } from "react-router-dom";

const AboutUs = () => {
  return (
    <div
      className="intro container CL_container"
      // style={{ width: " 60%", display: "block", marginLeft: "20%" }}
    >
      <div className="content p-4">
        <h1 className="text-center">Lights, camera, action! </h1>
        <div className="text-center mt-3">
          Welcome to a world where creativity knows no bounds and storytelling
          takes center stage. We are the passionate minds behind Chillax, a
          cinematic journey that promises to captivate your senses and transport
          you to realms unknown. Join us as we unravel the magic behind the lens
          and embark on an unforgettable adventure in the world of film.
        </div>
      </div>
      <h2 className="text-center mt-4">Meet The Team</h2>
      <div
        className="team mt-4"
        style={{
          width: "60%",
          marginLeft: "20%",
          display: "flex",
          justifyContent: "space-around",
        }}
      >
        <div>
          <img
            src={YMW}
            alt=""
            style={{
              height: "180px",
              marginBottom: "20px",
              border: "solid 2px",
              borderRadius: "50%",
            }}
          />
          <p className="fw-bold ms-4 ps-3">Yair Marn Win</p>
        </div>
        <div>
          <img
            src={PZT}
            alt=""
            style={{
              height: "180px",
              marginBottom: " 20px",
              border: "solid 2px",
              borderRadius: "50%",
            }}
          />
          <p className="fw-bold ms-4 ps-2">Phyu Zin Thant</p>
        </div>
      </div>
      <h5 className="batch" style={{ margin: "20px", textAlign: "center" }}>
        <Link
          to={`https://simbolomm.com/`}
          target="_blank"
          style={{ textDecoration: "none", color: "#132328" }}
        >
          Simbolo
        </Link>{" "}
        React Batch - 2
      </h5>
    </div>
  );
};

export default AboutUs;
