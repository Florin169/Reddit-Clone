import React from "react";
import { AiOutlinePlus } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { openCreateCommunityModal } from "../../redux/features/authSlice";

const CommunityMenu = () => {
  const toggle = useSelector((state) => state.auth.communityModal);
  const dispatch = useDispatch();

  return (
    <div
      className={`${
        !toggle && "hidden"
      } absolute top-12 left-1 lg:left-[201px] w-56 p-3 bg-white rounded-sm space-y-3 border border-x-gray-400 border-b-gray-400 transition duration-300`}
    >
      <div
        className="flex items-center space-x-2 cursor-pointer"
        onClick={() => dispatch(openCreateCommunityModal())}
      >
        <AiOutlinePlus className="w-5 h-5" />
        <h4>Create Community</h4>
      </div>
      <div className="flex items-center space-x-2">
        <div className="w-7 h-7 rounded-full bg-blue-600"></div>
        <h4>r/gaming</h4>
      </div>
    </div>
  );
};

export default CommunityMenu;
