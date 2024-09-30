"use client"
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import React from "react";

export default function () {
  const router = useRouter()
  return <div className="h-full relative w-full flex justify-center items-center gap-10">
    <div className="absolute top-5 left-5 text-2xl">Dashboard</div>
    <Button onClick={() => router.push('/studio/upload')}>Upload Video</Button>
    <Button onClick={() => router.push('/studio/go-live')}>Go Live</Button>
    <div className="absolute bottom-5">Welcome to your channel dashboard</div>
  </div>
}
