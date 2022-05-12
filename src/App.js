import React from "react";
import Navbar from "./components/Navbar";
import Home from "./pages/Home";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { userInfo } from "./redux/features/authSlice";
import { auth } from "./firebase/firebase";

const App = () => {
  const dispatch = useDispatch();

  onAuthStateChanged(auth, (currentUser) => {
    dispatch(userInfo(currentUser));
  });

  return (
    <div>
      <Navbar />
      <Home />
    </div>
  );
};

export default App;
