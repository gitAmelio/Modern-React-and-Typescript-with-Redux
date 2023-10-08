import { configureStore } from '@reduxjs/toolkit';
import { moviesReducer, addMovie, removeMovie } from './slices/moviesSlice';
import { songsReducer, addSong, removeSong } from './slices/songsSlice';
import { reset } from './action';

const store = configureStore({
  reducer: {
    songs: songsReducer,
    movies: moviesReducer
  }
})

export type RootState = ReturnType<typeof store.getState>;

export {store, addSong, removeSong, addMovie, removeMovie, reset}


