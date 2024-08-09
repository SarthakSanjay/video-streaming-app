"use client"
// import { uploadVideoToS3 } from "@/app/actions/video"; //need to invistigate
import { Button } from "@/components/ui/button";
import axios from "axios";
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
    const uploadVideo = async(file: File) =>{
      const res = await axios.post('/api/video' , {
        filename: file.name,
        contentType: file.type
      })

      if(res.status === 200){
       const upload = await axios.put(res.data.url , file)
        if(upload.status === 200) alert('video uploaded')
      }
    }
    const handleSelectVideo = async(event: any) =>{
       try {
         const file = event.target.files[0];
         setSelectedVideo(file);
         const url = URL.createObjectURL(file);
         setFileUrl(url);
         console.log(file);
         await uploadVideo(file)
       } catch (error : any) {
        console.log(error.message)
       }
    }
  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white flex justify-center items-center gap-5">
        {fileUrl && <video className="h-full w-1/2" controls src={fileUrl}></video>}
        <input ref={videoFileRef} type="file" accept="video/*" className="hidden" onChange={handleSelectVideo} />
      <Button onClick={handleClick}>Upload</Button>
    </div>
  );
}
