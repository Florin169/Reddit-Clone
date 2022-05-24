import React from "react";
import { BiShieldQuarter } from "react-icons/bi";

const Premium = () => {
  return (
    <div className="hidden lg:block bg-white ml-10 mt-5 w-[312px] rounded-md px-2">
      <div className="w-full flex items-center   py-2 space-x-3 ">
        <BiShieldQuarter className="w-10 h-10" />
        <div>
          <h1>Reddit Premium</h1>
          <p className="text-xs">
            The best Reddit experience, with monthly Coins
          </p>
        </div>
      </div>
      <button className="w-full h-8 solid bg-orange-600 hover:bg-red-600 mb-2">
        Try now
      </button>
    </div>
  );
};

export default Premium;
