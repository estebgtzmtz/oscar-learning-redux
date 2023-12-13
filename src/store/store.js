import { configureStore } from "@reduxjs/toolkit";
import { spotifySlice } from "./spotify/spotifySlice";

export const store = configureStore({
  reducer:{
    spotify: spotifySlice.reducer
  }
});