import React from "react";
import Slider from "react-slick";
import Scroll from "./Scroll";
import Aos from "aos";
import "aos/dist/aos.css";

// scroll image
import screen1 from "../../../asset/images/mobile1.svg";
import { useEffect } from "react";


const ScreenScroll = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2500,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };

  return (
    <div className=" w-screen py-10 bg-bgGrey z-20">
      <div className=" w-[90%] mx-auto  pb-7">
        <div
          className=" text-white flex justify-center items-center flex-col mb-8"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <h1 className="text-primary text-center text-3xl font-medium">
            Our App Screenshots
          </h1>
          <span className="text-sm text-[#555452] font-normal mt-1">
            Take a tour of our app
          </span>
        </div>
        <div className="" data-aos="zoom-in" data-aos-duration="2500">
          <Slider {...settings}>
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            <Scroll image={screen1} />
            {/* <Scroll image={screen2} />
            <Scroll image={screen3} />
            <Scroll image={screen4} />
            <Scroll image={screen5} />
            <Scroll image={screen5} />
            <Scroll image={screen5} />
            <Scroll image={screen5} /> */}
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default ScreenScroll;
