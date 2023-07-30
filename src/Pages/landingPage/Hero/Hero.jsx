import React, { useEffect } from "react";
import { HiLockClosed } from "react-icons/hi";
import HeroImg from "../../../asset/images/heroImage.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-screen vs:pt-32 md:pt-28 pb-10 overflow-hidden z-20">
      <div className="w-[90%] mx-auto grid vs:grid-cols-1 md:grid-cols-2 items-center vs:gap-12 md:gap-0">
        <div className=" w-full flex justify-center items-start flex-col  flex-1" data-aos="fade-right" data-aos-duration='3000'>
          <div className="flex justify-center flex-col mb-8">
            <h1 className="font-[Fredoka] font-extrabold text-5xl text-black mb-6">
              Your <span className="text-secondary">No 1</span>
              <br />
              Estate and Home <br />
              <span className="text-secondary">Management App</span>
            </h1>
            <p className="text-[14px] text-textGrey font-light">
              Smarter and simplified everyday living, manage your properties
              from any location, unlimited automation and access control at your
              fingertips.
            </p>
          </div>
          <div className="flex md:justify-start vs:justify-center item-center gap-12">
            <button className=" flex justify-center items-center bg-primary text-white text-[12px] hover:bg-secondary font-normal px-6 py-2 rounded-3xl outline-0">
              e-portal login{" "}
              <span className=" ml-2 font-normal">
                <HiLockClosed />
              </span>
            </button>
            {/* <button className="bg-white text-primary text-[12px] border-primary border-[1.5px] hover:bg-secondary font-light px-6 py-2 rounded-3xl outline-0">
              Download app
            </button> */}
          </div>
        </div>
        <div className=" flex justify-center items-center border-black" data-aos="fade-left" data-aos-duration='3000'>
          <img
            className="vs:w-[75%] md:w-[75%] object-cover"
            src={HeroImg}
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
