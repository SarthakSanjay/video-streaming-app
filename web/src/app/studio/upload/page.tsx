"use client"
// import { uploadVideoToS3 } from "@/app/actions/video"; //need to invistigate
import { Button } from "@/components/ui/button";
import { fail } from "assert";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Oval } from 'react-loader-spinner'
enum uploads {
  "no", "uploading", "uploaded"
}

export default function () {
  const videoFileRef = useRef<HTMLInputElement | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)
  const [isUploaded, setIsUploaded] = useState<uploads>(uploads.no)
  const [fileUrl, setFileUrl] = useState('')
  const router = useRouter()
  const handleClick = () => {
    if (videoFileRef.current) {
      videoFileRef.current.click()
    }
  }
  const uploadVideo = async () => {
    setIsUploaded(uploads.uploading)
    const res = await axios.post('/api/video', {
      filename: selectedVideo?.name,
      contentType: selectedVideo?.type
    })
    setIsUploaded(uploads.uploading)
    if (res.status === 200) {
      const upload = await axios.put(res.data.url, selectedVideo)
      if (upload.status === 200) {
        setIsUploaded(uploads.uploaded)
      }
    }
  }
  const handleSelectVideo = async (event: any) => {
    try {
      const file = event.target.files[0];
      setSelectedVideo(file);
      const url = URL.createObjectURL(file);
      setFileUrl(url);
      console.log(file);
    } catch (error: any) {
      console.log(error.message)
    }
  }

  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white flex justify-center items-center gap-5">
      {fileUrl && <video className="h-full w-1/2" controls src={fileUrl}></video>}
      <input ref={videoFileRef} type="file" accept="video/*" className="hidden" onChange={handleSelectVideo} />
      <Button onClick={handleClick}
        className={`${selectedVideo ? 'bg-blue-500' : ''}`}
      >{selectedVideo ? "Selected" : "Select Video"}</Button>
      <Button
        className={`${isUploaded === uploads.uploaded ? "bg-green-500" : ""} `}
        onClick={uploadVideo}
        disabled={isUploaded === uploads.uploaded ? true : false}
      >
        {isUploaded === uploads.uploading ? <Oval height="20" strokeWidth="8" /> : ""}
        {isUploaded === uploads.uploaded ? "Uploaded" : "Upload"}
      </Button>
      {
        isUploaded === uploads.uploaded ? <Button onClick={() => router.push("/studio")}>Go to Studio</Button> : ''
      }
    </div>
  );
}
