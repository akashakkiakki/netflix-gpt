import React, { useRef } from "react";
import lang from "../utils/languageConstants";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addGptMovieResult } from "../utils/gptSlice";

const GptSearchBar = () => {
  const langKey = useSelector((store) => store.config.lang);
  const searchText = useRef(null);
  const dispatch = useDispatch();

  const searchMovieTMDB = async (movieName) => {
    const data = await fetch(
      `https://api.themoviedb.org/3/search/movie?query=+${movieName}+&include_adult=false&language=en-US&page=1`,
      API_OPTIONS
    );

    const json = await data.json();
    dispatch(
      addGptMovieResult({ movieName: movieName, searchedResult: json.results })
    );
  };

  const handleGptSearchClick = async () => {
    searchMovieTMDB(searchText.current.value);
    // const gptResult = await openai.chat.completions.create({
    //   messages: [{ role: "user", content: searchText.current.value }],
    //   model: "gpt-3.5-turbo",
    // });
  };

  return (
    <div className="pt-[7%] flex justify-center">
      <form
        className="w-1/2 bg-black grid grid-cols-12"
        onSubmit={(e) => e.preventDefault()}
      >
        <input
          ref={searchText}
          className="p-4 m-4 col-span-9"
          type="text"
          placeholder={lang[langKey].gptSearchPlanceHolder}
        />
        <button
          className="p-2 px-4 m-4 bg-red-700 text-white rounded-lg col-span-3"
          onClick={handleGptSearchClick}
        >
          {lang[langKey].search}
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
