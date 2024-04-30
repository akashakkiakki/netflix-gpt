import React from "react";
import MovieCard from "./MovieCard";

const MovieList = ({ title, movies }) => {
  console.log(movies);
  return (
    <div>
      <div className="p-2">
        <h1 className="text-3xl p-2 text-white">{title}</h1>
        <div className="flex overflow-x-auto">
          {movies &&
            movies.map((movie) => <MovieCard key={movie.id} movie={movie} />)}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
