import React from "react";
import { useSelector } from "react-redux";
import TopCommunity from "./TopCommunity";

const TopCommunities = () => {
  const communities = useSelector((state) => state.community.communities);

  return (
    <div className="hidden lg:block bg-white ml-10 mt-5 w-[312px] h-[379px]  rounded-md border border-gray-300">
      <div className="h-20 w-full bg-blue-600">
        <h1 className="font-bold pt-14 px-3 text-white">Top Communities</h1>
      </div>
      {communities.slice(0, 5).map((community) => (
        <TopCommunity key={community.id} community={community.data()} />
      ))}
      <div className=" flex items-center mt-3.5">
        <button className="w-[85%] m-auto h-8 solid">View All</button>
      </div>
    </div>
  );
};

export default TopCommunities;
