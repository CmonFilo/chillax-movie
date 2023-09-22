import React from "react";
import PZT from "../../images/PZT.png";
import YMW from "../../images/YMW.jpg";

const AboutUs = () => {
  return (
    <div
      className="intro container CL_container"
      // style={{ width: " 60%", display: "block", marginLeft: "20%" }}
    >
      <h1 style={{ textAlign: "center", marginTop: "40px" }}>
        Lights, camera, action!{" "}
      </h1>
      <div style={{ marginTop: "20px", textAlign: "center" }}>
        Welcome to a world where creativity knows no bounds and storytelling
        takes center stage. We are the passionate minds behind Chillax, a
        cinematic journey that promises to captivate your senses and transport
        you to realms unknown. Join us as we unravel the magic behind the lens
        and embark on an unforgettable adventure in the world of film.
      </div>
      <h3 style={{ margin: "40px", textAlign: "center" }}>Meet The Team</h3>
      <div
        className="team"
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
              marginBottom: "30px",
              border: "solid 2px",
              borderRadius: "50%",
            }}
          />
          <p style={{ margin: "10px", paddingLeft: "30px" }}>Yair Marn Win</p>
        </div>
        <div>
          <img
            src={PZT}
            alt=""
            style={{
              height: "180px",
              marginBottom: " 30px",
              border: "solid 2px",
              borderRadius: "50%",
            }}
          />
          <p style={{ margin: "10px", paddingLeft: "28px" }}>Phyu Zin Thant</p>
        </div>
      </div>
      <h5 className="batch" style={{ margin: "20px", textAlign: "center" }}>
        Simbolo React Batch - 2
      </h5>
    </div>
  );
};

export default AboutUs;
