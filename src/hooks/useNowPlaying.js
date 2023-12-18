import { useDispatch } from "react-redux";
import { API_OPTIONS, url } from "../components/constants";
import { playingMovies } from "../utils/moviesSlice";
import { useEffect } from "react";

 const useNowPlaying = ()=>{
    const dispatch =useDispatch();
  const nowPlayingMovies = async ()=>{
    const data = await fetch(url,API_OPTIONS);
    const json = await data.json()

    // console.log(json.results)

    dispatch(playingMovies(json.results))
  }
  useEffect(()=>{
    nowPlayingMovies();
  },[])
 }

 export default useNowPlaying;