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
    description:
      "A dynamic and intuitive learning platform designed using Next.js and React. It features a clean UI, fast performance, and a mobile-responsive layout, making it ideal for online learners seeking a modern web experience.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://learninbox.com/",
    github: "https://github.com/writeboxco/LIBFrontend",
    image: "/work/learning-box.PNG",
  },
  {
    num: "02",
    category: "frontend",
    title: "Rising Root",
    description:
      "A sleek, responsive web application developed to ensure seamless interactions across all devices. Built with Next.js and Tailwind CSS, Rising Root combines modern design principles with robust frontend performance.",
    stack: [
      { name: "Html 5" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://rising-root.vercel.app/",
    github: "https://github.com/SayeedMahdi/rising-root",
    image: "/work/rising-root.png",
  },
  {
    num: "03",
    category: "frontend",
    title: "Peshtaaz",
    description:
      "A feature-rich, fully responsive platform crafted using Next.js, Tailwind CSS, and React. Peshtaaz emphasizes accessibility and user experience, making it adaptable to various screen sizes with elegant transitions and UI consistency.",
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
  {
    num: "04",
    category: "frontend & backend",
    title: "Wahswaad",
    description:
      "An eCommerce-ready platform blending Next.js with Shopify to deliver a smooth and scalable shopping experience. Designed with both aesthetics and performance in mind, Wahswaad supports responsive design and efficient product management.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
      { name: "shopify" },
    ],
    live: "https://www.wahswaad.com/",
    github: "https://github.com/MahdiMohammadi98125/wahswaad",
    image: "/work/wahswaad.jpeg",
  },
  {
    num: "05",
    category: "frontend",
    title: "Mars Coders",
    description:
      "A visually engaging and developer-centric platform built using Next.js, Tailwind CSS, and React. Mars Coders highlights best practices in frontend development while delivering an optimal browsing experience for tech-savvy users.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
    ],
    live: "https://www.marscoders.tech/",
    github: "https://github.com/MahdiMohammadi98125/MarsCoders-Website",
    image: "/work/marsCoders.jpeg",
  },
  {
    num: "06",
    category: "frontend & backend",
    title: "Change makers",
    description:
      "A full-stack application developed with Next.js, Prisma, and React, focused on impactful community-driven initiatives. Change Makers features robust backend integration and a clean, responsive UI that adapts effortlessly to user needs.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
      { name: "Prisma" },
    ],
    live: "https://www.cmworld.org/",
    github: "https://github.com/MahdiMohammadi98125/change-makers",
    image: "/work/changemaker.jpeg",
  },
  {
    num: "07",
    category: "Mobile App",
    title: "Learning Box",
    description:
      "A cross-platform mobile learning app built with React Native and GraphQL, designed to offer a smooth, intuitive experience for users on the go. Learning Box delivers a clean and responsive UI, optimized for performance and accessibility, making it a perfect companion for learners seeking flexible and modern mobile education.",
    stack: [
      { name: "Html 5" },
      { name: "Css 3" },
      { name: "Javascript" },
      { name: "Tailwind.css" },
      { name: "Next.js" },
      { name: "Prisma" },
    ],
    live: "https://www.learninbox.com/",
    github: "https://github.com/RezaHabibi1001/lib_seeker_app",
    image: "/work/app.png",
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
                  <div className="h-fit relative group flex justify-center items-center">
                    <div className="relative w-full">
                      <Image
                        alt=""
                        src={project.image}
                        className="object-contain w-full sm:h-[400px] h-[300px]"
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
