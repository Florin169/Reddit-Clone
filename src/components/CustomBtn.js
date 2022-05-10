const CustomBtn = ({ login, children, ...otherProps }) => {
  return (
    <button
      className={`${
        login && "bg-transparent text-blue-600 border border-blue-600"
      } w-[120px] h-8 bg-blue-600 rounded-full text-white font-bold`}
      {...otherProps}
    >
      {children}
    </button>
  );
};

export default CustomBtn;
