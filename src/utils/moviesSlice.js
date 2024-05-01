import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    traiorVideo: null,
    tvShows: null,
    popularVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.traiorVideo = action.payload;
    },
    addPopularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    addTvShows: (state, action) => {
      state.tvShows = action.payload;
    },
  },
});

export const {
  addNowPlayingMovies,
  addTrailorVideo,
  addPopularVideo,
  addTvShows,
} = moviesSlice.actions;

export default moviesSlice.reducer;
