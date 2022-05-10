import React from "react";

const AuthButton = ({ loginmodal, children, ...otherProps }) => {
  return (
    <button
      className={`${
        loginmodal && "text-white font-bold bg-orange-600 border-none h-14"
      } border border-gray-300 w-[250px] md:w-[375px] h-10 rounded-full flex  justify-center items-center font-semibold `}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default AuthButton;
