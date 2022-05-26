import React, { useRef } from "react";

const ImageUpload = ({ onSelectImage, selectedFile, setSelectedFile }) => {
  const selectRef = useRef(null);

  return (
    <div className="w-full h-full p-4 ">
      {selectedFile ? (
        <div className="flex flex-col items-center">
          <img
            src={selectedFile}
            alt=""
            className="max-w-[400px] max-h-[400px]"
          />
          <div className="flex items-center space-x-3 my-4">
            <button className="solid w-[114px] h-7">Back to Post</button>
            <button
              className="outline w-[88px] h-7"
              onClick={() => setSelectedFile(null)}
            >
              Remove
            </button>
          </div>
        </div>
      ) : (
        <div className="flex h-[222px] justify-center items-center border-dashed border border-gray-50">
          <button
            className="outline w-[80px] h-7"
            onClick={() => selectRef.current.click()}
          >
            Upload
          </button>
          <input
            type="file"
            ref={selectRef}
            className="hidden"
            onChange={onSelectImage}
          />
        </div>
      )}
    </div>
  );
};

export default ImageUpload;
