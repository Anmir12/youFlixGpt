import { useDispatch } from "react-redux";
import { API_OPTIONS, Popular_url} from "../components/constants";
import { useEffect } from "react";
import {addPopularMovies} from '../utils/moviesSlice'

 const usePopular = ()=>{
    const dispatch =useDispatch();
  const popularMovies = async ()=>{
    const data = await fetch(Popular_url,API_OPTIONS);
    const json = await data.json()

    // console.log(json.results)

    dispatch(addPopularMovies(json.results))
  }
  useEffect(()=>{
    popularMovies();
  },[])
 }

 export default usePopular;