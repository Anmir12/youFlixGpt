import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList'
const SecondaryContainer = () => {
  const movies= useSelector((store)=> store.movies)
  // console.log(movies)
  return (
    <div className='bg-black'> 
      <div className='-mt-[15%] relative '>
      <MovieList category={"Now Playing"} movies={movies.nowPlayingMovies}/>
      <MovieList category={"Popular"} movies={movies.popularMovies}/>
      <MovieList category={"Trending"} movies={movies.TrendingMovies}/>
      <MovieList category={"Upcoming"} movies={movies.UpcomingMovies}/>
      <MovieList category={"Thriller"} movies={movies.nowPlayingMovies}/>
      <MovieList category={"Mystery"} movies={movies.nowPlayingMovies}/>
      </div>
    </div>
  )
}

export default SecondaryContainer;