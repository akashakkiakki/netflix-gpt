import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    traiorVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addTrailorVideo: (state, action) => {
      state.traiorVideo = action.payload;
    },
  },
});

export const { addNowPlayingMovies, addTrailorVideo } = moviesSlice.actions;

export default moviesSlice.reducer;
