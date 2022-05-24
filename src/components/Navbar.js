import React from "react";
import { BsSearch, BsBell } from "react-icons/bs";
import { BiUser } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";
import { FaRedditAlien } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";
import {
  openModal,
  toggleCommunityModal,
  toggleUserModal,
  openSignUpModal,
} from "../redux/features/authSlice";
import AuthModal from "./modals/AuthModal";
import SignUpModal from "./modals/SignUpModal";
import { HiOutlineChat } from "react-icons/hi";
import { AiOutlinePlus, AiTwotoneHome } from "react-icons/ai";
import CommunityMenu from "./modals/CommunityMenu";
import UserMenu from "./modals/UserMenu";
import CreateCommunityModal from "./modals/CreateCommunityModal";

const Navbar = () => {
  const dispatch = useDispatch();
  const user = useSelector((state) => state.auth.user);

  return (
    <div className="h-[48px] flex justify-between items-center px-5 bg-white">
      <div className="flex items-center space-x-2">
        <div className="h-10 w-10 rounded-full bg-orange-600 flex justify-center items-center">
          <FaRedditAlien className="text-white w-6 h-6" />
        </div>
        <h2 className="text-lg hidden md:block">Reddit</h2>
      </div>
      {user && (
        <div
          className="flex items-center justify-between md:w-56 h-10 border hover:border-gray-400 p-2 rounded-md cursor-pointer transition duration-300 relative"
          onClick={() => dispatch(toggleCommunityModal())}
        >
          <div className="flex items-center space-x-2">
            <AiTwotoneHome className="w-6 h-6" />
            <h4 className="hidden md:block font-medium">Home</h4>
          </div>
          <IoIosArrowDown />
        </div>
      )}

      <div className="md:w-[40%] h-[35px] md:mx-28 flex items-center bg-gray-200 rounded-md ">
        <BsSearch className="text- text-gray-400 ml-5" />
        <input
          type="text"
          placeholder="Search Reddit"
          className="w-full px-5 outline-none bg-transparent"
        />
      </div>
      <div className="flex items-center space-x-10">
        {user ? (
          <div className="hidden md:flex items-center space-x-4">
            <HiOutlineChat className="w-7 h-7" />
            <BsBell className="w-6 h-6" />
            <AiOutlinePlus className="w-7 h-7" />
          </div>
        ) : (
          <div className="hidden md:flex space-x-10">
            <button
              className="outline w-[110px] h-[28px]"
              login
              onClick={() => dispatch(openModal())}
            >
              Log in
            </button>
            <button
              className="solid w-[110px] h-[28px]"
              onClick={() => dispatch(openSignUpModal())}
            >
              Sign up
            </button>
          </div>
        )}
        <div
          className={`flex ${
            user &&
            "w-20 md:w-44 h-10 p-2 justify-between cursor-pointer border hover:border-gray-400 rounded-md transition duration-300"
          }`}
          onClick={() => dispatch(toggleUserModal())}
        >
          {user ? (
            <div className="flex items-center space-x-3 ">
              <div className="w-6 h-6  rounded-md bg-red-400"></div>
              <div className="hidden md:block text-sm">
                <p>{user.displayName}</p>
                <p>500 karma</p>
              </div>
            </div>
          ) : (
            <BiUser className="text-2xl" />
          )}
          <IoIosArrowDown className="mt-2" />
        </div>
      </div>
      <AuthModal />
      <SignUpModal />
      <CommunityMenu />
      <UserMenu />
      <CreateCommunityModal />
    </div>
  );
};

export default Navbar;
