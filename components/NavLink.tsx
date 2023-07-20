import React, { useState } from 'react'
import Link from 'next/link'

type Props = {
    page: string,
    path: string,
    setToggle: (a:boolean) => void
}

export default function NavLink({page, path, setToggle}: Props) {
  const handlePage = () => {
    setToggle(false)
  }
  return (
    <>
    <Link className={`md:flex`} href={path} onClick={handlePage}>
        {page}
    </Link>
    </>
  )
}