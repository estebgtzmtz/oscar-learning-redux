import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  counter: 0,
  nombre: 'oscar',
  superpoder: 'no hace nada',
  acaboLaEscuela: true
}

export const spotifySlice = createSlice({
  name: 'spotify',
  initialState,
  reducers:{
    addOne: (state) => {
      state.counter = state.counter + 1
    }
  }
});

export const {addOne} = spotifySlice.actions;