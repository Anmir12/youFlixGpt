import { useDispatch } from "react-redux";
import { API_OPTIONS,trending_url} from "../components/constants";
import { useEffect } from "react";
import { addTrendingMovies} from '../utils/moviesSlice'

 const useTrendingMovies = ()=>{
    const dispatch =useDispatch();
  const TrendingMovies = async ()=>{
    const data = await fetch(trending_url,API_OPTIONS);
    const json = await data.json()

    dispatch(addTrendingMovies(json.results))
  }
  useEffect(()=>{
    TrendingMovies();
  },[])
 }

 export default useTrendingMovies;