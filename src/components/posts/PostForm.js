import React, { useState } from "react";
import { IoDocumentText } from "react-icons/io5";
import { BsImage } from "react-icons/bs";
import { AiOutlineLink } from "react-icons/ai";
import { BiPoll } from "react-icons/bi";
import { HiOutlineMicrophone } from "react-icons/hi";
import TabItem from "./TabItem";
import TextInputs from "./TextInputs";
import ImageUpload from "./ImageUpload";

const PostForm = () => {
  const formTabs = [
    {
      title: "Post",
      icon: <IoDocumentText />,
    },
    {
      title: "Image&Video",
      icon: <BsImage />,
    },
    {
      title: "Link",
      icon: <AiOutlineLink />,
    },
    {
      title: "Poll",
      icon: <BiPoll />,
    },
    {
      title: "Talk",
      icon: <HiOutlineMicrophone />,
    },
  ];

  const [selectedTab, setSelectedTab] = useState(formTabs[0].title);
  const [title, setTitle] = useState("");
  const [text, setText] = useState("");
  const [selectedFile, setSelectedFile] = useState();

  const handleCreatePost = async () => {};

  const onSelectImage = (e) => {
    const reader = new FileReader();

    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      if (readerEvent.target.result) {
        setSelectedFile(readerEvent.target.result);
      }
    };
  };

  const omTextChange = () => {};

  return (
    <div className="w-[670px] bg-white rounded-md">
      <div className="flex">
        {formTabs.map((tab) => (
          <TabItem
            key={tab.title}
            tab={tab}
            selected={tab.title === selectedTab}
            setSelectedTab={setSelectedTab}
          />
        ))}
      </div>
      <div className="w-full ">
        {selectedTab === "Post" && (
          <TextInputs
            title={title}
            setTitle={setTitle}
            text={text}
            setText={setText}
            handleCreatePost={handleCreatePost}
          />
        )}
        {selectedTab === "Image&Video" && (
          <ImageUpload
            onSelectImage={onSelectImage}
            selectedFile={selectedFile}
            setSelectedFile={setSelectedFile}
          />
        )}
      </div>
    </div>
  );
};

export default PostForm;
