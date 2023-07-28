import React from "react";
import { Link } from "react-router-dom";
import { company } from "../asset/dummyDb";
import logo from "../asset/images/logo.svg";
import appstore from "../asset/images/applestore.svg";
import googlestore from "../asset/images/goggleplay.svg";
import insta from "../asset/images/insta.svg";
import linkedin from "../asset/images/linkedin.svg";
import twitter from "../asset/images/twitter.svg";

import { MdOutlineLocationOn } from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";
import { BiEnvelope } from "react-icons/bi";

const Footer = () => {
  return (
    <footer className=" bg-primary w-screen mt-auto pt-7 overflow-hidden z-20">
      <div className="flex flex-col">
        <div className="w-[90%] mx-auto flex flex-wrap gap-5">
          <div className="w-full vs:w-2/3 lg:w-3/12">
            <div className="">
              <img className="w-21" src={logo} alt="logo" />
            </div>
            <p className=" text-sm text-white font-light">
              Easy living, the smarter way...
            </p>
            <div className=" mt-3">
              <div className="flex items-center gap-4">
                <img src={insta} alt="instagram" className="w-6 h-6" />
                <img src={linkedin} alt="linkedin" className="w-6 h-6" />
                <img src={twitter} alt="twitter" className="w-6 h-6" />
              </div>
            </div>
          </div>
          <div className="vs:w-full md:w-2/12">
            <div className="mb-4">
              <h3 className="text-white text-xl font-semibold">Company</h3>
            </div>
            <div className="ml-4">
              {company.map((data) => (
                <ul key={data.id} className=" bg-transparent max-w-max list-disc text-white mb-2">
                  <li className="text-sm font-light cursor-pointer">
                    <Link to={data.path}>{data.title}</Link>
                  </li>
                </ul>
              ))}
            </div>
          </div>
          <div className="vs-full md:w-3/12 text-white font-light">
            <div className=" mb-4">
              <h3 className="text-white text-xl font-semibold">Contact us</h3>
            </div>
            <div className="">
              <div className="flex items-center mb-2">
                <span className="mr-3 text-secondary">
                  <MdOutlineLocationOn size={20} />
                </span>
                <li className=" text-sm list-none">
                  D1, Qualitrend Residence, No.1 Ruben Okoya Cresent, Wuye,
                  AbujaNG
                </li>
              </div>
              <div className=" flex items-center mb-2">
                <span className="mr-3 text-secondary">
                  <IoCallOutline size={20} />
                </span>
                <li className="text-sm list-none">(+234) (0) 901 913 2098</li>
              </div>
              <div className="flex items-center mb-2">
                <span className="mr-3 text-secondary">
                  <BiEnvelope size={20} />
                </span>
                <li className="text-sm list-none">projects@homlyng.com</li>
              </div>
            </div>
          </div>
          <div className="text-white sm:w-1/2 lg:w-3/12">
            <div className="mb-4">
              <h3 className="text-white text-xl font-semibold">Newsletter</h3>
            </div>
            <div className="w-full">
              <h5 className="text-sm font-light mb-3">
                Subscribe to out news letter to get the latest updates.
              </h5>
              {/* Form section */}
              <div className="vs:w-4/5 sm:w-full">
                <form className="flex justify-center items-center">
                  <input
                    type="email"
                    placeholder="Your Email"
                    className="w-full py-2 px-4 text-black font-light rounded-l-2xl outline-none leading-tight placeholder:text-sm placeholder:font-light"
                  />
                  <button className=" bg-secondary py-2 px-4 rounded-r-2xl text-sm font-light capitalize">
                    subsribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-center items-center flex-col py-8">
          <div className="mb-4">
            <h3 className="text-white text-xl font-semibold">Available on:</h3>
          </div>
          <div className="flex justify-center items-center gap-5">
            <img className="w-32" src={appstore} alt="app store" />
            <img className="w-32" src={googlestore} alt="google play" />
          </div>
        </div>
        <div className="w-screen max-h-max flex justify-center items-center bg-white py-4">
          <div className="w-[90%]">
            <h5 className=" text-sm text-center">
              Copyrights © 2023. All rights reserved by
              <Link className="underline"> Homly Technologies Ltd.</Link>
            </h5>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
