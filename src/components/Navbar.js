import React from "react";
import CustomBtn from "./CustomBtn";
import { BsSearch } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { useDispatch } from "react-redux";
import { openModal } from "../redux/features/authSlice";
import AuthModal from "./AuthModal";

const Navbar = () => {
  const dispatch = useDispatch();

  return (
    <div className="h-[48px] flex justify-between items-center px-5 bg-white">
      <h1 className="mr-10">reddit</h1>
      <div className="md:w-[40%] h-[35px] md:mx-28 flex items-center bg-gray-200 rounded-md ">
        <BsSearch className="text- text-gray-400 ml-5" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="w-full px-5 outline-none bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-10">
        <div className="hidden md:flex space-x-10">
          <CustomBtn login onClick={() => dispatch(openModal())}>
            Log in
          </CustomBtn>
          <CustomBtn>Sign up</CustomBtn>
        </div>
        <div className="flex">
          <BiUser className="text-2xl" />
          <IoIosArrowDown className="mt-2" />
        </div>
      </div>
      <AuthModal />
    </div>
  );
};

export default Navbar;
