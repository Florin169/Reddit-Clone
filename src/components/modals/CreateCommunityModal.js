import React, { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { BsFillPersonFill } from "react-icons/bs";
import { VscEye } from "react-icons/vsc";
import { BiLockAlt } from "react-icons/bi";
import { useDispatch, useSelector } from "react-redux";
import { closeCreateCommunityModal } from "../../redux/features/authSlice";
import {
  doc,
  getDoc,
  runTransaction,
  serverTimestamp,
  setDoc,
} from "firebase/firestore";
import { db } from "../../firebase/firebase";
import UseAnimations from "react-useanimations";
import loadingg from "react-useanimations/lib/loading";

const CreateCommunityModal = () => {
  const [name, setName] = useState("");
  const [communityType, setCommunityType] = useState("public");
  const [loading, setloading] = useState(false);
  const [error, setError] = useState("");

  const dispatch = useDispatch();
  const modal = useSelector((state) => state.auth.createCommunityModal);
  const user = useSelector((state) => state.auth.user);

  const createCommunity = async () => {
    if (error) {
      setError("");
    }

    setloading(true);

    const communityDocRef = doc(db, "communities", name);

    await runTransaction(db, async (transaction) => {
      //Check if community already exists
      const communityDoc = await transaction.get(communityDocRef);
      if (communityDoc.exists()) {
        setError(`Sorry, r/${name} is taken, Try another`);
        setloading(false);
        return;
      }

      //Create community
      transaction.set(communityDocRef, {
        creatorId: user.uid,
        id: name,
        createdAt: serverTimestamp(),
        numerOfMembers: 1,
        privacyType: communityType,
      });

      // Add community to user
      transaction.set(doc(db, `users/${user.uid}/communitySnippets`, name), {
        communityId: name,
        isModerator: true,
      });
    });

    setName("");
    dispatch(closeCreateCommunityModal());
    setloading(false);
  };

  return (
    <div
      className={`${
        !modal && "hidden"
      } fixed inset-0 flex justify-center items-center bg-black/20 `}
    >
      <div className=" w-full h-full md:w-[511px] md:h-[525px] bg-white p-5 relative">
        <div className="flex justify-between">
          <h1>Create Community</h1>
          <AiOutlineClose
            className="w-6 h-6 cursor-pointer"
            onClick={() => dispatch(closeCreateCommunityModal())}
          />
        </div>
        <div className="my-4">
          <h2 className="font-bold mb-2">Name</h2>
          <p className="text-xs">
            Community names including capitalization cannot be changed.
          </p>
        </div>
        <input
          type="text"
          value={name}
          placeholder="r/"
          className="w-full h-9 outline-none border border-gray-400 rounded-md px-3"
          onChange={(e) => setName(e.target.value)}
        />
        <h1 className="  text-red-500 font-semibold rounded-full mt-3">
          {error}
        </h1>

        <h1 className="my-3">Community type</h1>
        <div className="flex items-center space-x-2 mb-3">
          <input
            type="radio"
            name="public"
            checked={communityType === "public"}
            onChange={(e) => setCommunityType(e.target.name)}
          />
          <BsFillPersonFill />
          <div className="flex items-center space-x-2">
            <h2>Public</h2>
            <p className="text-xs">
              Anyone can view, post, and comment to this community
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2 mb-3">
          {" "}
          <input
            type="radio"
            name="restricted"
            checked={communityType === "restricted"}
            onChange={(e) => setCommunityType(e.target.name)}
          />
          <VscEye />
          <div className="flex items-center space-x-2">
            <h2>Restricted</h2>
            <p className="text-xs">
              Anyone can view this community, but only approved users can post
            </p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          {" "}
          <input
            type="radio"
            name="private"
            checked={communityType === "private"}
            onChange={(e) => setCommunityType(e.target.name)}
          />
          <BiLockAlt />
          <div className="flex items-center space-x-2">
            <h2>Private</h2>
            <p className="text-xs">
              Only approved users can view and submit to this community
            </p>
          </div>
        </div>
        <div className="w-full h-20 bg-gray-200 absolute left-0 right-0 bottom-0 flex justify-end items-center px-5 space-x-3">
          <button className="outline w-[78px] h-[30px] text-sm">Cancel</button>
          <button
            className="solid w-[160px] h-[30px] text-sm flex justify-center items-center"
            onClick={createCommunity}
          >
            {loading ? (
              <UseAnimations animation={loadingg} />
            ) : (
              "Create community"
            )}
          </button>
        </div>
      </div>
    </div>
  );
};

export default CreateCommunityModal;
