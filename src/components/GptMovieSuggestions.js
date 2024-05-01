import React from "react";
import { useSelector } from "react-redux";
import MovieList from "../components/MovieList";

const GptMovieSuggestions = () => {
  const { movieName, searchedResult } = useSelector(
    (store) => store.gpt
  );
  if (!movieName) return null;
  console.log(searchedResult);
  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-80">
      <div>
        <MovieList key={searchedResult.name} title={"Searched Movies"} movies={searchedResult} />
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
