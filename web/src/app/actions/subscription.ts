"use server"

import prisma from "@/db";

export async function subscribe(userId: number, channelId: number) {
  const isSubscribed = await prisma.subscription.findUnique({
    where: {
      userId_channelId: {
        userId: userId,
        channelId: channelId
      }
    }
  })

  if (isSubscribed?.userId === userId) {
    await prisma.subscription.delete({
      where: {
        userId_channelId: {
          userId: userId,
          channelId: channelId
        }
      }
    })
    return "unsubscribed"
  } else {
    await prisma.subscription.create({
      data: {
        userId: userId,
        channelId: channelId
      }
    })
    return "subscribed"
  }

}
