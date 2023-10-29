import React from "react";
import linkedin from "../images/linkedin.png";
import facebook from "../images/facebook.png";
import github from "../images/whitegithublogo.png";
import call from "../images/call.png";
import gmail from "../images/gmail.png";
import style from "./style.module.css";

function Footer() {
  return (
    <div className={style.footer}>
      <h1 className={style.footerName}>Get In Touch</h1>

      <h6 className={style.footerlineone}>
        I have a strong enthusiasm for creating scalable and easily maintainable
        applications using the latest technologies. Currently, I am
      </h6>
      <h6 className={style.footerlinetwo}>
        actively seeking opportunities in the fields of Software Development and
        DevOps. If you are aware of any open positions, have
      </h6>
      <h6 className={style.footerlinethree}>
        inquiries, or simply want to connect and say hello, please don't
        hesitate to get in touch with me!
      </h6>

      <div className={style.footerlinks}>
        <a href="tel:+917013140698" target="_blank">
          <img src={call} className={style.phoneimage} alt="linkedinimage"></img>
        </a>
        <h6 className={style.mobileno} alt="mobile no">
          +91 7013140698
        </h6>
        <a
          href=" https://www.linkedin.com/in/hari-babu-peketi-a07b84224"
          target="_blank"
        >
          <img
            src={linkedin}
            className={style.linkedinimage}
            alt="linkedinimage"
          ></img>
        </a>
        <h6 className={style.linkedinname} alt="linkedname name">
          linkedin
        </h6>
        <a href="https://github.com/haribabupeketi" target="_blank">
          <img src={github} className={style.githubimage} alt="github"></img>
        </a>
        <h6 className={style.githubname} alt="site name">
          Github
        </h6>
        <a
          href="https://www.facebook.com/profile.php?id=100024121663576&mibextid=ZbWKwL"
          target="_blank"
        >
          <img
            src={facebook}
            className={style.facebookimage}
            alt="facebookimage"
          ></img>
        </a>

        <h6 className={style.facebookname} alt="site name">
          Facebook
        </h6>

        <a href="mailto:haribabupeketi99@gmail.com" target="_blank">
          <img src={gmail} className={style.gmailimage} alt="gmail-image"></img>
        </a>
        <h6 className={style.gmailname} alt="site name">
          Gmail
        </h6>
      </div>
    </div>
  );
}

export default Footer;
