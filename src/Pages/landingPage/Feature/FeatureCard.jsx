import React from "react";
// import bill from "../../../asset/images/bill.svg";
import { features } from "../../../asset/dummyDb";
import { Link } from "react-router-dom";

const FeatureCard = () => {
  return (
    <div className="flex justify-center items-center flex-wrap gap-6">
      {features.map((data) => (
        <div
          key={data.id}
          className="w-64 h-64 bg-bgGrey p-4 rounded-md flex flex-col shadow-md z-10"
        >
          <div className="flex justify-center items-center">
            {data.icon}
          </div>
          <div className="">
            <div className="flex justify-center items-center">
              <h1 className=" text-[22px] font-semibold text-primary text-center mb-2 leading-5">
                {data.title}
              </h1>
            </div>
            <div className=" self-auto">
              <p className="text-[11.5px] font-medium text-center">
                {data.desc}
              </p>
            </div>
            <div className="flex justify-center items-center m-auto">
              <button className="text-[10px] border border-primaryText py-1 px-4 rounded-3xl">
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
