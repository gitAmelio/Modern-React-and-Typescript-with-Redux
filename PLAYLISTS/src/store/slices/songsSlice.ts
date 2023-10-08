import { createSlice } from "@reduxjs/toolkit";
import { reset } from "../action";

type SongsState = string[];

export const songsSlice = createSlice({
  name: 'song',
  initialState: [] as SongsState,
  reducers: {
    addSong(state, action)  {
      state.push(action.payload);
    },
    removeSong(state, action) {
      const index = state.indexOf(action.payload)
      state.splice(index, 1); 
    }
  },
  extraReducers(builder) {
    builder.addCase(reset, () => {
      return [];
    })
  }
})

export const { addSong, removeSong } = songsSlice.actions;
export const songsReducer = songsSlice.reducer;