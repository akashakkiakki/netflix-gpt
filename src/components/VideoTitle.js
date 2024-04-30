const VideoTitle = ({ title, overview }) => {
  return (
    <div className="w-screen aspect-video pt-[12%] px-24 absolute text-white bg-gradient-to-r from-black">
      <h1 className="text-5xl font-bold">{title}</h1>
      <p className="py-6 text-lg w-1/4">{overview}</p>
      <div>
        <button className="px-12 py-3 text-xl rounded-lg bg-white text-black hover:bg-opacity-80">
          Play
        </button>
        <button className="mx-2 px-12 py-3 text-xl rounded-lg bg-slate-500">
          More Info
        </button>
      </div>
    </div>
  );
};

export default VideoTitle;
