"use client"
import React from 'react'
import { SessionProvider } from 'next-auth/react'
import { RecoilRoot } from 'recoil'
import { ThemeProvider } from '@/components/theme-provider'

interface provider {
    children: React.ReactNode
}

const Provider: React.FC<provider> = ({children}) => {
  return (
    <SessionProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="dark"
        enableSystem
        disableTransitionOnChange
      >
        <RecoilRoot>{children}</RecoilRoot>
      </ThemeProvider>
    </SessionProvider>
  )
}

export default Provider