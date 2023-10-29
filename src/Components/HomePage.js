import React from "react";
import Header from "./Header.js";
import AboutMe from "./AboutMe.js";
import Experiences from "./Experiences.js";
import Projects from "./Projects.js";
import Certifications from "./Certifications.js";
import Skills from "./Skills.js";
import Footer from "./Footer.js";
import NavBar from "./NavBar.js";
import Headroom from "react-headroom";
import style from "./style.module.css";


function HomePage() {
  return (
    <div style={{zIndex:"-1"}}>
      <Header></Header>   
        <NavBar></NavBar>
       <AboutMe></AboutMe>
      <Experiences></Experiences>
      <Projects></Projects>
      <Certifications></Certifications>
      <Skills></Skills>
      <Footer></Footer>
    </div>
  );
}

export default HomePage;
