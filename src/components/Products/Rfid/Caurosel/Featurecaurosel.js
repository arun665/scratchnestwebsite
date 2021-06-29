import React from "react";
import { Fade } from "react-slideshow-image";
import "./Caurosel.css";
import "react-slideshow-image/dist/styles.css";

const fadeImages = [
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618752126/irp1_featuregallery.jpg",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618752127/irp1_featuregallery2.jpg",
  "https://res.cloudinary.com/dpysmqax5/image/upload/v1618752240/irp1_featurgallery3.jpg",
];

const Featurecaurosel = () => {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[0]} alt="" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[1]} alt="" />
          </div>
        </div>
        <div className="each-fade">
          <div className="image-container">
            <img src={fadeImages[2]} alt="" />
          </div>
        </div>
      </Fade>
    </div>
  );
};
export default Featurecaurosel;
