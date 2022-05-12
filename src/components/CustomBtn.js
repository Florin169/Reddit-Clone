const CustomBtn = ({ login, children, ...otherProps }) => {
  return (
    <button
      className={`${
        login
          ? "bg-white text-blue-600 border border-blue-600"
          : "bg-blue-600 text-white"
      }  w-[120px] h-8  rounded-full  font-bold`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
