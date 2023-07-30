import React, {useEffect} from "react";
import FeatureCard from "./FeatureCard";
import Aos from "aos";
import "aos/dist/aos.css";

const Features = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-screen max-h-max bg-white py-12">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
        <div className=" flex justify-center items-center flex-col mb-8" >
          <h1 className="text-primary text-center text-3xl font-medium" data-aos="fade-up" data-aos-duration="2500">
            Features
          </h1>
          <span className="text-sm text-center text-[#555452] font-normal mt-1" data-aos="fade-up" data-aos-duration="3000">
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
