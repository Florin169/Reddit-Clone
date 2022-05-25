import React from "react";
import { useNavigate } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex flex-col justify-center items-center h-screen ">
      <h1 className="mb-5 text-lg">
        Sorry, there aren’t any communities on Reddit with that name.
      </h1>
      <p className="text-sm">
        This community may have been banned or the community name is incorrect.
      </p>
      <button
        className="solid w-[105px] h-8 mt-10"
        onClick={() => navigate("/")}
      >
        GO HOME
      </button>
    </div>
  );
};

export default NotFound;
