import React from "react";
import logo from "../assets/Netflix_Logo.png";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";

const Header = () => {
  const user = useSelector((store) => store.user);

  const navigate = useNavigate();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        navigate("/");
      })
      .catch((error) => {});
  };

  return (
    <div>
      <div className="w-screen absolute px-8 py-2 bg-gradient-to-b from-black z-30 flex justify-between align items-center">
        <img className="w-44" src={logo} alt="logo" />
        {user && (
          <div>
            <button
              className="bg-red-700 px-3 py-2 text-white rounded-lg"
              onClick={handleSignOut}
            >
              Sign Out
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

export default Header;
