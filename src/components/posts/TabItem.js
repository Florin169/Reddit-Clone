import React from "react";

const TabItem = ({ tab, selected, setSelectedTab }) => {
  return (
    <div
      className={`${
        selected ? "border-b-[3px] border-blue-300" : "border-gray-200"
      } flex justify-center items-center flex-grow h-[50px] border-r cursor-pointer hover:bg-gray-50`}
      onClick={() => setSelectedTab(tab.title)}
    >
      <div
        className={`${
          selected ? "text-blue-300" : "text-gray-500"
        } flex items-center space-x-2 font-bold text-sm`}
      >
        <span>{tab.icon}</span>
        <h1>{tab.title}</h1>
      </div>
    </div>
  );
};

export default TabItem;
