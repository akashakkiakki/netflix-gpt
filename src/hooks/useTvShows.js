import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvShows = () => {
  const dispatch = useDispatch();
  const getTvShows = useSelector((store) => store.movies?.tvShows);

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
      API_OPTIONS
    );
    const json = await data.json();
    dispatch(addTvShows(json.results));
  };

  useEffect(() => {
    !getTvShows && nowPlayingMovies();
  }, []);
};

export default useTvShows;
