"use client";
import React from "react";
import Appbar from "../Appbar";
import VideoMetadata from "./VideoMetadata";
import VideoDescription from "./VideoDescription";

const VideoDetails = () => {
  return (
    <div className="h-screen w-screen border px-5 py-3 gap-2 border-white flex flex-col">
      <Appbar />
      <div className="h-full w-full overflow-y-scroll">
        <div className="h-max w-2/3 px-4 border border-white flex flex-col">
          {/* video player */}
          <div className="h-[60vh] w-full rounded-xl bg-black border border-white">
          </div>
          {/* title channel likes description */}
          <VideoMetadata />
          <VideoDescription />
          <div className="h-[200vh] w-full bg-white/25"></div>
        </div>
      </div>
    </div>
  );
};

export default VideoDetails;
