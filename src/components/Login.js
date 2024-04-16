import React, { useState } from "react";
import Header from "./Header";
import backgroundImage from "../assets/background-image.jpg";
const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const handleSignIn = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div>
      <Header />
      <div className="absolute">
        <img src={backgroundImage} alt="backgroundImage" />
      </div>
      <form className="w-3/12 absolute mx-auto left-0 right-0 p-12 my-24 bg-black bg-opacity-80 text-white rounded-lg">
        <h1 className="font-bold text-3xl py-2 my-2">
          {isSignInForm ? "Sign In" : "Sign Up "}
        </h1>
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-2 my-3 w-full bg-gray-700"
          />
        )}
        <input
          type="text"
          placeholder="Email Address"
          className="p-2 my-3 w-full bg-gray-700"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-2 my-3 w-full bg-gray-700"
        />
        <button className="p-4 my-5 bg-red-700 w-full rounded-lg">
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
