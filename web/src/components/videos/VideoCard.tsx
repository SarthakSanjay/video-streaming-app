"use client";
import { useRouter } from "next/navigation";
import React from "react";

interface video {
  id: number;
  thumbnail: string;
  title: string;
  views: number;
  likes: number;
  channelName: string;
  description: string;
  src: string;
  // createdAt: Date;
}
interface videoCardProp {
  id: number;
  video: video;
}

const VideoCard: React.FC<videoCardProp> = ({ id, video }) => {
  const router = useRouter();
  return (
    <div
      className="w-full md:w-[48%] lg:w-[22%] h-[300px] border-0 cursor-pointer"
      onClick={() => router.push(`/videos/${video.id}`)}
    >
      <div className="h-2/3 w-full border rounded-lg">
        <img src={video.thumbnail} className="h-full w-full rounded-lg" />
      </div>
      <div className="h-1/3 w-full py-3 border-0 border-white flex flex-col gap-2">
        <h1>{video.title}</h1>
        <div className="flex gap-2 items-center">
          <div className="h-8 w-8 rounded-full bg-white"></div>
          <h2>{video.channelName}</h2>
          <span>{video.views}</span>
          {/* <span>{video.createdAt}</span> */}
        </div>
      </div>
    </div>
  );
};

export default VideoCard;
