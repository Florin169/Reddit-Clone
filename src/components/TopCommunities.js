import React from "react";
import TopCommunity from "./TopCommunity";

const TopCommunities = () => {
  return (
    <div className="hidden lg:block bg-white ml-10 mt-5 w-[312px] h-[379px]  rounded-md border border-gray-300">
      <div className="h-20 w-full bg-blue-600">
        <h1 className="font-bold pt-14 px-3 text-white">Top Communities</h1>
      </div>
      <TopCommunity />
      <TopCommunity />
      <TopCommunity />
      <TopCommunity />
      <TopCommunity />
      <div className=" flex items-center mt-3.5">
        <button className="w-[85%] m-auto h-8 bg-blue-600 rounded-full text-white font-bold">
          View All
        </button>
      </div>
    </div>
  );
};

export default TopCommunities;
