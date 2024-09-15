import React from 'react'
import { getVideos } from "@/app/actions/video";
import VideoCard from '../VideoCard';

const Videos = async () => {
  const videos = await getVideos();

  return (
    <div className="h-full w-full border border-white flex flex-wrap px-5 py-4 justify-evenly">
      {videos.map((video) => {
        return <VideoCard id={video.id} video={video} />
      })
      }
    </div>
  )
}

export default Videos
