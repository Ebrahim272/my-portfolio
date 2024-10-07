"use client";

import { motion } from "framer-motion";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { useState } from "react";
import Link from "next/link";
import { BsArrowUpRight, BsGithub } from "react-icons/bs";
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper/modules";
import Image from "next/image";

const projects = [
  {
    num: "01",
    category: "frontend",
    title: "Learning Box",
    description: "A simple learning platform built using Next.js and React.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://lib-frontend-six.vercel.app/",
    github: "https://github.com/writeboxco/LIBFrontend",
    image: "/work/learning-box.PNG",
  },
  {
    num: "02",
    category: "frontend",
    title: "Rising Root",
    description: "A  platform built using Next.js and React.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://rising-root.vercel.app/",
    github: "https://github.com/SayeedMahdi/rising-root",
    image: "/work/rising-root.PNG",
  },
  {
    num: "03",
    category: "frontend",
    title: "Peshtaaz",
    description: " platform built using Next.js and React.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://peshtaaz.vercel.app/",
    github: "https://github.com/SayeedMahdi/Peshtaaz",
    image: "/work/peshtaaz.PNG",
  },
];
export default function WorkPage() {
  const [project, setProject] = useState(projects[0]);

  const handleSlideChange = (swiper: any) => {
    setProject(projects[swiper.activeIndex]);
  };

  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex flex-col justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row xl:gap-[30px]">
          <div className="w-full xl:w-1/2 xl:h-[460%] flex flex-col xl:justify-between order-2 xl:order-none">
            <div className="flex flex-col gap-[30px] h-1/2">
              <div className="text-8xl leading-none font-extrabold text-transparent text-outline">
                {project.num}
              </div>
              <h2 className="text-[42px] font-bold leading-none text-white group-hover:text-accent transition-all duration-500 capitalize">
                {project.category} project
              </h2>
              <p className="text-white/60">{project.description}</p>
              <ul className="flex gap-4 flex-wrap">
                {project?.stack?.map((item, index) => (
                  <li key={index} className="text-base text-accent">
                    {item.name}
                    {index !== project.stack.length - 1 && ","}
                  </li>
                ))}
              </ul>
              <div className="border border-white/20"></div>
              <div className="flex items-center gap-4">
                <Link href={project.live}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsArrowUpRight className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Live Project</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
                <Link href={project.github}>
                  <TooltipProvider delayDuration={100}>
                    <Tooltip>
                      <TooltipTrigger className="w-[70px] h-[70px] rounded-full bg-white/5 flex justify-center items-center group">
                        <BsGithub className="text-white text-3xl group-hover:text-accent" />
                      </TooltipTrigger>
                      <TooltipContent>
                        <p>Github repository</p>
                      </TooltipContent>
                    </Tooltip>
                  </TooltipProvider>
                </Link>
              </div>
            </div>
          </div>
          <div className="w-full xl:w-1/2">
            <Swiper
              spaceBetween={30}
              slidesPerView={1}
              pagination={{
                dynamicBullets: true,
              }}
              modules={[Pagination]}
              className="xl:h-[330px] mb-5"
              onSlideChange={handleSlideChange}
            >
              {projects.map((project, index) => (
                <SwiperSlide key={index} className="w-full">
                  <div className="h-fit relative group flex justify-center items-center bg-pink-50/20">
                    <div className="relative w-full">
                      <Image
                        alt=""
                        src={project.image}
                        className="object-contain w-full"
                        width={1200}
                        height={1200}
                      />
                    </div>
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
