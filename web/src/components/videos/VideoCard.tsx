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
  suggested: boolean;
}

const VideoCard: React.FC<videoCardProp> = ({ id, video, suggested }) => {
  const router = useRouter();

  if (suggested) {
    return <div
      className="w-full h-24 flex mt-2"
      onClick={() => router.push(`/videos/${video.id}`)}
    >
      <div className="h-full w-[40%] border rounded-lg">
        <img src={video.thumbnail} className="h-full w-full rounded-lg" />
      </div>
      <div className="h-full w-[60%] px-3 py-1 border-0 border-white flex flex-col">
        <h1 className="mb-2">{video.title}This is the title of the video</h1>
        <h2 className="text-sm">{video.channelName} Men of Culture</h2>
        <span className="text-sm">{video.views} 500k views</span>
      </div>
    </div>

  }
  return (
    <div
      className={`w-full md:w-[48%] h-[300px] cursor-pointer lg:w-[24%] `}
      onClick={() => router.push(`/videos/${video.id}`)}
    >
      <div className="h-2/3 w-full border rounded-lg">
        <img src={video.thumbnail} className="h-full w-full rounded-lg" />
      </div>
      <div className="h-1/3 w-full py-3 border border-white flex flex-col gap-2">
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
