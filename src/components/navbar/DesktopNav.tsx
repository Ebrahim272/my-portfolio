"use client"
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const links =[
  {name: 'Home', path: '/'},
  {name: 'Services', path: '/services'},
  {name: 'Resume', path: '/resume'},
  {name: 'Work', path: '/work'},
  {name: 'Contact', path: '/contact'}
]

export default function DesktopNav() {
  const pathName= usePathname()
  return (
    <nav className='flex gap-8'>
      {
        links.map(({name, path})=> ( 
          <Link
            key={name}
            href={path}
            className={` ${pathName === path && 'text-accent border-b-2 border-accent'} capitalize font-medium hover:text-accent transition-all`}
          >
            {name}
          </Link>
        ))
      }
    </nav>
  )
}
