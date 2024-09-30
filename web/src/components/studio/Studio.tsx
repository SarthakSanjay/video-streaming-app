"use client"
import React, { ReactNode } from 'react'
import StudioSidebar from './StudioSidebar'
import Appbar from '../Appbar'

const Studio = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-screen w-screen dark:bg-gradient-to-r from-black via-[#130837] to-black text-white flex flex-col items-center'>
      <Appbar />
      <div className='h-full w-full border-0 border-blue-500 flex'>
        <StudioSidebar />
        {children}
      </div>
    </div>
  )
}

export default Studio
