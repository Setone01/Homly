import React from "react";
import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";
import { useEffect } from "react";
import Aos from "aos";
import "aos/dist/aos.css";

const HeadOffice = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div
      className="w-full max-h-max"
      data-aos="fade-left"
      data-aos-duration="3000"
    >
      <div className="w-full px-8">
        <div className=" vs:mb-8 md:mb-20">
          <h1 className="text-primary text-3xl font-sembold">Contact Us</h1>
          <h4 className="text-sm font-normal mt-1">Ready to get started?</h4>
        </div>
        <div className="w-full flex justify-center flex-col gap-3">
          <div className="flex items-center">
            <span className="mr-3 text-primary">
              <MdOutlineLocationOn size={25} />
            </span>
            <p className=" text-sm font-light">
              D1, Qualitrend Residence, No.1 Ruben Okoya <br />
              Cresent, Wuye, AbujaNG
            </p>
          </div>
          <div className=" flex items-center">
            <span className="mr-3 text-primary">
              <IoCallOutline size={25} />
            </span>
            <a href="/" className="text-sm font-light list-none">
              (+234) (0) 901 913 2098
            </a>
          </div>
          <div className="flex items-center">
            <span className="mr-3 text-primary">
              <BiEnvelope size={25} />
            </span>
            <a
              href="mailto:projects@homlyng.com"
              className="text-sm font-light"
            >
              projects@homlyng.com
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeadOffice;
