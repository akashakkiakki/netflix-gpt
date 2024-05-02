import React, { useRef, useState } from "react";
import Header from "./Header";
import backgroundImage from "../assets/background-image.jpg";
import { checkValidData } from "../utils/checkValidData";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import { auth } from "../utils/firebase";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();

  const [isSignInForm, setSignInForm] = useState(true);
  const [errMessage, setErrMessage] = useState(null);

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const message = checkValidData(email.current.value, password.current.value);
    setErrMessage(message);
    if (message) return;

    if (!isSignInForm) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value,
            photoURL: "https://media.licdn.com/dms/image/D4D03AQE0dKTAOIGJ1Q/profile-displayphoto-shrink_800_800/0/1688876141551?e=2147483647&v=beta&t=orL0nsCHbQek-hFlcaERSsDvLdwJNoDEgM4t1oRwCLY",
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              setErrMessage(error.message);
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
        })
        .catch((error) => {
          const errorMessage = error.message;
          setErrMessage(errorMessage);
        });
    }
  };

  const handleSignIn = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img className="h-screen sm:h-full object-cover" src={backgroundImage} alt="backgroundImage" />
      </div>
      <form
        onSubmit={(e) => {
          e.preventDefault();
        }}
        className="w-[90%] md:w-3/12 absolute mx-auto left-0 right-0 p-12 my-24 bg-black bg-opacity-80 text-white rounded-lg"
      >
        <h1 className="font-bold text-3xl py-2 my-2">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            ref={name}
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <input
          ref={password}
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        />
        <p className="text-red-500">{errMessage}</p>
        <button
          className="p-4 my-5 bg-red-700 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignInForm ? "Sign In" : "Sign Up "}
        </button>
        <p className="my-3 cursor-pointer" onClick={handleSignIn}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already Registered? Sign In Now"}
        </p>
      </form>
    </div>
  );
};

export default Login;
