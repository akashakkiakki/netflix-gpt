import React, { useEffect } from "react";
import logo from "../assets/Netflix_Logo.png";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { changeLanguage } from "../utils/configSlice";
import { toggleGptSearchView } from "../utils/gptSlice";
import { SUPPORTED_LANGUAGES } from "../utils/constants";

const Header = () => {
  const user = useSelector((store) => store.user);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const showSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {});
  };

  const handleGptSearchClick = () => {
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    return () => unsubscribe();
  }, []);

  return (
    <div>
      <div className="w-screen absolute px-0 sm:px-8 py-2 bg-black z-30 flex justify-between align items-center">
        <img className="w-32 sm:w-44" src={logo} alt="logo" />
        {user && (
          <div>
            {showSearch && (
              <select
                className="hidden sm:inline-block p-2 text-white bg-gray-700"
                onChange={handleLanguageChange}
              >
                {SUPPORTED_LANGUAGES.map((lang) => (
                  <option key={lang.indetifier} value={lang.indetifier}>
                    {lang.name}
                  </option>
                ))}
              </select>
            )}

            <button
              className="py-1 sm:py-2 px-2 sm:px-4 mx-1 sm:mx-4 my-2 bg-purple-800 text-white rounded-md"
              onClick={handleGptSearchClick}
            >
              {showSearch ? "Home" : "GPT Search"}
            </button>
            <button
              className="bg-red-700 px-2 mx-1 sm:px-3 py-1 sm:py-2 text-white rounded-lg"
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
