import React from "react";
import FeatureCard from "./FeatureCard";

const Features = () => {
  return (
    <div className="w-screen max-h-max bg-white py-12 border">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-col mb-8">
          <h1 className="text-primary text-center text-3xl font-medium">
            Features
          </h1>
          <span className="text-sm text-center text-[#555452] font-normal mt-1">
            An array of highly innovative features built for comfort and
            satisfaction.
          </span>
        </div>
        <FeatureCard />
      </div>
    </div>
  );
};

export default Features;
