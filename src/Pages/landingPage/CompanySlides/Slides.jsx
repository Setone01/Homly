import React from "react";
// import Slider from "react-slick";
// import "slick-carousel/slick/slick.css";
// import "slick-carousel/slick/slick-theme.css";
import evergreen from "../../../asset/images/evergreen.svg";
import lafayette from "../../../asset/images/lafayyete.svg";
import bakens from "../../../asset/images/bakens.svg";
import shekinah from "../../../asset/images/shekina.svg";
import omezie from "../../../asset/images/omeiza.svg";
import greenbox from "../../../asset/images/greenbox.svg";
import quora from "../../../asset/images/quora.svg";

const Slides = () => {
 
  return (
    <div className="wrapper">
      <div className="slider">
        <div className="slide-track">
          <div className="slide">
            <img src={omezie} alt="" />
          </div>
          <div className="slide">
            <img src={lafayette} alt="" />
          </div>
          <div className="slide">
            <img src={greenbox} alt="" />
          </div>
          <div className="slide">
            <img src={quora} alt="" />
          </div>
          <div className="slide">
            <img src={bakens} alt="" />
          </div>
          <div className="slide">
            <img src={evergreen} alt="" />
          </div>
          <div className="slide">
            <img src={shekinah} alt="" />
          </div>
        </div>

      </div>
    </div>
  );
};

export default Slides;
