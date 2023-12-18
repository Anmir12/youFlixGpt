import React from "react";
import Header from "./Header";
import useNowPlaying from "../hooks/useNowPlaying";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopular from "../hooks/usePopular";
import useTrendingMovies from "../hooks/useTrending";
import useUpcomingMovies from "../hooks/useUpcomingMovies";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";
const Browse = () => {
  const gptSearchView = useSelector((store) => store.gpt.GptSearchView);
  useNowPlaying();
  usePopular();
  useTrendingMovies();
  useUpcomingMovies();

  return (
    <div>
      <Header />
      {gptSearchView ? ( 
      <GptSearch />
      ) : (
        <>
      <MainContainer />
      <SecondaryContainer />
        </>
      )}
    </div>
  );
};

export default Browse;
