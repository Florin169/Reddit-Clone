import React from "react";
import { IoIosArrowUp } from "react-icons/io";

const TopCommunity = () => {
  return (
    <div className="flex space-x-4 h-12 w-full  px-5 py-2 border-b border-gray-300 text-black">
      <div className="flex items-center space-x-2">
        <span>1</span>
        <IoIosArrowUp className="text-green-500" />
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 rounded-full bg-red-500"></div>
        <h1>r/Community</h1>
      </div>
    </div>
  );
};

export default TopCommunity;
