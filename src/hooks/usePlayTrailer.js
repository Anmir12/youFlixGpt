import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/constants";
import { playTrailer } from "../utils/moviesSlice";
import { useEffect } from "react";

const usePlayTrailer = (movieId)=>{
    const dispatch = useDispatch();
    const getMovieTrailer = async () => {
      const data = await fetch(
        `https://api.themoviedb.org/3/movie/${movieId}/videos`,
        API_OPTIONS
      );
  
      const json = await data.json();
  
      const filteredResults = json.results.filter(
        (video) => video.type === "Trailer"
      );
  
      const movieTrailer = filteredResults.length
        ? filteredResults[0]
        : json.results[0];
  
      // console.log(movieTrailer);
  
      dispatch(playTrailer(movieTrailer));
    };
    useEffect(() => {
      getMovieTrailer();
    }, []);
}

export default usePlayTrailer;