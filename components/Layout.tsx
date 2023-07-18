import React from 'react'
import Navigation from './Navigation'
type Props = {
    children: React.ReactNode
}

export default function Layout({children}: Props) {
  return (
    <div>
        <Navigation/>
        {children}
    </div>
  )
}