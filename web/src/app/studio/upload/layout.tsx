import StudioDashboard from '@/components/studio/StudioDashboard'
import React, { ReactNode } from 'react'

const layout = ({ children }: { children: ReactNode }) => {
  return (
    <StudioDashboard>{children}</StudioDashboard>
  )
}

export default layout
