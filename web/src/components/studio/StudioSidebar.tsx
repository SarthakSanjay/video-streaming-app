import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SidebarToggle from '../sidebar/SidebarToggle'
import { FileVideo, LayoutDashboard, Settings } from 'lucide-react'
import { usePathname, useRouter } from 'next/navigation'

const StudioSidebar = () => {
  const router = useRouter()
  const path = usePathname()
  const [toggleSidebar, setToggleSidebar] = useState(false)

  const buttons = [
    { name: 'Dashboard', icon: <LayoutDashboard />, path: '/studio' },
    { name: 'Videos', icon: <FileVideo />, path: '/studio/videos' },
    { name: 'Setting', icon: <Settings />, path: '/studio/setting' }
  ]

  return (
    <motion.div className='h-full w-16 flex flex-col px-1 border-0 border-white rounded-r-2xl dark:bg-white/15'
      initial={{ width: "64px" }}
      animate={toggleSidebar ? { width: "250px" } : {}}
      transition={{ duration: 0.6, delay: 0.2 }}>
      <SidebarToggle isClicked={toggleSidebar} setIsClicked={setToggleSidebar} studio={true} />
      <div className='h-full w-full flex flex-col'>
        {buttons.map((btn, index) => {
          return <motion.button
            key={index}
            className={`h-12 w-12 border-0 border-white rounded-xl flex gap-3 items-center justify-center hover:bg-white hover:text-black 
${path === btn.path ? 'bg-white text-black' : 'text-white'}`}
            initial={{ width: '56px' }}
            animate={toggleSidebar ? { width: '100%' } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            onClick={() => router.push(btn.path)}
          >
            {btn.icon}
            <motion.span
              className=''
              initial={{ fontSize: '0px', display: 'none' }}
              animate={toggleSidebar ? { fontSize: '15px', display: 'block' } : {}}
              transition={{ duration: 0.2, delay: 0.2 }}>{btn.name}</motion.span>
          </motion.button>
        })}
      </div>
    </motion.div>
  )
}

export default StudioSidebar
