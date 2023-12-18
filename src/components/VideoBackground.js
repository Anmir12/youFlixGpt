import React from "react";

import { useSelector } from "react-redux";
import usePlayTrailer from "../hooks/usePlayTrailer";

const VideoBackground = ({ movieId }) => {
  const trailerVideo = useSelector((store) => store.movies?.playTrailerVideo);

  usePlayTrailer(movieId);
  return (
    <div className="w-full"> 
      <iframe
       className="w-full  aspect-video bg-slate-500"
        src={"https://www.youtube.com/embed/" + trailerVideo?.key+ "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope;web-share;"
      ></iframe>
    </div>
  );
};

export default VideoBackground;
