import React from "react";
import TestimonialUI from "./TestimonialUI";
import Inyang from "../../../asset/images/inyang.svg";
import Slider from "react-slick";

const Testimonial = () => {
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
        <div className=" mb-10">
          <h1 className="text-black text-center text-3xl font-medium">
            Testimonials
          </h1>
          <p className="text-sm font-normal mt-1">
            See what they are saying about us
          </p>
        </div>
        <div className="w-full items-center mx-auto">
          <Slider {...settings}>
            <TestimonialUI
              name={"Okoli"}
              img={Inyang}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Inyang}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Inyang}
              role={"FM, Greenbox"}
              comment={
                "Since I started using the Homly app, I have been able to send information swiftly to any of my residents without having to meet them in person."
              }
            />
            <TestimonialUI
              name={"Okoli"}
              img={Inyang}
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
