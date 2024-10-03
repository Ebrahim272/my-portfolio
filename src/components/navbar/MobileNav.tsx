"use client"
import { usePathname } from 'next/navigation'
import React from 'react'
import {CiMenuFries} from 'react-icons/ci'
import { Sheet, SheetContent, SheetDescription, SheetHeader, SheetTitle, SheetTrigger } from '../ui/sheet'
import Link from 'next/link'

const links =[
  {name: 'Home', path: '/'},
  {name: 'Services', path: '/services'},
  {name: 'Resume', path: '/resume'},
  {name: 'Work', path: '/work'},
  {name: 'Contact', path: '/contact'}
]
export default function MobileNav() {
  const pathName = usePathname()
  return (
    <Sheet>
    <SheetTrigger className='flex justify-center items-center '>
        <CiMenuFries className="text-[32px] text-accent" />
    </SheetTrigger>
    <SheetContent className="w-[400px] sm:w-[540px] flex flex-col">
      <SheetHeader>
        <SheetTitle className='mt-32 mb-40 text-center text-2xl'>
        <Link href="/">
      <h1 className='text-4xl font-semibold'>
        Ebrahim<span className='text-accent'>.</span>
      </h1>
      </Link>
        </SheetTitle>
        <SheetDescription>
        <nav className='flex flex-col justify-center items-center gap-8'>
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
        </SheetDescription>
      </SheetHeader>
    </SheetContent>
  </Sheet>
  
  )
}
