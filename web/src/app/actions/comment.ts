"use server"

import prisma from "@/db"

export async function addComment(userId: number, videoId: number, text: string) {
  try {
    const newComment = await prisma.comments.create({
      data: {
        text: text,
        userId: userId,
        videoId: videoId,
        likes: 0, // Default to 0 likes
      },
    });
    return newComment;
  } catch (error) {
    console.error('Error adding comment:', error);
    return 'Error adding comment';
  }
}

export async function deleteComment(videoId: number, commentId: number) {
  try {
    const comment = await prisma.comments.findUnique({
      where: {
        id: commentId,
        videoId: videoId
      }
    })
    if (!comment) {
      return "Comment not found"
    }

    await prisma.comments.delete({
      where: {
        id: commentId,
        videoId: videoId
      }
    })

    return 'comment deleted successfully'
  } catch (error) {
    return "Error deleting comment"
  }
}

export async function editComment(newText: string, commentId: number, videoId: number) {
  try {
    const comment = await prisma.comments.findUnique({
      where: {
        id: commentId,
        videoId: videoId
      }
    })

    if (!comment) {
      return "Comment not found"
    }

    await prisma.comments.update({
      where: {
        id: commentId
      },
      data: {
        text: newText
      }
    })

    return 'comment edited'
  } catch (error) {
    return "Error editing comment"
  }
}


