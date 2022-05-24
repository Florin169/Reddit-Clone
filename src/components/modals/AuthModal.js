import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import AuthButton from "../AuthButton";
import { FcGoogle } from "react-icons/fc";
import { AiOutlineClose } from "react-icons/ai";
import { closeModal } from "../../redux/features/authSlice";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../../firebase/firebase";

const AuthModal = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const authModal = useSelector((state) => state.auth.authModal);
  const dispatch = useDispatch();

  const signUp = () => {
    signInWithEmailAndPassword(auth, email, password);
    dispatch(closeModal());
  };

  return (
    <div
      className={`${
        authModal ? "fixed" : "hidden"
      }  inset-0 bg-black/40 flex justify-center items-center`}
    >
      <div className="w-[95%] md:w-[60%] h-[80%] m-auto bg-white p-5 rounded-md">
        <div className="flex justify-between">
          <h1 className="text-3xl">Log in</h1>
          <AiOutlineClose
            className="text-2xl"
            onClick={() => dispatch(closeModal())}
          />
        </div>
        <p className="my-5 text-sm">
          By continuing, you agree to our{" "}
          <span className="text-blue-600">User Agreement</span> and{" "}
          <span className="text-blue-600"> Privacy Policy</span>.
        </p>

        <div className="flex flex-col space-y-5 justify-center items-center">
          <AuthButton>Continue with Google</AuthButton>
          <AuthButton>Continue with Apple</AuthButton>
        </div>
        <div className="text-center my-10">or</div>
        <div className="space-y-7">
          <input
            required
            type="email"
            placeholder="Email"
            value={email}
            className="input-auth"
            onChange={(e) => setEmail(e.target.value)}
          />
          <input
            required
            type="password"
            placeholder="Password"
            value={password}
            className="input-auth"
            onChange={(e) => setPassword(e.target.value)}
          />

          <AuthButton loginmodal onClick={signUp}>
            Log in
          </AuthButton>
        </div>
      </div>
    </div>
  );
};

export default AuthModal;
