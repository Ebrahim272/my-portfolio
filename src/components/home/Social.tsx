import Link from 'next/link'
import React from 'react'
import {FaGithub, FaLinkedinIn, FaTelegram, FaWhatsapp  } from "react-icons/fa"

const socials =[
  {
    icon: <FaGithub/>,
    url: 'https://github.com/Ebrahimjan'
  },
  {
    icon: <FaLinkedinIn/>,
    url: '#'
  },
  {
    icon: <FaTelegram/>,
    url: '#'
  },
  {
    icon: <FaWhatsapp/>,
    url: '#'
  },

]
export default function Social() {
  return (
    <div className='flex gap-6'>
      {socials.map((item,index) => (
        <Link key={index} href={item.url} className='w-9 h-9 border border-accent rounded-full flex justify-center items-center text-accent text-sm hover:bg-accent hover:text-primary hover:transition-all duration-500' >
          {item.icon}
        </Link>
      ))}
    </div>
  )
}
