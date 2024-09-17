import React, { useState } from 'react'
import { Input } from '../ui/input'
import { comment } from 'postcss'
import { ChevronDown } from 'lucide-react'

interface Reply {
  name: string;
  comment: string;
}

interface Comment {
  name: string;
  comment: string;
  replies?: Reply[];  // Optional, as not all comments have replies
}
const VideoComments = () => {
  const [toggleReplies, setToggleReplies] = useState(false)
  const comments = [
    { name: "sharko", comment: "nice video" },
    {
      name: "marko", comment: "good but expected more", replies: [
        { name: "jacob", comment: "yes agreed" },
        { name: "mad", comment: "ya it's decent" },
        { name: "shinchan", comment: "ab main etna bhi khas nhi" }
      ]
    },
    { name: "doraemaon", comment: "I love doracake" }
  ]
  return (
    <div className='h-max w-full'>
      <div className='h-24 w-full border border-white px-2 flex justify-center items-center gap-3'>
        <div className='h-12 w-12 bg-white rounded-full'></div>
        <Input placeholder='Add a comment' />
      </div>
      <div className='h-max w-full py-4 px-2'>
        {comments.map((comment) => {
          return <div className='h-max w-full border border-white '>
            <div className='h-14 w-full flex gap-3 items-center'>
              <div className='h-12 w-12 bg-blue-600 rounded-full'></div>
              <h1>{comment.name}</h1>
            </div>
            <p className='ml-14'>{comment.comment}</p>
            <button className='flex text-violet-500 ml-14'
              onClick={() => setToggleReplies(!toggleReplies)}>{comment.replies && <ChevronDown />} {comment.replies?.length}</button>
            {toggleReplies ? <Replies comment={comment} /> : ""}
          </div>
        })}
      </div>
    </div>
  )
}

const Replies = ({ comment }: { comment: Comment }) => {
  return <div className='ml-14'>{
    comment.replies?.map((comment) => {
      return <div className='h-max w-full'>
        <div className='h-14 w-full flex gap-3 items-center'>
          <div className='h-12 w-12 bg-blue-600 rounded-full'></div>
          <h1>{comment.name}</h1>
        </div>
        <p className='ml-14'>{comment.comment}</p>
      </div>
    })
  }</div>
}


export default VideoComments

