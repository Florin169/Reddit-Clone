import React from "react";

const TextInputs = ({ title, setTitle, text, setText, handleCreatePost }) => {
  return (
    <div className="flex flex-col w-full h-full p-3">
      <input
        type="text"
        value={title}
        placeholder="Title"
        className="post-input h-10 mb-3"
        onChange={(e) => setTitle(e.target.value)}
      />
      <textarea
        type="text"
        value={text}
        placeholder="Text (optional)"
        className="post-input h-[100px] pt-2"
        onChange={(e) => setText(e.target.value)}
      />
      <div className="flex justify-end mt-4">
        <button
          disabled={title === ""}
          className={`solid w-[90px] h-[35px] disabled:opacity-50`}
          onClick={handleCreatePost}
        >
          Post
        </button>
      </div>
    </div>
  );
};

export default TextInputs;
