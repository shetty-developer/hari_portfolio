import React from "react";
import style from "./style.module.css";

function Projects() {
  return (
    <div
      id="projects"
      style={{
        borderStyle: "none",
        borderRadius: "6px",
        marginLeft: "40px",
        marginRight: "40px",
        marginTop: "20px",
        marginBottom: "20px",
        boxShadow: "5px 5px 5px 5px #888888",
      }}
    >
      <div
        className="fullname"
        style={{ display: "flex", textAlign: "center", marginLeft: "100vh" }}
      >
        <h1
          className="firstname"
          style={{ color: "#ff5f6d", fontSize: "40px", textAlign: "center" }}
        >
          Pro
        </h1>
        <h1
          className="secondname"
          style={{ fontSize: "40px", textAlign: "center", color: "#ffc371" }}
        >
          jects
        </h1>
      </div>
      <div className="all-sub" style={{ display: "flex" }}>
        <div
          className="project-info-1"
          style={{
            padding: "20px",
            borderStyle: "none",
            borderRadius: "6px",
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "5px 5px 5px 5px #888888",
          }}
        >
          <h3>
            <span style={{ color: "#ff5f6d" }}>USAA-(UNITES STATES</span>{" "}
            <span style={{ color: "#ffc371" }}>AUTOMOBILE ASSOCIATION</span>)
          </h3>

          <div className="project-description-1 " style={{ marginTop: "10px" }}>
            <p style={{ fontWeight: "bold" }}>
              The mission of the association is to facilitate the financial
              security of its members, <br></br>associates, and their families
              through provision of a full range of highly competitive <br></br>
              financial products and services; in so doing, USAA seeks to be the
              provider of choice <br></br>for the military community.
            </p>
            <div className="info-1">
              <a className={style.sourcecode} href="" target="_blank">
                Source-Code
              </a>
            </div>
          </div>
        </div>
        <div
          className="project-info-2"
          style={{
            padding: "20px",
            borderStyle: "none",
            borderRadius: "6px",
            marginLeft: "40px",
            marginRight: "40px",
            marginTop: "20px",
            marginBottom: "20px",
            boxShadow: "5px 5px 5px 5px #888888",
          }}
        >
          <h3>
            <span style={{ color: "#ff5f6d" }}>CME</span>
            <span style={{ color: "#ffc371" }}>
              (Chichago Merchantile-Exchange)
            </span>
          </h3>

          <div className=" project-description-2" style={{ marginTop: "10px" }}>
            <p style={{ fontWeight: "bold" }}>
              CME Project is a four-year, NSF-funded, comprehensive high school
              mathematics program <br></br>that is problem-based,
              student-centered, and organized around the familiar themes of
              Algebra 1, <br></br>Geometry, Algebra 2, and Precalculus.
            </p>
            <div className="info-2" style={{ padding: "10px" }}>
              <a className={style.sourcecode} href="" target="_blank">
                Source-Code
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Projects;
