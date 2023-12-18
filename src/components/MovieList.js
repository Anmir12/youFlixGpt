import React from "react";
import MovieCard from "./MovieCard";
const MovieList = ({ category, movies }) => {
  // console.log(movies);
  return (
    <div className="relative p-6 bg-black opacity-90">
      <h1 className="text-3xl m-4 text-white">{category}</h1>
      <div className="flex overflow-x-scroll scrollbar-hide">
        <div className="flex">
          {movies?.map((movie) => (
            <MovieCard key={movie.id} poster={movie.poster_path} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default MovieList;
