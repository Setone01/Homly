import React from "react";
import Bording from "../../../asset/images/bordingPro.svg";

const Process = () => {
  return (
    <section className="w-screen max-h-max bg-white py-10 z-20">
      <div className="w-[90%] mx-auto flex items-center flex-col">
        <div className=" mb-16">
            <h1 className="text-black text-center text-3xl font-medium">Onboarding Process</h1>
            <span className="text-sm font-normal mt-1">Navigating your way around Homly is quite easy.</span>
        </div>
        <div className=" w-full flex justify-center">
          <img
            className="xs:w-full sm:h-full md:w-[65%] md:h-[65%]"
            src={Bording}
            alt="bording process"
          />
        </div>
      </div>
    </section>
  );
};

export default Process;
