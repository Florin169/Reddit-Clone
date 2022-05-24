import React from "react";
import { GrLogout } from "react-icons/gr";
import { useSelector } from "react-redux";
import { signOut } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const UserMenu = () => {
  const toggle = useSelector((state) => state.auth.userModal);

  const logOut = () => {
    signOut(auth);
  };

  return (
    <div
      className={`${
        !toggle && "hidden"
      } absolute right-5 top-12 p-3 w-44 bg-white border-x-gray-400 border-b-gray-400`}
    >
      <div className="flex items-center space-x-3" onClick={logOut}>
        <GrLogout className="h-5 w-5" />
        <h4>Log out</h4>
      </div>
    </div>
  );
};

export default UserMenu;
