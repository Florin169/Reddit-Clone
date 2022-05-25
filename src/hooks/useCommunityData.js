import {
  collection,
  doc,
  getDoc,
  getDocs,
  increment,
  writeBatch,
} from "firebase/firestore";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { db } from "../firebase/firebase";
import {
  addSnippet,
  deleteSnippet,
  getSingleCommunity,
  getSnippets,
} from "../redux/features/communitySlice";

const useCommunityData = () => {
  const { community } = useParams();
  const dispatch = useDispatch();

  const communities = useSelector((state) => state.community.communities);
  const user = useSelector((state) => state.auth.user);
  const snippets = useSelector((state) => state.community.mySnippets);

  const getCommunity = async () => {
    const communityRef = doc(db, "communities", community);
    const communityDoc = await getDoc(communityRef);
    dispatch(getSingleCommunity(communityDoc.data()));
  };

  const getMySnippets = async () => {
    try {
      const snippetDocs = await getDocs(
        collection(db, `users/${user.uid}/communitySnippets`)
      );

      const snippets = snippetDocs.docs.map((doc) => ({ ...doc.data() }));
      dispatch(getSnippets(snippets));
    } catch (error) {
      console.log("My snippets error", error);
    }
  };

  useEffect(() => {
    getCommunity();
    getMySnippets();
  }, [user]);

  const onJoinOrLeaveCommunity = (singleCommunity, isJoined) => {
    //if the user not signed in open auth modal

    if (isJoined) {
      leaveCommunity(singleCommunity.id);
      return;
    }
    joinCommunity(singleCommunity);
  };

  const joinCommunity = async (communityData) => {
    try {
      const batch = writeBatch(db);

      const newSnippet = {
        communityId: communityData.id,
        imageURL: communityData.imageURL || "",
      };

      batch.set(
        doc(db, `users/${user.uid}/communitySnippets`, communityData.id),
        newSnippet
      );

      batch.update(doc(db, "communities", communityData.id), {
        numberOfMembers: increment(1),
      });

      await batch.commit();

      dispatch(addSnippet(newSnippet));
    } catch (error) {
      console.log("joinCommunity error", error.message);
    }
  };

  const leaveCommunity = async (communityId) => {
    try {
      const batch = writeBatch(db);

      batch.delete(doc(db, `users/${user.uid}/communitySnippets`, communityId));

      batch.update(doc(db, "communities", communityId), {
        numberOfMembers: increment(-1),
      });

      await batch.commit();

      dispatch(deleteSnippet(communityId));
    } catch (error) {
      console.log("leaveCommunity error", error.message);
    }
  };

  return {
    //data and functions
    snippets,
    communities,
    onJoinOrLeaveCommunity,
  };
};

export default useCommunityData;
