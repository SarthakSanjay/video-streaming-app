"use client"
import { Button } from "@/components/ui/button";
import { PrismaClient } from '@prisma/client'
import { useState } from "react";

const prisma = new PrismaClient()

export default function() {
  const [email , setEmail] = useState('')
  const [password , setPassword] = useState('')

  const handleSignup = async() =>{

    // console.log('user');
  }
  return (
    <div className="h-screen w-screen flex flex-col justify-center items-center bg-black">
      <div className="h-2/3 w-1/3 border rounded-lg p-4 flex flex-col gap-3">
        <input
          className="h-10 w-full bg-transparent border rounded-lg px-3"
          placeholder="email"
          type="email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <input
          className="h-10 w-full bg-transparent border rounded-lg px-3"
          placeholder="password"
          type="password"
          onChange={(e) => setPassword(e.target.value)}       
        />
        <Button
        variant={'outline'}
        onClick={handleSignup}
        >Sign Up</Button>
      </div>
    </div>
  );
}
