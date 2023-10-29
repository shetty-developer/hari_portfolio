import React from "react";
import style from "./style.module.css";

function NavBar() {
  return (
    <div className={style.navbar} style={{marginTop:"40px",backgroundColor:"black",color:"white"}}>
      <div style={{ display: "flex" }}>
        <a href="#header"
          className="fullname"
          style={{ display: "flex", textAlign: "center",textDecoration:"none"}}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Ha
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            ri
          </h1>
        </a>
        <a href="#aboutme"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"620px",textDecoration:"none" }}

         
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6f", fontSize: "20px", textAlign: "center" }}
          >
            Abo
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            ut
          </h1>
        </a>
        <a href="#experiences"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"20px" ,textDecoration:"none"}}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Exper
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            iences
          </h1>
        </a>
        <a href="#projects"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"20px",textDecoration:"none"}}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Pro
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            jects
          </h1>
        </a>
        <a href="#certifications"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"20px",textDecoration:"none"}}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Certifi
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            cations
          </h1>
        </a>
        <a href="#skills"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"20px",textDecoration:"none" }}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Ski
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            lls
          </h1>
        </a>
        <a href='https://drive.google.com/file/d/1PmizHI3sYBoAM8EvtqCnF7t67xRQPaql/view?usp=drivesdk' target="_blank"
          className="fullname"
          style={{ display: "flex", textAlign: "center",marginLeft:"20px",textDecoration:"none" }}
        >
          <h1
            className="firstname"
            style={{ color: "#ff5f6d", fontSize: "20px", textAlign: "center" }}
          >
            Res
          </h1>
          <h1
            className="secondname"
            style={{ fontSize: "20px", textAlign: "center", color: "#ffc371" }}
          >
            ume
          </h1>
        </a>
      </div>
    </div>
  );
}

export default NavBar;
