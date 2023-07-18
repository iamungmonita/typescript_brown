import React, { useState } from 'react'
import Link from 'next/link'
type Props = {
    page: string,
    path: string,
    setToggle: (a:boolean) => void

}

export default function NavLink({page, path, setToggle}: Props) {
  return (
    <>
    <Link className='md:flex' href={path} onClick={() => setToggle(false)}>
        {page}
    </Link>
    </>
  )
}