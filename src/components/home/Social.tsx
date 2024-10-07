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
    url: 'https://www.linkedin.com/in/ebrahim-hossenzade-037346285?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BAr8PhBaKTMmRHXej2RuzWA%3D%3D'
  },
  {
    icon: <FaTelegram/>,
    url: 'https://t.me/ER272'
  },
  {
    icon: <FaWhatsapp/>,
    url: 'https://wa.me/+98794574243'  },

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
