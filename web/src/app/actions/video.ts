"use server"
import { putObject } from "@/aws/aws";
import prisma from "@/db";

// get all videos
export async function getVideos() {
  const videos = await prisma.videoMetadata.findMany()
  return videos
}

export async function uploadVideoToS3(filename: string, contentType: string) {
  const url = await putObject(filename, contentType)
  if (!url) {
    return 'Error uploading file'
  }
  return url
}

export async function uploadThumbnailToS3(filename: string, contentType: string) {
  const url = await putObject(filename, contentType)
  if (!url) {
    return 'Error uploading thumbnail'
  }
  return url
}

export async function setVideoMetadata(title: string, description: string, thumbnail: string, isPublic: boolean) {
  const videoMetadata = await prisma.videoMetadata.create({
    data: {
      title: title,
      description: description,
      thumbnail: thumbnail,
      isPublic: isPublic,
      channelName: '',
      likes: 0,
      views: 0,
      src: '',
    }
  })
  console.log(title, description, thumbnail, isPublic)
  return 'video metadata added'
}

export async function getVideoDetailById(videoId: number) {
  const video = await prisma.videoMetadata.findUnique({
    where: { id: videoId }
  })

  if (!video) {
    return "no video found with this videoId"
  }

  return video
}



