
import { configureStore, createSlice } from "@reduxjs/toolkit";
import MusicSlice from "./MusiqueSlice";

export const {setMusicId, clearMusicId} = MusicSlice.actions


export const store  = configureStore({
    reducer: {
        music: MusicSlice.reducer, 
    }, 
})

