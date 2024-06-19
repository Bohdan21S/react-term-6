import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "../assets/styles/Karuselka.css";
import img1 from "../assets/images/image1.jpg";
import img2 from "../assets/images/image2.jpg";
import img3 from "../assets/images/image3.jpg";

function Karuselka() {
  return (
    <Carousel fade>
      <Carousel.Item>
        <img className="d-block w-100" src={img1} alt="First slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img2} alt="Second slide" />
      </Carousel.Item>
      <Carousel.Item>
        <img className="d-block w-100" src={img3} alt="Third slide" />
      </Carousel.Item>
    </Carousel>
  );
}

export default Karuselka;
