import React from "react";
import { client } from "../../../asset/dummyDb";
// import evergreen from "../../../asset/images/evergreen.svg";
// import lafayette from "../../../asset/images/lafayyete.svg";
// import bakens from "../../../asset/images/bakens.svg";
// import shekinah from "../../../asset/images/shekina.svg";
// import omezie from "../../../asset/images/omeiza.svg";
// import greenbox from "../../../asset/images/greenbox.svg";
// import quora from "../../../asset/images/quora.svg";

const Slides = () => {
  return (
    <div className="w-screen max-h-max bg-slate-300">
      <div className="slider flex justify-center items-center flex-col py-5">
        <div className="mb-4">
          <h1 className="text-primary text-center text-3xl font-medium">
            Our Clients
          </h1>
        </div>
        <div className="slide-track flex gap-5">
          {client.map((item, index) => (
            <div key={index} className="slide flex justify-center items-center">
              <img className="w-[70%]" src={item.img} alt="" />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Slides;
