import React from "react";
import { useParams } from "react-router-dom";
import About from "../../components/About";
import Post from "../../components/Post";
import PostBar from "../../components/PostBar";

const CommunityPage = () => {
  const { community } = useParams();

  return (
    <div>
      <div className="h-[73px] bg-blue-400 w-full"></div>
      <div className="h-[73px] bg-white w-full">
        <div className="w-full md:w-[60%] h-full flex items-center m-auto  relative">
          <div className="absolute bottom-6 w-[66px] h-[66px] rounded-full border-[4px] border-white"></div>
          <div className="ml-24">
            <div className="flex items-center space-x-6">
              <h1 className="font-bold text-xl md:text-2xl">{community}</h1>
              <button className="solid w-[82px] h-[30px] text-xs">Join</button>
            </div>
            <p className="text-sm font-bold">r/{community}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-[60%] m-auto">
        <div>
          <PostBar />
          <Post />
        </div>
        <About />
      </div>
    </div>
  );
};

export default CommunityPage;
