import React from 'react'
import VideoTitle from './VideoTitle';
import VideoBackground from './VideoBackground';
import { useSelector } from 'react-redux';
const MainContainer = () => {

  const movieList = useSelector((store) =>store.movies?.nowPlayingMovies);
 
  if(!movieList) return;

  // console.log(movieList)

  const movieOne = movieList[0];

  // console.log(movieOne)

  const {title,overview,id} = movieOne;

  return (
    <div>
      <VideoTitle title={title} overview={overview} />
      <VideoBackground movieId={id}/>
    </div>
  )
}

export default MainContainer;