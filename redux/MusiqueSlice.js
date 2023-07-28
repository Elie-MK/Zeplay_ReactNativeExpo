
import { configureStore, createSlice } from "@reduxjs/toolkit";

const MusicSlice = createSlice({
    name : "musicSlice", 
    initialState : {
        idMusic:null,
        stateMusic:false
    },
      reducers: {
        setMusicId: (state, action) => {
            state.idMusic = action.payload;
            state.stateMusic =action.payload
          },
    
          clearMusicId: (state) => {
            state.idMusic = null;
          },
      }, 
}); 

export default MusicSlice;