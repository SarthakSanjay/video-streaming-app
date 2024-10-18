"use server"
import { putObject } from "@/aws/aws";
import prisma from "@/db";

enum FeedbackType {
  LIKE = "LIKE",
  DISLIKE = "DISLIKE"
}

enum ContentType {
  VIDEO = "VIDEO",
  COMMENT = "COMMENT",
  REPLY = "REPLY"
}

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

export async function feedback(contentId: number, contentType: ContentType, userId: number, feedbackType: FeedbackType) {
  console.log('data', contentId, contentType, userId, feedbackType)
  console.log(contentType === ContentType.VIDEO, contentType, ContentType.VIDEO)
  //video
  if (contentType === ContentType.VIDEO) {
    const video = await prisma.videoMetadata.findFirst({
      where: {
        id: contentId
      }
    })

    if (!video) return "video not available"

    const feedback = await prisma.feedback.findFirst({
      where: { userId: userId, videoId: contentId }
    })

    if (feedback) {
      await prisma.videoMetadata.update({
        where: { id: contentId },
        data: {
          likes: feedbackType === FeedbackType.LIKE ? { increment: 1 } : { decrement: 1 },
          dislikes: feedbackType === FeedbackType.DISLIKE ? { increment: 1 } : { decrement: 1 }
        }
      })
    } else {
      await prisma.feedback.create({
        data: {
          userId: userId,
          videoId: contentId,
          feedbackType: feedbackType
        }
      })
    }



    return "video liked"
  }

  //comment
  if (contentType === ContentType.COMMENT) {
    const comment = await prisma.comments.findFirst({
      where: { id: contentId }
    })
    if (!comment) return "no comment found"

    // contentId contentType userId feedbackType

    const feedback = await prisma.feedback.findUnique({
      where: {
        commentId_userId: {
          commentId: contentId,
          userId: userId
        }
      }
    })

    if (!feedback) {
      //create feedback
      // feedback type likes

      await prisma.feedback.create({
        data: {
          commentId: contentId,
          userId: userId,
          feedbackType: feedbackType
        }
      })

      if (feedbackType === FeedbackType.LIKE) {
        await prisma.comments.update({
          where: { id: contentId },
          data: {
            likes: { increment: 1 }
          }
        })
      } else {
        await prisma.comments.update({
          where: { id: contentId },
          data: {
            dislikes: { increment: 1 }
          }
        })
      }
      return "comment liked"
    }

    await prisma.feedback.delete({
      where: {
        commentId_userId: {
          commentId: contentId,
          userId: userId
        }
      }
    })

    if (feedbackType === FeedbackType.DISLIKE) {
      await prisma.comments.update({
        where: { id: contentId },
        data: {
          likes: { decrement: 1 }
        }
      })
    } else {
      await prisma.comments.update({
        where: { id: contentId },
        data: {
          dislikes: { decrement: 1 }
        }
      })
    }
  }

  return "comment unliked"
}

//reply
// if (contentType === ContentType.REPLY) {
//   const reply = await prisma.replies.findFirst({
//     where: { id: contentId }
//   })
//
//   if (!reply) return "reply not available"
//
//   await prisma.feedback.create({
//     data: {
//       userId: userId,
//       replyId: contentId,
//       feedbackType: feedbackType
//     }
//   })
//
//   await prisma.replies.update({
//     where: { id: contentId },
//     data: {
//       likes: feedbackType === FeedbackType.LIKE ? { increment: 1 } : { decrement: 1 },
//       dislikes: feedbackType === FeedbackType.DISLIKE ? { increment: 1 } : { decrement: 1 }
//     }
//   })
//
//   return "reply liked"
// }




