import React, { useState } from 'react'
import NavLink from './NavLink'
import { navlinks } from '@/constants/index'
type Props = {
  setToggle : (a:boolean) => void
}

export default function Navlinks({setToggle}: Props) {
  return (
        <div>
            <ul className='hidden md:flex gap-5'>
              {navlinks.map((navlink) => 
                <div  className='pl-5 border-l' key={navlink.id}>
                  <NavLink setToggle={setToggle} path={navlink.path} page={navlink.page}/>
                </div>
              )}
            </ul>
        </div>
  )
}