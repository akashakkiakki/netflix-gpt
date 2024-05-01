import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const SeconderyContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black">
      <div className="mt-0 sm:-mt-60 relative z-20 pl-0 sm:pl-16">
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.popularVideo} />
        <MovieList title={"Popular Movies"} movies={movies.tvShows} />
        <MovieList title={"Now Playing"} movies={movies.nowPlayingMovies} />
        <MovieList title={"Trending Movies"} movies={movies.popularVideo} />
        <MovieList title={"Popular Movies"} movies={movies.tvShows} />
      </div>
    </div>
  );
};

export default SeconderyContainer;
