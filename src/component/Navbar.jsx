import React, { useState } from "react";
import logo from "../asset/images/logo.svg";
import { header } from "../asset/dummyDb";
import { Link } from "react-router-dom";
import { SlClose } from "react-icons/sl";
import { FiMenu } from "react-icons/fi";

const Navbar = () => {
  const [Nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!Nav);
  };

  const removeNav = () => {
    setNav(false);
  };

  return (
    <div className=" w-screen h-[5rem] bg-primary flex items-center fixed z-50">
      <div className=" w-[90%] mx-auto flex justify-between items-center">
        <div className=" z-30">
          <img className="w-[6rem]" src={logo} alt="" />
        </div>
        <div className="hidden sm:flex">
          <ul className="flex items-center text-white text-base font-light gap-10">
            {header.map((data) => (
              <Link className="text-sm" key={data.id}>
                {data.title}
              </Link>
            ))}
            <button className="text-white text-sm border border-white rounded-3xl px-6 py-2 outline-none">
              Download
            </button>
          </ul>
        </div>
        <div onClick={handleNav} className="vs:block sm:hidden text-white">
          {Nav ? <SlClose size={30} /> : <FiMenu size={30} />}
        </div>
        <div
          className={
            Nav
              ? "w-full flex justify-center top-20 left-0 bg-primary py-7 absolute"
              : "absolute left-[-100%]"
          }
        >
          <ul className="flex justify-center items-center flex-col text-white text-base font-[300] gap-5 transition ease-in-out delay-150 z-30">
            {header.map((data) => (
              <li key={data.id}>
                <Link onClick={removeNav} to={data.path}>
                  {data.title}
                </Link>
              </li>
            ))}
            <button className="text-white text-sm hover:bg-secondary border border-white rounded-3xl px-6 py-2 my-2 outline-0">
              Download
            </button>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
