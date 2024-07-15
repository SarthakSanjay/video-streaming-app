"use client"
import { signIn , signOut, useSession } from "next-auth/react"
import { useState } from "react"
// import { useRouter } from "next/navigation"
const Appbar = () => {
    // const router = useRouter()
    const {data: session , status} = useSession()
    // console.log("authdata",session.data.user.name);
  return (
    <div className="h-12 w-full border-b flex p-2 justify-between">
      <div>{session?.user?.name ? session.user.name : "Guest"}</div>
       <div className="flex gap-3">
            <button className="border px-3 py-1 rounded-lg" onClick={() => signIn()}>Signin</button>
            <button className="border px-3 py-1 rounded-lg" onClick={() => signOut()}>Logout</button>
       </div>

    </div>
  )
}

export default Appbar