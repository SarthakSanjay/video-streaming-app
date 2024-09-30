import Studio from '@/components/studio/Studio'
import StudioDashboard from '@/components/studio/StudioDashboard'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <Studio>{children}</Studio>
  )
}

export default layout
