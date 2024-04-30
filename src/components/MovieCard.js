import React from "react";
import { IMG_CDN_URL } from "../utils/constants";

const MovieCard = ({movie}) => {
  return (
    <div>
      <div className="w-48 px-2">
        <img src={IMG_CDN_URL + movie?.poster_path} alt="movieCard" />
      </div>
    </div>
  );
};

export default MovieCard;
