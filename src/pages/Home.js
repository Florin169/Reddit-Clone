import { collection, onSnapshot } from "firebase/firestore";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import Post from "../components/Post";
import PostBar from "../components/PostBar";
import Side from "../components/Side";
import { db } from "../firebase/firebase";
import { getCommunities } from "../redux/features/communitySlice";

const Home = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onSnapshot(collection(db, "communities"), (snapshot) => {
      dispatch(getCommunities(snapshot.docs));
    });
  }, []);

  return (
    <div className="w-full md:w-[60%] m-auto">
      <div className="flex">
        <div className="space-y-3">
          <PostBar />
          <Post />
          <Post />
          <Post />
          <Post />
          <Post />
        </div>
        <Side />
      </div>
    </div>
  );
};

export default Home;
