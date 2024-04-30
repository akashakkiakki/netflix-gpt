import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTvShows } from "../utils/moviesSlice";
import { useEffect } from "react";

const useTvShows = () => {
    const dispatch = useDispatch();
  
    const nowPlayingMovies = async () => {
      const data = await fetch(
        "https://api.themoviedb.org/3/trending/tv/day?language=en-US",
        API_OPTIONS
      );
      const json = await data.json();
      dispatch(addTvShows(json.results))
  
    };
  
    useEffect(() => {
      nowPlayingMovies();
    }, []);
}

export default useTvShows;