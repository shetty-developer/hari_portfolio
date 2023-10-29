import React from "react";
import tcslogo from "../images/tcslogo.png";
import style from "./style.module.css";

function Experiences() {
  return (
    <div id="experiences" style={{ marginLeft: "29px" }}>
      <div
        className="fullname"
        style={{ display: "flex", textAlign: "center", marginLeft: "532px" }}
      >
        <h1
          className="firstname"
          style={{ color: "#ff5f6d", fontSize: "40px", textAlign: "center" }}
        >
          Experi
        </h1>
        <h1
          className="secondname"
          style={{ fontSize: "40px", textAlign: "center", color: "#ffc371" }}
        >
          ences
        </h1>
      </div>
      <div className="exp-cards" style={{ display: "flex" }}>
        <div
          className="first-card "
          style={{
            borderStyle: "none",
            borderRadius: "6px",
            marginLeft: "40px",
            marginRight: "4px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "5px 5px 5px 5px #888888",
            width: "540px",
            height: "500px",
          }}
        >
          <div
            className="company-logo-part"
            style={{ marginLeft: "220px", marginTop: "40px" }}
          >
            <img style={{ width: "80px", height: "60px" }} src={tcslogo}></img>
          </div>
          {/* <div className="company-name">TCS</div> */}

          <div style={{ marginLeft: "40px" ,marginTop:"40px"}} className="role">
            <span style={{ color: "#ff5f6d", fontSize: "28px" }}>Software</span>{" "}
            <span style={{ color: "#ffc371", fontSize: "28px" }}>Engineer</span>{" "}
          </div>

          <div
            className="company-duration"
            style={{
              fontWeight: "lighter",
              fontSize: "22px",
              marginLeft: "40px",
              marginTop:"4px"
            }}
          >
            June 2020- December 2013
          </div>

          <ul style={{marginLeft:"60px",marginTop:"16px"}} className="company-key-points">
            <li>IT specalist</li>
            <li>full stack developer</li>
            <li>Frontend developer</li>
          </ul>
        </div>

        <div
          className="first-card "
          style={{
            borderStyle: "none",
            borderRadius: "6px",
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "5px 5px 5px 5px #888888",
            width: "540px",
            height: "500px",
          }}
        >
          <div
            className="company-logo-part"
            style={{ marginLeft: "220px", marginTop: "40px" }}
          >
            <img style={{ width: "80px", height: "60px" }} src={tcslogo}></img>
          </div>
          {/* <div className="company-name">TCS</div> */}

          <div style={{ marginLeft: "40px" ,marginTop:"40px"}} className="role">
            <span style={{ color: "#ff5f6d", fontSize: "28px" }}>Software</span>{" "}
            <span style={{ color: "#ffc371", fontSize: "28px" }}>Engineer</span>{" "}
          </div>

          <div
            className="company-duration"
            style={{
              fontWeight: "lighter",
              fontSize: "22px",
              marginLeft: "40px",
              marginTop:"4px"
            }}
          >
            June 2020- December 2013
          </div>

          <ul style={{marginLeft:"60px",marginTop:"16px"}} className="company-key-points">
            <li>IT specalist</li>
            <li>full stack developer</li>
            <li>Frontend developer</li>
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Experiences;
