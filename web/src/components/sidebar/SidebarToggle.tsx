import React, { useState } from 'react'
import { motion } from 'framer-motion'

const SidebarToggle = ({ isClicked, setIsClicked }: { isClicked: boolean, setIsClicked: (arg: boolean) => void }) => {
  // const [isClicked, setIsClicked] = useState(false)

  return (
    <motion.button onClick={() => setIsClicked(!isClicked)}
      className="h-14 w-14 border-0 border-white grid gap-1 place-content-center "
      initial={{ x: 0 }}
      animate={isClicked ? { x: 120 } : {}}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ duration: 0.3 }}>

      <motion.div className="h-[2px] w-[15px] rounded-full bg-white"
        initial={{ rotate: '0deg', y: 0, width: "15px" }}
        animate={isClicked ? { rotate: "-30deg", y: 4, width: "10px" } : {}}
      ></motion.div>
      <motion.div className="h-[2px] w-[15px] rounded-full bg-white"
        initial={{ x: 0 }}
        animate={isClicked ? { x: 4 } : {}}></motion.div>
      <motion.div className="h-[2px] w-[15px] rounded-full bg-white"
        initial={{ rotate: '0deg', y: 0, width: "15px" }}
        animate={isClicked ? { rotate: '30deg', y: -4, width: "10px" } : {}}></motion.div>
    </motion.button>

  )
}

export default SidebarToggle
