import React from 'react'
import { Button } from '../ui/button'
import { Oval } from 'react-loader-spinner'
import { useRouter } from 'next/navigation'

enum uploads {
  "no", "uploading", "uploaded"
}

const SelectVideos = ({
  handleClick,
  selectedVideo,
  isUploaded,
  uploadVideo
}: {
  handleClick: () => void,
  selectedVideo: File | null,
  isUploaded: uploads,
  uploadVideo: () => void
}) => {
  const router = useRouter()
  return (
    <>
      <div className="flex h-full w-full justify-center items-center gap-10 border-0 border-green-500">
        <Button onClick={handleClick}
          className={`${selectedVideo ? 'bg-blue-500' : ''}`}
        >Select Video</Button>
        {selectedVideo &&
          <><Button
            className={`${isUploaded === uploads.uploaded ? "bg-green-500" : ""} `}
            onClick={uploadVideo}
            disabled={isUploaded === uploads.uploaded ? true : false}
          >
            {isUploaded === uploads.uploading ? <Oval height="20" strokeWidth="8" /> : ""}
            {isUploaded === uploads.uploaded ? "Uploaded" : "Upload"}
          </Button><Button onClick={() => router.push("/studio")}>Cancle</Button></>
        }
        {
          isUploaded === uploads.uploaded ? <Button onClick={() => router.push("/studio")}>Go to Studio</Button> : ''
        }
      </div>
      {!selectedVideo && <p>Select video to upload</p>}
    </>

  )
}

export default SelectVideos
