import React, { useEffect } from "react";
import building from "../../../asset/images/buildingIcon.svg";
import Aos from "aos";
import "aos/dist/aos.css";
import CounterUp from "./CounterUp";

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
          <div className="w-full text-primary py-4 flex items-center flex-nowrap gap-6">
            <CounterUp start={0} end={9} duration={2} comment={"communities"}/>
            <CounterUp start={0} end={709} duration={2} comment={"homes"}/>
            <CounterUp start={0} end={1048} duration={2} comment={"residents"}/>
            <CounterUp start={0} end={16100} duration={2} comment={"passes created"}/>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
