import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import About from "../../components/About";
import Post from "../../components/Post";
import PostBar from "../../components/PostBar";
import { db } from "../../firebase/firebase";
import { doc, getDoc } from "firebase/firestore";
import NotFound from "../../components/community/NotFound";
import { FaRedditAlien } from "react-icons/fa";
import { getSingleCommunity } from "../../redux/features/communitySlice";
import useCommunityData from "../../hooks/useCommunityData";
import { useSelector } from "react-redux";

const CommunityPage = () => {
  const singleCommunity = useSelector(
    (state) => state.community.singleCommunity
  );

  const { onJoinOrLeaveCommunity, snippets, communities } = useCommunityData();

  const isJoined = !!snippets.find(
    (snippet) => snippet.communityId === singleCommunity?.id
  );
  console.log(isJoined);

  if (singleCommunity === undefined) {
    return <NotFound />;
  }

  return (
    <div>
      <div className="h-[73px] bg-blue-400 w-full"></div>
      <div className="h-[73px] bg-white w-full">
        <div className="w-full md:w-[60%] h-full flex items-center m-auto  relative">
          <div className="absolute bottom-6 w-[66px] h-[66px] rounded-full border-[4px] border-white">
            {singleCommunity.photoURL ? (
              <img src="" alt="" />
            ) : (
              <div className="w-full h-full bg-orange-500 rounded-full flex justify-center items-center">
                <FaRedditAlien className="w-8 h-8" />
              </div>
            )}
          </div>
          <div className="ml-24">
            <div className="flex items-center space-x-6">
              <h1 className="font-bold text-xl md:text-2xl">
                {singleCommunity.id}
              </h1>
              <button
                className={`${
                  isJoined && "outline"
                } solid w-[82px] h-[30px] text-xs`}
                onClick={() =>
                  onJoinOrLeaveCommunity(singleCommunity, isJoined)
                }
              >
                {isJoined ? "Joined" : "Join"}
              </button>
            </div>
            <p className="text-sm font-bold">r/{singleCommunity.id}</p>
          </div>
        </div>
      </div>

      <div className="flex w-full md:w-[60%] m-auto">
        <div>
          <PostBar />
          <Post />
        </div>
        <About />
      </div>
    </div>
  );
};

export default CommunityPage;
