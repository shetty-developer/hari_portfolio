import React from "react";
import { useState } from "react";
import style from "./style.module.css";

function Skills() {
  const [number, setNumber] = useState(1);
  const [bgcolor, setBgColor] = useState({
    1: "black",
    2: "white",
    3: "white",
  });
  const [txtcolor, setTxtColor] = useState({
    1: "white",
    2: "black",
    3: "black",
  });

  return (
    <div className={style.skills}>
      <div className={style.fullname}>
        <h1 className={style.firstname}>Ski</h1>
        <h1 className={style.secondname}>lls</h1>
      </div>

      <div className={style.skillsinfo}>
        <div>
          <button
            className={style.programmingbutton}
            onClick={() => {
              setNumber(1);
              setBgColor({
                1: "black",
                2: "white",
                3: "white",
              });
              setTxtColor({
                1: "white",
                2: "black",
                3: "black",
              });
            }}
            style={{
              backgroundColor: bgcolor[1],
              color: txtcolor[1],
            }}
          >
            Programming Languages
          </button>

          {number === 1 ? (
            <div className={style.programminglist}>
              <div>Javascript</div>
              <div>Java</div>
              <div>C</div>
              <div>Python</div>
            </div>
          ) : null}
        </div>
        <div>
          <button
            className={style.technologyandframeworksbutton}
            onClick={() => {
              setNumber(2);
              setBgColor({
                1: "white",
                2: "black",
                3: "white",
              });
              setTxtColor({
                1: "black",
                2: "white",
                3: "black",
              });
            }}
            style={{
              backgroundColor: bgcolor[2],
              color: txtcolor[2],
            }}
          >
            Technology and Frameworks
          </button>
          {number === 2 ? (
            <div className={style.frameworkslist}>
              <div>React js</div>
              <div>Bootstrap</div>
            </div>
          ) : null}
        </div>
        <div>
          <button
            className={style.softskillsbutton}
            onClick={() => {
              setNumber(3);
              setBgColor({
                1: "white",
                2: "white",
                3: "black",
              });
              setTxtColor({
                1: "black",
                2: "black",
                3: "white",
              });
            }}
            style={{
              backgroundColor: bgcolor[3],
              color: txtcolor[3],
            }}
          >
            Soft Skills
          </button>

          {number === 3 ? (
            <div className={style.softskillslist}>
              <div>Communication Skills</div>
              <div>Collaboration</div>
              <div>Positivity</div>
              <div>Problem Solving</div>
              <div>Creativity</div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Skills;
