import React, { useEffect } from "react";
import TestimonialUI from "./TestimonialUI";
// Slide Images
import Okoli1 from "../../../asset/images/okoli1.png"
import Okoli2 from "../../../asset/images/okoli2.png"
import Okoli3 from "../../../asset/images/okoli3.png"
import Okoli4 from "../../../asset/images/okoli4.png"
// end

import Slider from "react-slick";
import Aos from "aos";
import "aos/dist/aos.css";

const Testimonial = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  const settings = {
    dots: true,
    arrows: false,
    infinite: true,
    speed: 500,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    responsive: [
      {
        breakpoint: 1300,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
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
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
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
    <div className="w-screen max-h-max bg-white py-12 z-20">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
        <div className=" mb-10" data-aos="zoom-in"
          data-aos-duration="2500">
          <h1 className="text-black text-center text-3xl font-medium">
            Testimonials
          </h1>
          <p className="text-sm font-normal mt-1">
            See what they are saying about us
          </p>
        </div>
        <div
          className="w-full items-center mx-auto"
          data-aos="zoom-in"
          data-aos-duration="2500"
        >
          <Slider {...settings}>
            <TestimonialUI
              name={"Okoli"}
              img={Okoli1}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Okoli2}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Okoli3}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Okoli4}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
          </Slider>
        </div>
      </div>
    </div>
  );
};

export default Testimonial;
