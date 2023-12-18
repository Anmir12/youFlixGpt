import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
    name:"movies",
    initialState:{
        nowPlayingMovies:null,
        playTrailerVideo:null,
    },
    reducers:{
        playingMovies:(state,action)=>{
            state.nowPlayingMovies = action.payload;
        },
        playTrailer :(state,action) =>{
            state.playTrailerVideo = action.payload;
        },
        addPopularMovies :(state,action) =>{
            state.popularMovies = action.payload;
        },
        addTrendingMovies :(state,action) =>{
            state.TrendingMovies = action.payload;
        },
        addUpcomingMovies :(state,action) =>{
            state.UpcomingMovies = action.payload;
        },
    }
});
export const {playingMovies,playTrailer,addPopularMovies,addTrendingMovies,addUpcomingMovies} =moviesSlice.actions
export default moviesSlice.reducer;