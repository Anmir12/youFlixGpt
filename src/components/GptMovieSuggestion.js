import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const GptMovieSuggestion = () => {
  const {movieNames,moviesList} = useSelector(store =>store.gpt)
  if(!moviesList && !movieNames) return null;
  return (
    <div>
      {movieNames.map((movie,index)=>(<MovieList key={movie} category={movie} movies={moviesList[index]}/> ))}
  
    </div>
  )
}

export default GptMovieSuggestion;