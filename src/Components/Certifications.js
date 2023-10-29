import React from "react";
import ScrollCarousel from "scroll-carousel-react";
import certificate_one from "../images/certificate_one.jpg";
import certificate_two from "../images/certificate_two.jpg";
import certificate_three from "../images/certificate_three.jpg";
import style from "./style.module.css";



function Certifications() {
  const images = [
    {
      id: 1,
      src: certificate_one,
      alt: "Image 1",
    },
    {
      id: 2,
      src: certificate_two,
      alt: "Image 2 ",
    },
    {
      id: 3,
      src: certificate_three,
      alt: "Image 3",
    },
  ];

  return (
    <div
      id="certifications"
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
        style={{ display: "flex", textAlign: "center", marginLeft: "530px" }}
      >
        <h1
          className="firstname"
          style={{ color: "#ff5f6d", fontSize: "40px", textAlign: "center" }}
        >
          Certifi
        </h1>
        <h1
          className="secondname"
          style={{ fontSize: "40px", textAlign: "center", color: "#ffc371" }}
        >
          cations
        </h1>
      </div>
      <div style={{margin:"20px"}}>
      <ScrollCarousel
        autoplay 
        autoplaySpeed={-0.5}
        speed={-0.5}
        direction="ltr"
      >
        {images.map((item) => (
          <div
            key={item}
            className="bg-blue-300/20 border-2 border-blue-300/70 rounded h-20 w-20"
          >
            <img src={item.src} alt={item.alt}></img>
          </div>
        ))}
      </ScrollCarousel>
      </div>
    </div>
  );
}

export default Certifications;
