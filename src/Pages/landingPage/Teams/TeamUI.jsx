import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { teams } from "../../../asset/dummyDb";
import Aos from "aos";
import "aos/dist/aos.css";

const TeamUI = () => {
  useEffect(() => {
    Aos.init();
  }, []);
  return (
    <div className="vs:w-full sm:w-[80%] lg:w-[70%] mx-auto grid ss:grid-cols-2 md:grid-cols-2 lg:grid-cols-4 justify-center gap-6">
      {teams.map((data) => (
        <div
          key={data.id}
          className="max-w-md max-h-max flex justify-center flex-col bg-white rounded-md shadow overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="3000"
        >
          {/* <div className="w-full flex justify-center items-center"> */}
          <img className="w-[100%] object-cover" src={data.image} alt="" />
          {/* </div> */}
          <div className="flex justify-center flex-col px-2 py-2">
            <h4 className=" font-extrabold text-sm text-black capitalize">
              {data.name}
            </h4>
            <small className=" text-[9px] text-textGrey capitalize">
              {data.role}
            </small>
            <Link
              to={"/"}
              className=" max-w-max text-[9px] text-textGrey capitalize hover:text-underline"
            >
              {data.linkedin.title}
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default TeamUI;
