import React, { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const ServicesTwo = ({ icon, heading, article, btn, image }) => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-[85%] mx-auto flex items-center vs:flex-col sm:flex-row-reverse  gap-8">
      <div
        className=" flex-1 justify-center flex-col"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <div className=" mb-3 ring-2 ring-white rounded-full max-w-max">
          <img className="w-16 p-4" src={icon} alt="" />
        </div>
        <div className=" text-white">
          <div className=" mb-4">
            <h5 className="font-semibold capitalize text-[20px] mb-2 font-[Fredoka] text-secondary">
              {heading}
            </h5>
            <p className="text-sm text-[12px] font-light">{article}</p>
          </div>
          <div className="outline-0">
            <button className="text-white text-[12px] hover:bg-secondary font-normal border border-white px-9 py-2 rounded-3xl outline-0">
              {btn}
            </button>
          </div>
        </div>
      </div>
      <div
        className="flex-1 items-center w-full h-full"
        data-aos="fade-right"
        data-aos-duration="3000"
      >
        <img className="w-full h-full" src={image} alt="" />
      </div>
    </div>
  );
};

export default ServicesTwo;
