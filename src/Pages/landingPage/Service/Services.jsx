import React from "react";
import building from "../../../asset/images/buildingIcon.svg";

const Services = () => {
  return (
    <div className="w-screen max-h-max z-20">
      <div className="w-[90%] mx-auto grid xs:grid-cols-1 sm:grid-cols-2 xs:gap-0 sm:gap-9">
        <div className="flex-1">
          <img className="w-full h-full" src={building} alt="" />
        </div>
        <div className="flex justify-center flex-col flex-1 xs:pl-0 md:pl-6">
          <div className=" w-full mb-10 ">
            <p className="text-[14px] text-textGrey font-light mb-8">
              There's a certain way of creating a service, hospitality, and
              experience that perpetuates people feeling like they matter. This
              is what motivates us in HOMLY, we pride ourselves in knowing our
              clients and partners matter.
            </p>
            <p className="text-sm font-light text-textGrey">
              We are trusted and reliable.
            </p>
          </div>
          <div className="flex flex-nowrap text-primaryText pb-4 gap-7">
            <div className="flex justify-center flex-col">
              <span className="text-xs">over</span>
              <h1 className="text-3xl font-bold">5k</h1>
              <span className="capitalize text-xs">households</span>
            </div>
            <div className="flex justify-center flex-col">
              <span className="text-xs">over</span>
              <h1 className="text-3xl font-bold">1k</h1>
              <span className="capitalize text-xs">partners</span>
            </div>
            <div className="flex justify-center flex-col">
              <span className="capitalize text-xs">facilities</span>
              <h1 className="text-3xl font-bold">20+</h1>
              <span className="capitalize text-xs">companies</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Services;
