import React, { useState,useEffect } from 'react'
import Image from 'next/image'
import logo from '@/public/vercel.svg'
import {menuIcon} from '@/public/icons/index'
import {Navlinks, Sidebar} from './index'
import Link from 'next/link'

type Props = {}

export default function Navigation({}: Props) {
    const [toggle, setToggle] = useState<boolean>(false)
    const AutoResize = () => {
        if (window.innerWidth > 768) {
            setToggle(false)
        }
    }
    useEffect(() => {
       window.addEventListener('resize', AutoResize) 
    },[])

  return (
    <>
    <nav className='max-w-6xl mx-auto p-5 border-b'>
        <div className='flex justify-between'>
            <Link href={'/'}>
                <Image src={logo} alt='logo' height={18} width={118}/>
            </Link>
            <div>
                <Navlinks setToggle={setToggle}/>
            </div>
            <div className='md:hidden pl-5 border-l' onClick={() => setToggle(!toggle)}>
               <Image src={menuIcon} alt='icon'/>
            </div>
        </div>        
    </nav>

    <div className={`fixed top-0 z-20 w-full h-screen bg-white shadow ${toggle ? 'left-0' : 'left-[-100%]'} duration-500 animate`}>
    <Sidebar setToggle={setToggle}/>
    </div>
   </>
  )
}