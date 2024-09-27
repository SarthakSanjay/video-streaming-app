"use client"
// import { uploadVideoToS3 } from "@/app/actions/video"; //need to invistigate
import { Button } from "@/components/ui/button";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useRef, useState } from "react";
import { Oval } from 'react-loader-spinner'
// import { setVideoMetadata } from '../../actions/video'
import { useRecoilValue } from "recoil";
import { videoMetadataAtom } from "@/atom/atom";
import { setVideoMetadata } from "@/app/actions/video";
import { Label } from "../ui/label";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Upload } from "lucide-react";
import { RadioGroup, RadioGroupItem } from "../ui/radio-group";
enum uploads {
  "no", "uploading", "uploaded"
}

export default function () {
  const videoFileRef = useRef<HTMLInputElement | null>(null)
  const [selectedVideo, setSelectedVideo] = useState<File | null>(null)
  const [isUploaded, setIsUploaded] = useState<uploads>(uploads.no)
  const [fileUrl, setFileUrl] = useState('')
  const [uniqueFileName, setUniqueFileName] = useState(Date.now())
  const videoMetadata = useRecoilValue(videoMetadataAtom)
  const router = useRouter()
  const handleClick = () => {
    if (videoFileRef.current) {
      videoFileRef.current.click()
    }
  }
  const uploadVideo = async () => {
    if (!selectedVideo) return
    setIsUploaded(uploads.uploading)
    const res = await axios.post('/api/video', {
      filename: `${uniqueFileName}_${selectedVideo?.name}`,
      contentType: selectedVideo?.type
    })
    setIsUploaded(uploads.uploading)
    if (res.status === 200) {
      const upload = await axios.put(res.data.url, selectedVideo)
      await setVideoMetadata(videoMetadata.title, videoMetadata.description)
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
    <div className="h-full text-yellow-500 w-full border border-white dark:text-white flex items-center justify-center">
      {fileUrl && <video className="h-[50vh] w-1/2 border border-white" controls src={fileUrl}></video>}
      <input ref={videoFileRef} type="file" accept="video/*" className="hidden" onChange={handleSelectVideo} />
      <div className="flex gap-10 flex-col h-full w-1/2 border border-red-500  justify-center items-center">
        {fileUrl && <div
          className="h-full w-full border border-pink-500 p-5">
          <Title />
          <Description />
          <UploadThumbnail />
          <Visibility />
        </div>}
        <div className="flex  gap-10 border border-green-500">
          <Button onClick={handleClick}
            className={`${selectedVideo ? 'bg-blue-500' : ''}`}
            disabled={selectedVideo ? true : false}
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

      </div>
    </div>
  );
}

function Title() {
  return (
    <div className="h-max w-full flex flex-col gap-2">
      <Label className="h-10 flex items-center text-xl ">Title</Label>
      <Input placeholder="add title of the video" />
    </div>
  )
}

function Description() {
  const [text, setText] = useState("")
  const maxLength = 5000

  return (
    <div className="relative">

      <Label className="h-10 flex items-center text-xl ">Description</Label>
      <Textarea
        placeholder="Type your message here."
        value={text}
        onChange={(e) => setText(e.target.value)}
        maxLength={maxLength}
        className="pr-16 pb-8 resize-none" />
      <div className="absolute bottom-2 right-2 text-sm text-muted-foreground">
        {text.length}/{maxLength}
      </div>
    </div>
  )
}

function UploadThumbnail() {
  return (
    <div className="h-max mt-5 flex flex-col">
      <Label className="h-10 flex items-center text-xl ">Thumbnail</Label>
      <button className="h-20 w-40 border-2 border-dashed border-gray-300 rounded-lg flex flex-col items-center justify-center space-y-2 hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 transition-colors">
        <Upload className="w-6 h-6 text-gray-400" />
        <span className="text-sm text-gray-500">Upload file</span>
      </button>
    </div>
  )
}

function Visibility() {
  return (
    <div className="space-y-2 mt-5">
      <Label htmlFor="visibility" className="text-xl">
        Visibility
      </Label>
      <div id="visibility" className="p-4 border rounded-lg shadow-sm">
        <RadioGroup defaultValue="public" className="space-y-4">
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="public" id="public" />
            <Label htmlFor="public">Public</Label>
          </div>
          <div className="flex items-center space-x-2">
            <RadioGroupItem value="private" id="private" />
            <Label htmlFor="private">Private</Label>
          </div>
        </RadioGroup>
      </div>
    </div>
  )
}

