import React from "react";
import PostForm from "../../components/posts/PostForm";

const CreatePostPage = () => {
  return (
    <div>
      <div className="w-[60%] m-auto bbg-red-200 mt-10">
        <h1 className="font-bold mb-5">Create Post</h1>
        <PostForm />
      </div>
    </div>
  );
};

export default CreatePostPage;
