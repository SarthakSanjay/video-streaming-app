"use client"
import { Button } from "@/components/ui/button";
import React, { useRef, useState } from "react";

export default function () {
    const videoFileRef = useRef<HTMLInputElement | null>(null)
    const [selectedVideo , setSelectedVideo] = useState<File | null>(null)
    const [fileUrl , setFileUrl] = useState('')
    const handleClick = () =>{
        if(videoFileRef.current){
            videoFileRef.current.click()
        }
    }
    const handleSelectVideo = (event: any) =>{
        const file = event.target.files[0];
        setSelectedVideo(file);
        const url = URL.createObjectURL(file);
        setFileUrl(url);
        console.log(file);
    }
  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white flex justify-center items-center gap-5">
        {fileUrl && <video className="h-full w-1/2" controls src={fileUrl}></video>}
        <input ref={videoFileRef} type="file" accept="video/*" className="hidden" onChange={handleSelectVideo} />
      <Button onClick={handleClick}>Upload</Button>
    </div>
  );
}
