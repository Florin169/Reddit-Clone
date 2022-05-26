import React from "react";
import { BsFillImageFill, BsLink45Deg } from "react-icons/bs";
import { FaRedditAlien } from "react-icons/fa";
import { Link } from "react-router-dom";

const PostBar = ({ community }) => {
  return (
    <div className="w-full md:w-[640px] h-14 bg-white my-5 flex justify-between items-center px-3 rounded-md">
      <div className="flex space-x-3 w-[85%] items-center">
        <div className="flex justify-center items-center w-9 h-9 rounded-full bg-gray-200 text-xl text-white">
          <FaRedditAlien />
        </div>
        <Link to={`/${community}/submit`} className="w-full">
          <input
            type="text"
            placeholder="Create post"
            className="w-full bg-gray-100 h-9 rounded-md px-4 outline-none"
          />
        </Link>
      </div>
      <div className="flex text-xl space-x-3 text-gray-400">
        <BsFillImageFill />
        <BsLink45Deg />
      </div>
    </div>
  );
};

export default PostBar;
