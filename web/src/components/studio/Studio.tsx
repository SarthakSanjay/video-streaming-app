import React from 'react'
import StudioSidebar from './StudioSidebar'
import StudioDashboard from './StudioDashboard'

const Studio = () => {
  return (
    <div className='h-screen w-screen bg-black text-white border border-white flex flex-col'>
      <div className='h-14 w-full bg-purple-500/60'></div>
      <div className='h-full w-full border border-red-500 flex'>
        <StudioSidebar />
        <StudioDashboard />
      </div>
    </div>
  )
}

export default Studio
