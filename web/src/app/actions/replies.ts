"use server"
import prisma from "@/db"

export async function addReply(commentId: number, text: string) {
  try {
    const newReply = await prisma.replies.create({
      data: {
        text: text,
        commentId: commentId,
        likes: 0, // Default to 0 likes
      },
    });
    return newReply;
  } catch (error) {
    console.error('Error adding reply:', error);
    return 'Error adding reply';
  }
}

export async function deleteReply(replyId: number) {
  try {
    const reply = await prisma.replies.findUnique({
      where: {
        id: replyId,
      }
    })
    if (!reply) {
      return "Reply not found"
    }

    await prisma.replies.delete({
      where: {
        id: replyId,
      }
    })

    return 'reply deleted successfully'
  } catch (error) {
    return "Error deleting reply"
  }
}

export async function editReply(newText: string, replyId: number) {
  try {
    const reply = await prisma.replies.findUnique({
      where: {
        id: replyId
      }
    })

    if (!reply) {
      return "reply not found"
    }

    await prisma.replies.update({
      where: {
        id: replyId
      },
      data: {
        text: newText
      }
    })

    return 'reply edited'
  } catch (error) {
    return "Error editing reply"
  }
}


