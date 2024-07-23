"use client"
import { signIn } from 'next-auth/react';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function() {
    const router = useRouter()
    const [username , setUsername] = useState('')
    const [password , setPassword] = useState('')

    const handleUsername = (e: any) =>{
        setUsername(e.target?.value)
    }
    const handlePassword = (e: any) =>{
        setPassword(e.target?.value)
    }
  return (
    <div className="h-screen w-screen bg-red-500/35 flex justify-center items-center flex-col gap-3">
        <form className='h-max w-1/4 flex flex-col gap-4'>
            <input className='h-10 w-full rounded-lg border bg-transparent px-3' onChange={handleUsername} type='text' placeholder='username' />
            <input className='h-10 w-full rounded-lg border bg-transparent px-3' onChange={handlePassword} type='password' placeholder='password' />
        <button className='h-10 w-full border rounded-lg' onClick={async () => {
            const res = await signIn("credentials", {
                username: username ,
                password: password,
                redirect: false,
            });
            console.log(res);
            router.push("/")
        }}>Login with email</button>
        </form>

          <button className='h-10 w-1/4 border rounded-lg' onClick={async () => {
            await signIn("google");
        }}>Login with google</button>

        <button className='h-10 w-1/4 border rounded-lg' onClick={async () => {
            await signIn("github");
        }}>Login with Github</button>
        
    </div>
  )
}
