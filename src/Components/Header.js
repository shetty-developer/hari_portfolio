import React from "react";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import github from "../images/github.png";
import style from "./style.module.css";

function Header() {
  return (
    <div id="header">
      <div style={{ fontSize: "80px", textAlign: "center", marginTop: "90px" }}>
        Hari Babu Peketi
      </div>

      <h3 style={{ fontSize: "40px", textAlign: "center" }}>Love coding ❤️</h3>

      <div
        className="icons-links"
        style={{ marginTop: "44px", marginLeft: "55px" }}
      >
        <a
          href="https://www.linkedin.com/in/hari-babu-peketi-a07b84224"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img
            className="linkedin-logo"
            src={linkedin}
            style={{
              width: "35px",
              height: "35px",
              marginLeft: "510px",
            }}
          ></img>
        </a>

        <a
          href=" https://github.com/haribabupeketi"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img
            className="github-logo"
            src={github}
            style={{ width: "35px", height: "35px", marginLeft: "20px" }}
          ></img>{" "}
        </a>

        <a
          href=" https://www.facebook.com/profile.php?id=100024121663576&mibextid=ZbWKwL"
          target="_blank"
          style={{ textDecoration: "none" }}
        >
          <img
            className="facebook-logo"
            src={facebook}
            style={{ width: "35px", height: "35px", marginLeft: "20px" }}
          ></img>
        </a>
      </div>

      <div
        className="learn-more-button"
        style={{
          marginLeft: "540px",
          marginTop: "54px",
          marginBottom: "210px",
        }}
      >
        <a className={style.learnmore} href="#aboutme">
          Learn More
        </a>
      </div>
    </div>
  );
}

export default Header;
