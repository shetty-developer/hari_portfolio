import React from "react";
import profilepicture from "../images/profile_picture.png";
import "../style.css";
import style from "./style.module.css";

function AboutMe() {
  return (
    <div
      id="aboutme"
      style={{
        borderStyle: "none",
        borderRadius: "6px",
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "20px",
        marginBottom: "80px",
        boxShadow: "5px 5px 5px 5px #888888",
      }}
    >
      <div
        className="fullname"
        style={{ display: "flex", textAlign: "center", marginLeft: "536px" }}
      >
        <h1
          className="firstname"
          style={{ color: "#ff5f6d", fontSize: "40px", textAlign: "center" }}
        >
          Abo
        </h1>
        <h1
          className="secondname"
          style={{ fontSize: "40px", textAlign: "center", color: "#ffc371" }}
        >
          ut Me
        </h1>
      </div>
      <div className="full-part" style={{ display: "flex" }}>
        <div className="left-part">
          <img
            src={profilepicture}
            alt="profile-picture"
            className="profile-image"
            style={{ width: "250px", height: "200px", borderRadius: "20px" }}
          ></img>
        </div>
        <div className="right-part" style={{ padding: "20px" }}>
          <p>
            I'm Sharan, and I'd describe myself as someone who enjoys tinkering
            with scripts. I'm a self-motivated individual who takes the 'Don't
            Repeat Yourself' (DRY) principle to heart. I have a penchant for
            automating even the most minor
            <br></br> tasks to minimize manual effort.I come with a wealth of
            experience as a software developer,
            <br></br>specializing in building and maintaining web applications.
            My foundation in computer science is
            <br></br>robust, and I'm proficient in various programming languages
            and frameworks, including Golang,
            <br></br>Python, Java, ReactJS, and Angular. I'm well-versed in
            containerizing applications and managing
            <br></br>distributed version control systems. I also have a solid
            grasp of design patterns, adhere to SOLID
            <br></br>principles, and am adept at utilizing AWS services. I'm
            passionate about keeping abreast of the latest developments in
          </p>
        </div>
      </div>

      <a
        className={style.resumebutton}
        href="https://drive.google.com/file/d/1PmizHI3sYBoAM8EvtqCnF7t67xRQPaql/view?usp=drivesdk"
        target="_blank"
      >
        Resume
      </a>

      <div style={{width:"100px",height:"20px"}}></div>
    </div>
  );
}  

export default AboutMe;
