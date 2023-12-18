import React, { useRef } from "react";
import { useDispatch } from "react-redux";
import { displayGptSearch } from "../utils/gptSlice";
import openai from "../utils/OpenAI";
import { API_OPTIONS } from "./constants";
import { getGptMovies } from "../utils/gptSlice";

const GptSearchBar = () => {
  const dispatch = useDispatch();

  const gptInput = useRef(null);

  const handleGptInput = async () => {

    // dispatch(displayGptSearch(gptInput.current.value));
    const query =
      "act as a movie recommendation system" +
      gptInput.current.value +
      "give me the names of 5 movies each movie seperated by commas and dont give me other text other than movie names i will give an example of movies and how to give it ex:bazigar,awarapan,sholay,koi mil gaya,adavi ramudu";

    const gptResult = await openai.chat.completions.create({
      messages: [{ role: "user", content: query }],
      model: "gpt-3.5-turbo",
    });

    const movieResults = gptResult?.choices[0]?.message?.content.split(",");
   
    const promiseArray =movieResults.map(movie=> searchMovie(movie));

    const tmdbMovies = await Promise.all(promiseArray);

    console.log(tmdbMovies)
     
    dispatch(getGptMovies({movieNames:movieResults,moviesList:tmdbMovies}))
  };
  
  const  searchMovie= async(movie)=>{
    const data = await fetch('https://api.themoviedb.org/3/search/movie?query='+movie+'&include_adult=false&language=en-US&page=1', API_OPTIONS)

    const json =await data.json()

    return json.results
  }

  return (
    <div className="flex justify-center">
      <form className="pt-[10%]" onSubmit={(e) => e.preventDefault()}>
        <input
          ref={gptInput}
          className="rounded-lg w-96 p-2 bg-black text-white"
          type="text"
          placeholder="What Would You Like To Watch ?"
        />
        <button
          className="bg-green-400 rounded-lg m-2 p-2"
          onClick={handleGptInput}
        >
          Search
        </button>
      </form>
    </div>
  );
};

export default GptSearchBar;
