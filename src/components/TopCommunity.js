import React from "react";
import { IoIosArrowUp } from "react-icons/io";
import { Link } from "react-router-dom";

const TopCommunity = ({ community }) => {
  return (
    <div className="flex items-center space-x-4 h-12 w-full  px-5 py-2 border-b border-gray-300 text-black">
      <div className="flex items-center space-x-2">
        <span>1</span>
        <IoIosArrowUp className="text-green-500" />
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 rounded-full bg-orange-600"></div>
        <Link to={community.id}>
          <h1>r/{community?.id}</h1>
        </Link>
      </div>
      <div className="w-full flex justify-end">
        <button className="solid w-[52px] h-[22px] text-xs">Join</button>
      </div>
    </div>
  );
};

export default TopCommunity;
