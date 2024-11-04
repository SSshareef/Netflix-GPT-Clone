import React from "react";
import { useSelector } from "react-redux";
import TitleOfVideo from "./TitleOfVideo";
import BackgroundOfVideo from "./BackgroundOfVideo";

const MainContainer = () => {
  const movies = useSelector((store) => store.movies?.nowPlayingMovies);
  if (!movies) return;
  const mainMovies = movies[0];
  const { original_title, overview, id } = mainMovies;

  return (
    <div>
      <TitleOfVideo title={original_title} overview={overview} />
      <BackgroundOfVideo movieId={id} />
    </div>
  );
};

export default MainContainer;
