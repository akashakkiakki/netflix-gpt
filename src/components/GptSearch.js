import React from "react";
import GptSearchBar from "./GptSearchBar";
import GptMovieSuggestions from "./GptMovieSuggestions";
import backgroundImage from "../assets/background-image.jpg";

const GptSearch = () => {
  return (
    <div className="">
      <div className="absolute -z-10">
        <img src={backgroundImage} alt="backgroundImage" />
      </div>
      <GptSearchBar />
      <GptMovieSuggestions />
    </div>
  );
};

export default GptSearch;
