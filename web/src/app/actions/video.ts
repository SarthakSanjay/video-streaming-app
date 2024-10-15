"use server"
import { putObject } from "@/aws/aws";
import prisma from "@/db";

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

export async function likeVideo(videoId: number) {
  const like = await prisma.videoMetadata.findFirst({
    where: {
      id: videoId
    }
  })
  if (!like) {
    return "video not available"
  }

  await prisma.videoMetadata.update({
    where: { id: videoId },
    data: { likes: (like.likes || 0) + 1 }, // Make sure likes isn't null
  });

  return 'video liked'
}



