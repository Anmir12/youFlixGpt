import { createSlice } from "@reduxjs/toolkit";

const gptSlice =createSlice({
    name:'gpt',
    initialState:{
        GptSearchView:false,
        gptSearchClick:null,
        movieNames :null,
        moviesList :null
    },
    reducers:{
        showGptSearchView : (state)=>{
         state.GptSearchView =!state.GptSearchView
        },
        displayGptSearch :(state,action)=>{
            state.gptSearchClick =action.payload;
        },
        getGptMovies : (state,action)=>{
          const {movieNames,moviesList} = action.payload;
          state.movieNames = movieNames;
          state.moviesList = moviesList;
        }
    }
})

export const {showGptSearchView,displayGptSearch,getGptMovies} =gptSlice.actions;
export default gptSlice.reducer;