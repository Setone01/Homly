import React from "react";
import TeamUI from "./TeamUI";

const Team = () => {
  return (
    <div className="w-screen max-h-max bg-white py-16 z-20">
      <div className="w-[90%] mx-auto flex justify-center items-center flex-col">
        <div className="mb-12">
          <h1 className="text-black text-center text-3xl font-medium">
            Our Team
          </h1>
        </div>
        <TeamUI/>
      </div>
    </div>
  );
};

export default Team;
