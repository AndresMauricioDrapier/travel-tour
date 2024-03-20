'use client'
import React, { useState } from "react";
import { RiPlayFill } from "react-icons/ri";

const Video = () => {
  const [isPlaying, setIsPlaying] = useState(false);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <section className="max-container padding-container py-16">
      <div className="bg-video bg-cover bg-center bg-no-repeat h-[500px] md:h-[400px] xl:h-[800px] grid place-items-center rounded-2xl relative">
        {!isPlaying && (
          <div
            className="h-16 w-16 bg-green-50 text-white bold-32 flexCenter rounded-full cursor-pointer z-10"
            onClick={togglePlay}
          >
            <RiPlayFill />
          </div>
        )}
        {isPlaying && (
          <video
            className=" h-50 object-cover"
            src="/utlimoViaje/ultimoViaje.mp4"
            controls
            autoPlay
            onClick={togglePlay}
          />
        )}
      </div>
    </section>
  );
};

export default Video;
