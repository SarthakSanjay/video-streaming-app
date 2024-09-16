import React from 'react'
import { EllipsisVertical, Share, ThumbsDown, ThumbsUp } from 'lucide-react'

const VideoMetadata = () => {

  return (
    <div className="h-1/3 w-full border border-yellow-500 flex flex-col gap-2">
      <h1 className="text-2xl flex justify-start items-center h-14 w-full">This is the title of the video</h1>
      <div className="h-14 w-full hover:bg-blue-500/25 flex items-center justify-between gap-2">
        <div className="h-full w-1/3 flex gap-2">
          <div className="h-12 w-12 rounded-full bg-white">
          </div>
          <div className="h-full w-max px-2 flex flex-col">
            <h1>Channel Name</h1>
            <h2>10.5M...</h2>
          </div>
        </div>
        <div className="h-12 w-2/3 flex gap-2 justify-evenly items-center border-0 border-green-500">
          <button className="h-full  w-max px-5 py-2 rounded-xl border border-white">Subscribe</button>
          <div className="h-full w-1/3 flex gap-2 justify-center items-center border border-white rounded-xl">
            <button className="flex gap-2"><ThumbsUp />14k</button>
            <button className="flex gap-2"><ThumbsDown />12k</button>

          </div>
          <div className="h-full w-1/3 flex gap-2 items-center justify-center">
            <button className="h-full w-max px-4 rounded-xl flex items-center justify-center gap-2 border border-white"><Share />Share</button>
            <button className="h-full w-12 border border-white rounded-xl grid place-content-center"><EllipsisVertical /></button>
          </div>

        </div>

      </div>
    </div>

  )
}

export default VideoMetadata
