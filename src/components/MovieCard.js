import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
  if(!movie?.poster_path) return null;
  return (
    <div>
      <div className="w-32 sm:w-48 px-2">
        <img src={IMG_CDN_URL + movie?.poster_path} alt="movieCard" />
      </div>
    </div>
  );
};

export default MovieCard;
