import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addPopularVideo } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePopularMovies = () => {
  const dispatch = useDispatch();

  const getPopularMovies = useSelector((store) => store.movies?.popularVideo);

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/movie/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addPopularVideo(json.results));
  };

  useEffect(() => {
    !getPopularMovies && nowPlayingMovies();
  }, []);
};

export default usePopularMovies;
