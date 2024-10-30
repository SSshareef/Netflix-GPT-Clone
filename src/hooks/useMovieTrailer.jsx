import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../utils/constants";
import { addTrailerVideo } from "../utils/moviesSlice";

const useMovieTrailer = (movieID) => {
  const dispatch = useDispatch();

  // fetch movie trailer && updating the store with the video data
  const getMoviesVideo = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieID}/videos?language=en-US`,
      API_OPTIONS
    );
    const json = await data.json();

    const filterTrailers = json.results.filter(
      (video) => video.type === "Trailer"
    );
    const trailer = filterTrailers.length ? filterTrailers[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    getMoviesVideo();
  }, []);
};

export default useMovieTrailer;
