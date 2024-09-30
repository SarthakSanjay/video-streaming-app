import React, { ReactNode } from 'react'

const StudioDashboard = ({ children }: { children: ReactNode }) => {
  return (
    <div className='h-full w-full p-5 flex flex-col border-0 border-yellow-300'>
      <h1 className='text-2xl h-10'>Upload Video</h1>
      <div className='h-full w-full flex flex-col gap-10 items-center justify-center'>
        {children}
      </div>
    </div>
  )
}

export default StudioDashboard
