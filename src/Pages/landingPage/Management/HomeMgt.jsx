import React, { useEffect } from "react";
import EstateMgt from "../../../asset/images/estatemanagement.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const HomeMgt = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-full grid xs:grid-cols-1 sm:grid-cols-2 items-center gap-8">
      <div className="" data-aos="fade-right" data-aos-duration="3000">
        <div className=" flex justify-center flex-col">
          <div className=" mb-3">
            <h1 className="text-secondary text-5xl font-medium ">01</h1>
          </div>
          <div className=" text-white">
            <div className=" mb-4">
              <h5 className="font-semibold text-[20px] mb-2">
                Estate/Home Management
              </h5>
              <p className="text-sm text-[12px] font-light">
                You are no longer required to be physically present in order to
                manage your Estate. You can add/remove occupants, track
                financial records, track visitors, manage estate workers, and
                much more.
              </p>
            </div>
            <div className="outline-0">
              <button className="text-white text-[12px] hover:bg-secondary font-normal border border-white px-9 py-2 rounded-3xl outline-0">
                Learn more
              </button>
            </div>
          </div>
        </div>
      </div>
      <div
        className=" items-center w-full h-full"
        data-aos="fade-left"
        data-aos-duration="3000"
      >
        <img className="w-full h-full" src={EstateMgt} alt="" />
      </div>
    </div>
  );
};

export default HomeMgt;
