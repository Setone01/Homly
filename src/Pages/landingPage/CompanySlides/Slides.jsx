import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import evergreen from "../../../asset/images/evergreen.svg";
import lafayette from "../../../asset/images/lafayyete.svg";
import bakens from "../../../asset/images/bakens.svg";
import shekinah from "../../../asset/images/shekina.svg";
import omezie from "../../../asset/images/omeiza.svg";
import greenbox from "../../../asset/images/greenbox.svg";
import quora from "../../../asset/images/quora.svg";

const Slides = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 5,
    slidesToScroll: 4,
    autoplay: true,
    speed: 5000,
    autoplaySpeed: 2000,
    cssEase: "linear",
  };
  return (
    <div className=" h-20 bg-colorGrey">
      <Slider {...settings}>
        <div className=" max-w-max items-center">
          <img
            className=" flex justify-center text-center m-[0 auto] h-[30px]"
            src={omezie}
            alt=""
          />
        </div>
        <div className="max-w-max items-center">
          <img
            className=" flex justify-center text-center m-[0 auto] h-[30px]"
            src={lafayette}
            alt=""
          />
        </div>
        <div className="max-w-max border-2">
          <img
            className=" flex justify-center items-center text-center m-[0 auto] h-[20px]"
            src={greenbox}
            alt=""
          />
        </div>
        <div className="max-w-max border-2">
          <img
            className=" flex justify-center items-center text-center m-[0 auto] h-[20px]"
            src={quora}
            alt=""
          />
        </div>
        <div className="max-w-max border-2">
          <img
            className="flex justify-center items-center text-center m-[0 auto] h-[20px]"
            src={bakens}
            alt=""
          />
        </div>
        <div className="max-w-max border-2">
          <img
            className="flex justify-center items-center text-center m-[0 auto] h-[20px]"
            src={evergreen}
            alt=""
          />
        </div>
        <div className="max-w-max border-2">
          <img
            className="flex justify-center items-center text-center m-[0 auto] h-[20px]"
            src={shekinah}
            alt=""
          />
        </div>
      </Slider>
    </div>
  );
};

export default Slides;
