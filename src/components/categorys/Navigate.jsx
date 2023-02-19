import React from "react";
import { Link } from "react-router-dom";

import { BsGenderFemale, BsGenderMale } from "react-icons/bs";
import { IoHome } from "react-icons/io5";

const Navigate = () => {
  return (
    <>
      <div className="flex flex-col lg:flex-row p-5 mb-12 gap-5 items-center justify-center ">
        <Link to="/">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-thSecondary hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center">
              <IoHome size={35} className="text-thSecondary" />
            </div>
          </div>
        </Link>
        <Link to="/producto1">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#FF2BE5] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center">
              <p>VOUFIT </p>
              <BsGenderFemale size={35} className="text-[#FF2BE5]" />
            </div>
          </div>
        </Link>
        <Link to="/producto2">
          <div className="flex flex-col w-full md:flex-row justify-center items-center md:gap-8 rounded-full shadow-lg shadow-[#0054FC] hover:scale-105 duration-200 px-12 p-3 cursor-pointer ">
            <div className="flex gap-4 items-center justify-center ">
              <p>VOUFIT</p>
              <BsGenderMale size={35} className="text-[#0054FC]" />
            </div>
          </div>
        </Link>
      </div>
    </>
  );
};

export default Navigate;
