import React from "react";
import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SeconderyContainer from "./SeconderyContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import useTvShows from "../hooks/useTvShows";

const Browse = () => {
  useNowPlayingMovies();
  usePopularMovies();
  useTvShows();

  return (
    <div>
      <Header />
      <MainContainer/>
      <SeconderyContainer/>
    </div>
  );
};

export default Browse;
