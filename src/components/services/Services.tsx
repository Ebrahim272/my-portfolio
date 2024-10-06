"use client"
import {motion} from 'framer-motion'
import Link from 'next/link'
import { BsArrowDownRight } from "react-icons/bs";



type ServicesProps={
  id:string,
  title:string,
  description:string,
  href:string,
}
type ServicesData={
  services:ServicesProps[]
}

export default function Services({services}:ServicesData) {
  return (
    <div className="container mx-auto">
        <motion.div 
        initial={{opacity:0}}
        animate={{
          opacity:1,
          transition: {delay: 2.4, duration: 0.4, ease: "easeIn" },
        }}
        className="grid grid-cols-1 md:grid-cols-2 gap-[60px]"
        > 
          {services.map((service,index)=>(
            <div key={index} className='flex-1 flex flex-col justify-center gap-6 group'>
              <div className='w-full flex justify-between items-center'>
              <div className='text-5xl font-semibold text-outline text-transparent group-hover:text-outline-hover transition-all duration-500 '>{service.id}</div>
              <Link href={service.href} className='w-[70px] h-[70px] rounded-full bg-white group-hover:bg-accent transition-all duration-500 flex justify-center items-center hover:-rotate-45'>
              <BsArrowDownRight className='text-primary text-3xl'/>
                </Link>
              </div>
              <h1 className='text-2xl font-bold text-white group-hover:text-accent transition-all duration-500'>{service.title}</h1>
              <p className='text-white/60'>{service.description}</p>
              <div className='border-b border-white/20 w-full'></div>
            </div>
          ))}
        </motion.div>
    </div>
  )
}
