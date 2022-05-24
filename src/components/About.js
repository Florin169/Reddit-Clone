import React from "react";
import { BiDotsHorizontalRounded } from "react-icons/bi";
import { MdCake } from "react-icons/md";

const About = () => {
  return (
    <div className="hidden lg:block w-[277px] h-[206px] rounded-md bg-white mt-5 ml-10">
      <div className="p-2 flex justify-between items-center bg-blue-400 rounded-t-md">
        <h1 className="font-bold">About Community</h1>
        <BiDotsHorizontalRounded />
      </div>
      <div className="p-2">
        <div className="h-14 flex px-2">
          <div className="flex flex-col w-[135px] ">
            <span>4</span>
            <span>Members</span>
          </div>
          <div className="flex flex-col w-[135px] ">
            <span>1</span>
            <span>Online</span>
          </div>
        </div>
        <div className="w-full h-px my-3 bg-gray-400"></div>
        <div className="flex items-center mb-3 space-x-3">
          <MdCake className="w-5 h-5" />
          <p className="text-sm">Created 24/5/2022</p>
        </div>
        <button className="solid w-full h-[30px]">Create post</button>
      </div>
    </div>
  );
};

export default About;
