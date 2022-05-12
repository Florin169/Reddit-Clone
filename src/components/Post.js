import React from "react";
import { FaRegCommentAlt } from "react-icons/fa";
import { IoMdShareAlt } from "react-icons/io";
import { BsBookmark } from "react-icons/bs";
import { HiArrowUp } from "react-icons/hi";
import { HiArrowDown } from "react-icons/hi";

const Post = () => {
  return (
    <div className="w-full md:w-[640px] bg-white rounded-md flex">
      <div className="w-10 bg-gray-50 flex flex-col items-center py-3 space-y-3">
        <HiArrowUp className="text-xl cursor-pointer" />
        <span>1.2k</span>
        <HiArrowDown className="text-xl cursor-pointer" />
      </div>
      <div className="px-3 py-2 w-full">
        <div className="flex items-center space-x-2">
          <div className="w-5 h-5 rounded-full bg-red-400"></div>
          <p className="font-semibold text-sm text-gray-700">/gaming</p>
          <p className="text-xs">posted by u/me169</p>
        </div>
        <h1 className="mt-2 font-bold">Call of duty</h1>
        <p className="my-2 text-[14px] font-medium leading-relaxed">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Non
          laudantium in rem ratione adipisci doloremque id delectus
          reprehenderit animi voluptates itaque sapiente error, nesciunt, fuga
          cum sint minus numquam nihil.
        </p>
        <img
          src="https://m.media-amazon.com/images/M/MV5BMjBiMjhmNWItNmU0OS00MWZkLTgzMTItMDcxN2RjYmZmNWJmXkEyXkFqcGdeQXVyNTgyNTA4MjM@._V1_FMjpg_UX1000_.jpg"
          alt=""
          className="w-[80%] m-auto max-h-[600px] object-contain"
        />

        <div className="flex space-x-4 mt-10 text-[#9E9589] text-md">
          <div className="flex items-center space-x-2">
            <FaRegCommentAlt className="text-xl" />
            <span className="text-sm">Comments</span>
          </div>
          <div className="flex items-center space-x-2">
            <IoMdShareAlt className="text-xl" />
            <span className="text-sm">Share</span>
          </div>
          <div className="flex items-center space-x-2">
            <BsBookmark className="text-xl" />
            <span className="text-sm">Save</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
