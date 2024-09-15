import { History, Home, Settings, UserRoundCheck } from 'lucide-react'
import React from 'react'
import { motion, AnimatePresence } from 'framer-motion'
const SidebarButtons = ({ isClicked }: { isClicked: boolean }) => {
  const buttons = [
    { name: "Home", icon: <Home /> },
    { name: "Subscription", icon: <UserRoundCheck /> },
    { name: "History", icon: <History /> },
    { name: "Settings", icon: <Settings /> }
  ]
  return (
    <div className="h-full w-full border border-white flex flex-col items-center">
      {buttons.map((btn) => {
        return <AnimatePresence>
          <motion.button className="h-14 w-[80%] border-0 px-2 border-white flex justify-center items-center gap-2"
            initial={{ justifyContent: "center" }}
            animate={isClicked ? { justifyContent: "start" } : {}}
          ><span className='text-xl'>{btn.icon}</span>
            <motion.h1
              initial={{ display: "none", opacity: 0 }}
              animate={isClicked ? { display: "block", opacity: 1 } : {}}
              exit={{ display: "none", opacity: 0 }}
              transition={{ duration: 0.3 }}
            >{btn.name}</motion.h1>
          </motion.button>
        </AnimatePresence>
      })}
    </div>
  )
}

export default SidebarButtons
