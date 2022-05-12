import React from "react";
import Post from "../components/Post";
import PostBar from "../components/PostBar";
import Side from "../components/Side";

const Home = () => {
  return (
    <div className="w-full md:w-[60%] m-auto">
      <div className="flex">
        <div className="space-y-3">
          <PostBar />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Side />
      </div>
    </div>
  );
};

export default Home;
