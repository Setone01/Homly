import React, { useEffect } from "react";
// import bill from "../../../asset/images/bill.svg";
import { features } from "../../../asset/dummyDb";
import { Link } from "react-router-dom";
import Aos from "aos";
import "aos/dist/aos.css";

const FeatureCard = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="flex justify-center items-center flex-wrap gap-6">
      {features.map((data) => (
        <div
          key={data.id}
          className="w-64 h-64 bg-bgGrey p-4 rounded-md flex flex-col shadow-md z-10"
          data-aos="zoom-in" data-aos-duration="2500"
        >
          <div className="flex justify-center items-center">{data.icon}</div>
          <div className=" items-center m-auto">
            <div className="flex justify-center items-center m-auto">
              <h1 className=" text-[19px] font-semibold text-primary text-center mb-2 leading-5">
                {data.title}
              </h1>
            </div>
            <div className="mb-3 ">
              <p className="text-[13px] text-black font-light text-center">
                {data.desc}
              </p>
            </div>
            <div className="flex justify-center items-center mt-6">
              <button className="text-[12px] font-normal border border-primaryText py-1 px-4 rounded-3xl">
                <Link to={data.path}>{data.link}</Link>
              </button>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default FeatureCard;
