import React from "react";
import { Link } from "react-router-dom";
import { GiSkirt } from "react-icons/gi";
import { IoHome } from "react-icons/io5";

import logoVoufit from "@/assets/logoVoufit.jpg";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col  p-5 mb-12 gap-6 items-center justify-center ">
        <div className="flex gap-6">
          <Link to="/">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#e0598d] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10    "
                />
              </div>
            </div>
          </Link>
          <Link to="/producto1">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#ddfd30] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10   "
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6 ">
          <Link to="/producto2">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#323fc1] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg   "
                />
              </div>
            </div>
          </Link>

          <Link to="/producto3">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#714bc8] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg   "
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/producto4">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#e71c41] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg   "
                />
              </div>
            </div>
          </Link>
          <Link to="/producto5">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#8c7f56] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg   "
                />
              </div>
            </div>
          </Link>
        </div>
        <div className="flex gap-6">
          <Link to="/producto6">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#fdb905] hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg  "
                />
              </div>
            </div>
          </Link>
          <Link to="/producto7">
            <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-gray-600 hover:scale-105 duration-200 md:px-20 px-6 p-3 cursor-pointer ">
              <div className="flex gap-4">
                <img
                  src={logoVoufit}
                  alt="contact us"
                  className="rounded-full object-cover w-10 h-10 shadow-lg   "
                />
              </div>
            </div>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navigate;
