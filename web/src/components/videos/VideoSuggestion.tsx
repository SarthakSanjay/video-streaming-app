import React from 'react'
import VideoCard from './VideoCard'
import { getVideos } from '@/app/actions/video'

const VideoSuggestion = () => {
  return (
    <div className='h-max w-1/3'>
      {[1, 23, 4,].map((video) => {
        return <VideoCard id={video.id} video={video} suggested={true} />
      })}
    </div>
  )
}

export default VideoSuggestion
