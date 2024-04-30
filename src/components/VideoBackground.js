import { useSelector } from "react-redux";
import useMovieTrailor from "../hooks/useMovieTrailor";

const VideoBackground = ({ movieId }) => {

  useMovieTrailor(movieId);
  const trailorVideo = useSelector((store) => store.movies?.traiorVideo);

  return (
    <div className="w-full">
      <iframe
      className="w-full aspect-video"
        src={"https://www.youtube.com/embed/"+trailorVideo?.key + "?&autoplay=1&mute=1"}
        title="YouTube video player"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      ></iframe>
    </div>
  );
};

export default VideoBackground;