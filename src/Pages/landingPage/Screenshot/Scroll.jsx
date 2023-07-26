import React from "react";

const Scroll = ({ image }) => {
  return (
    <div className="flex justify-center items-center">
      <img className="w-[70%] object-cover" src={image} alt="" />
    </div>
  );
};

export default Scroll;
