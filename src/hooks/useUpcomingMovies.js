import { useDispatch } from "react-redux";
import { API_OPTIONS, upcoming_url} from "../components/constants";
import { useEffect } from "react";
import { addUpcomingMovies} from '../utils/moviesSlice'

 const useUpcomingMovies = ()=>{
    const dispatch =useDispatch();
  const upcomingMovies = async ()=>{
    const data = await fetch(upcoming_url,API_OPTIONS);
    const json = await data.json()

    dispatch(addUpcomingMovies(json.results))
  }
  useEffect(()=>{
   upcomingMovies();
  },[])
 }

 export default useUpcomingMovies;