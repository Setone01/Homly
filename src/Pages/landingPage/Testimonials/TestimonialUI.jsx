import React from "react";
// import Inyang from "../../../asset/images/inyang.svg";

const TestimonialUI = ({ img, name, role, comment }) => {
  return (
    <div className="max-w-md bg-bgGrey flex justify-center items-center flex-col shadow-md rounded-md p-4 mx-4">
      {/* <div className="flex justify-center items-center flex-col"> */}
      <div className="w-full flex items-center">
        <div className="w-16 h-16 border rounded-full overflow-hidden mr-4">
          <img className="w-full h-full object-cover" src={img} alt="" />
        </div>
        <div className=" flex justify-center flex-col text-primaryText">
          <h6 className=" font-medium">{name}</h6>
          <small className="text-[10px] font-normal">{role}</small>
        </div>
      </div>
      <div className="text-[12px] font-light py-4">
        <p className="">{comment}</p>
      </div>
      {/* </div> */}
    </div>
  );
};

export default TestimonialUI;
