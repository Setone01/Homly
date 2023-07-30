import React, { useEffect } from "react";
import HomeMgt from "./HomeMgt";
import wallet from "../../../asset/images/wallet.svg";
import estate from "../../../asset/images/estate.svg";
import handyman from "../../../asset/images/handyman.svg";
import emergency from "../../../asset/images/emergency.svg";
import Aos from "aos";
import "aos/dist/aos.css";

const Management = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="w-screen max-h-max bg-primary py-12 z-20">
      <div className="w-[90%] flex justify-center flex-col mx-auto">
        <div className="grid vs:grid-cols-1 ss:grid-cols-2 lg:grid-cols-4 items-center vs:pb-10 md:pb-0 gap-5" data-aos="zoom-in"
     data-aos-duration="2500">
          <div className=" flex  justify-center items-start flex-col">
            <div className=" mb-3">
              <img className="w-10" src={estate} alt="" />
            </div>
            <div className="flex justify-center min-w-fit">
              <div className="flex justify-center flex-col text-white">
                <h5 className="mb-[4px] text-sm font-medium w-full">
                  Estate/Home Management
                </h5>
                <div className="flex items-center">
                  <div className="w-3 h-3 bg-white rounded-full"></div>
                  <div className="w-12 h-[1.6px] -ml-3 bg-white rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center items-start flex-col">
            <div className="mb-3">
              <img className="w-10" src={wallet} alt="" />
            </div>
            <div className="flex justify-center flex-col min-w-fit">
              <div className="flex justify-center flex-col text-white">
                <h5 className="mb-[4px] text-sm font-medium">
                  Mobile wallet/Bills payment
                </h5>
                <div className="flex items-center">
                  <div className="w-12 h-[1.6px] bg-colorGrey rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center items-start flex-col">
            <div className="mb-3">
              <img className="w-10" src={handyman} alt="" />
            </div>
            <div className="flex justify-center flex-col min-w-fit">
              <div className="flex justify-center flex-col text-white">
                <h5 className="mb-[4px] text-sm font-medium">
                  Handyman Services
                </h5>
                <div className="flex items-center">
                  <div className="w-12 h-[1.4px] bg-colorGrey rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex  justify-center items-start flex-col">
            <div className="mb-3">
              <img className="w-10" src={emergency} alt="" />
            </div>
            <div className="flex justify-center flex-col min-w-fit">
              <div className="flex justify-center flex-col text-white">
                <h5 className="mb-[4px] text-sm font-medium">
                  Emergency Services
                </h5>
                <div className="flex items-center">
                  <div className="w-12 h-[1.4px] bg-colorGrey rounded-xl"></div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <HomeMgt />
      </div>
    </div>
  );
};

export default Management;
