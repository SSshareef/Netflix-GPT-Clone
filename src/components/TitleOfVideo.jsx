import React from "react";
import { faPlay } from "@fortawesome/free-solid-svg-icons";

const TitleOfVideo = ({ title, overview }) => {
  return (
    <div className="w-full aspect-video absolute pt-[20%] px-16 text-white bg-gradient-to-tr from-black">
      <h1 className="text-6xl font-extrabold">{title}</h1>
      <p className="py-6 text-lg w-[60%] line-clamp-2">{overview}</p>
      <div>
        <button className="bg-white text-black py-2 px-12 text-xl hover:bg-opacity-80 rounded-md my-8 ">
          Play
        </button>
        <button className="mx-2 bg-gray-500 text-white py-2 px-12 text-xl bg-opacity-60 hover:bg-opacity-50 rounded-md ">
         More Info
        </button>
      </div>
    </div>
  );
};

export default TitleOfVideo;
