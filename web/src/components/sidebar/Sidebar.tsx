"use client"
import React, { useState } from 'react'
import { motion } from 'framer-motion'
import SidebarToggle from './SidebarToggle'
import SidebarButtons from './SidebarButtons'
const Sidebar = () => {
  const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.div className="h-full w-14 rounded-r-2xl flex flex-col justify-center py-5 dark:bg-white/15"
      initial={{ width: "56px" }}
      animate={isClicked ? { width: "200px" } : {}}
    >
      <SidebarToggle isClicked={isClicked} setIsClicked={setIsClicked} />
      <SidebarButtons isClicked={isClicked} />
    </motion.div>
  )
}

export default Sidebar
