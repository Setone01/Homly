import React, { useEffect } from "react";
import building from "../../../asset/images/buildingIcon.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Services = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-screen max-h-max z-20 bg-bgGrey pb-6" id="#how_it_works">
      <div className="w-[90%] mx-auto grid xs:grid-cols-1 sm:grid-cols-2 xs:gap-0 sm:gap-9">
        <div className="flex-1" data-aos="fade-down" data-aos-duration="3000">
          <img className="w-full h-full" src={building} alt="" />
        </div>
        <div className="flex justify-center flex-col flex-1 xs:pl-0 md:pl-6">
          <div
            className=" w-full mb-6 "
            data-aos="fade-up"
            data-aos-duration="3000"
          >
            <p className="text-[15px] text-textGrey font-light mb-4">
              There's a certain way of creating a service, hospitality, and
              experience that perpetuates people feeling like they matter. This
              is what motivates us in HOMLY, we pride ourselves in knowing our
              clients and partners matter.
            </p>
            <p className="text-[15px] font-light text-textGrey">
              We are trusted and reliable.
            </p>
          </div>
          <div
            className="flex flex-nowrap text-primaryText pb-4 gap-9"
            data-aos="zoom-in"
            data-aos-duration="3000"
          >
            <div className="flex justify-center items-center flex-col">
              {/* <span className="text-xs">over</span> */}
              <h1 className="text-2xl font-bold">9</h1>
              <span className="capitalize text-xs">communities</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              {/* <span className="text-xs">over</span> */}
              <h1 className="text-2xl font-bold">709</h1>
              <span className="capitalize text-xs">homes</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              {/* <span className="capitalize text-xs">facilities</span> */}
              <h1 className="text-2xl font-bold">1048</h1>
              <span className="capitalize text-xs">residents</span>
            </div>
            <div className="flex justify-center items-center flex-col">
              {/* <span className="capitalize text-xs">facilities</span> */}
              <h1 className="text-2xl font-bold">16,100</h1>
              <span className="capitalize text-xs">passes created</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
