import React from 'react'

const VideoTitle = ({title,overview}) => {
  return (
    <div className='absolute py-56 pl-12 text-white bg-gradient-to-r from-black w-full aspect-video'>
      <div className='text-5xl font-bold'>{title}</div>
      <p className='w-1/4 m-4 text-md '>{overview}</p>
      <button className='bg-red-700 text-white text-l p-4 m-2 w-32 rounded-lg hover:bg-red-400'>Play</button>
      <button className='bg-red-700 text-white text-l p-4 m-2 w-32 rounded-lg hover:bg-red-400'>More Info</button>
    </div>
  )
}

export default VideoTitle;