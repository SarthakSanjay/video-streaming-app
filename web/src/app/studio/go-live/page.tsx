"use client";
import { Button } from "@/components/ui/button";
import React, { useEffect, useRef, useState } from "react";

export default function () {
  const [videoStream, setVideoStream] = useState<MediaStream | null>(null);
  const [openCamera, setOpenCamera] = useState(false);
  const videoRef = useRef<HTMLVideoElement>(null);
  useEffect(() => {
    const startCamera = async () => {
      const media = await navigator.mediaDevices.getUserMedia({
        audio: true,
        video: true,
      });
      setVideoStream(media);
    };
    if (openCamera) {
      startCamera();
    } else {
      if (videoStream) {
        videoStream.getTracks().forEach((track: any) => track.stop());
        setVideoStream(null);
      }
    }
  }, [openCamera]);

  useEffect(() => {
    if (videoRef.current && videoStream) {
      videoRef.current.srcObject = videoStream;
    }
    console.log(videoStream);
  }, [videoStream]);
  return (
    <div className="h-screen w-screen dark:bg-black dark:text-white flex justify-start items-center gap-5">
      <div className="flex flex-col h-full w-1/2 justify-center items-center gap-5">
        <div className={`h-5 rounded-full w-5 ${openCamera ? "bg-green-500" : 'bg-red-500'} absolute top-10 left-10`}></div>
        <video
          ref={videoRef}
          className="h-2/3 w-4/5 border"
          autoPlay
          muted
        ></video>
        <Button onClick={() => setOpenCamera((p) => !p)}>
          {openCamera ? "Stop Camera" : "Open Camera"}
        </Button>
      </div>
      {openCamera ? <Button>Go Live</Button> : ''}
    </div>
  );
}
