import React, { useState } from 'react'
import { motion } from 'framer-motion'
import { DashboardIcon, HamburgerMenuIcon } from '@radix-ui/react-icons'
import SidebarToggle from '../sidebar/SidebarToggle'
import { FileVideo, LayoutDashboard } from 'lucide-react'
const StudioSidebar = () => {
  const [toggleSidebar, setToggleSidebar] = useState(false)
  return (
    <motion.div className='h-full w-14 bg-white/50 flex flex-col'
      initial={{ width: "56px" }}
      animate={toggleSidebar ? { width: "250px" } : {}}>
      <SidebarToggle isClicked={toggleSidebar} setIsClicked={setToggleSidebar} />
      <div className='h-full w-full bg-black flex flex-col'>
        <button className='h-14 w-14 grid place-content-center text-2xl'><LayoutDashboard /></button>
        <button className='h-14 w-14 grid place-content-center text-2xl'><FileVideo /></button>
      </div>
    </motion.div>
  )
}

export default StudioSidebar
