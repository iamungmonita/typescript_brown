import React, { useEffect } from 'react'
import NavLink from './NavLink'
import { navlinks } from '@/constants/index'
import Image from 'next/image'
import { crossIcon } from '@/public/icons'
type Props = {
  setToggle: (a:boolean) => void
}

export default function Sidebar({setToggle}: Props) {
  
  return (
        <div className='p-5 flex flex-col'>
           <div className='md:hidden border-l pl-5 self-end mb-5' onClick={() => setToggle(false)}>
               <Image className='' src={crossIcon} alt='icon'/>
            </div>
            <ul className='flex flex-col gap-5'>
              {navlinks.map((navlink) => 
              <div key={navlink.id} className='border-b pb-3'>
                <NavLink  setToggle={() => setToggle(false)} path={navlink.path} page={navlink.page}/>
              </div> )}
            </ul>
        </div>
  )
}