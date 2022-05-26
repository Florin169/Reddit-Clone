import React, { useEffect } from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userInfo } from "./redux/features/authSlice";
import { auth } from "./firebase/firebase";
import { Route, Routes } from "react-router-dom";
import CommunityPage from "./pages/r/CommunityPage";
import CreatePostPage from "./pages/r/CreatePostPage";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    onAuthStateChanged(auth, (currentUser) => {
      dispatch(userInfo(currentUser));
    });
  }, [dispatch]);

  return (
    <div>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:community" element={<CommunityPage />} />
        <Route path="/:community/submit" element={<CreatePostPage />} />
      </Routes>
    </div>
  );
};

export default App;
