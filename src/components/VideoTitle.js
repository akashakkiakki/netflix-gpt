const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video pt-[2%] sm:pt-[12%] px-5 sm:px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-2xl sm:text-5xl font-bold">{title}</h1>
      <p className="hidden sm:block text-sm sm:text-lg w-full sm:w-1/4">{overview}</p>
      <div className="hidden sm:block">
        <button className="px-6 sm:px-12 py-2 sm:py-3 text-sm sm:text-xl rounded-lg bg-white text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 px-6 sm:px-12 py-2 sm:py-3 text-sm sm:text-xl rounded-lg bg-slate-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
