"use client"

import React from 'react'
import { SessionProvider } from 'next-auth/react'
interface provider {
    children: React.ReactNode
}
const Provider: React.FC<provider> = ({children}) => {
  return (
    <SessionProvider>
        {children}
    </SessionProvider>
  )
}

export default Provider