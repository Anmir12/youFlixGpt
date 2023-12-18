import React from 'react'
import {IMAGE_URL} from './constants'
const MovieCard = ({poster}) => {
  if(!poster) return null;
  return (
    <div className='w-48 p-2 '>
      <img src={IMAGE_URL+poster} alt="poster" />
    </div>
  )
}

export default MovieCard;