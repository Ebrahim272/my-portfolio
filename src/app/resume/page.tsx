"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";
import { motion } from "framer-motion";

const about = {
  title: "About Me",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae felis tempus ultricies. Integer tempor velit sed nunc consectetur, id luctus nunc consectetur. Sed placerat, mauris vel dignissim tempus, enim neque tristique mauris, in laoreet ipsum ligula in metus.",
  info: [
    {
      fieldName: "Name",
      fieldValue: "Ebrahim Hossenzada",
    },
    {
      fieldName: "Phone",
      fieldValue: "(+98) 794 574 243",
    },
    {
      fieldName: "Experience",
      fieldValue: "3+ Years",
    },
    {
      fieldName: "Nationality",
      fieldValue: "Afghan",
    },
    {
      fieldName: "Email",
      fieldValue: "ebrahim.hossenzada@gmail.com",
    },
    {
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Farsi, English ",
    },
  ],
};

// experience dat
const experience = {
  icon: "",
  title: "Experience",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae felis tempus ultricies. Integer tempor velit sed nunc consectetur, id luctus nunc consectetur. Sed placerat, mauris vel dignissim tempus, enim neque tristique mauris, in laoreet ipsum ligula in metus.",

  item: [
    {
      companyName: "Mars Coders",
      position: "Software Developer",
      duration: "2023-Present",
    },
    {
      companyName: "Bit Soft",
      position: "Web Developer",
      duration: "2022 - 2023",
    },
  ],
};

// education data
const education = {
  icon: "",
  title: "Education",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae felis tempus ultricies. Integer tempor velit sed nunc consectetur, id luctus nunc consectetur. Sed placerat, mauris vel dignissim tempus, enim neque tristique mauris, in laoreet ipsum ligula in metus.",
  item: [
    {
      institution: "Online Course Platform",
      degree: "Full Stack Developer",
      duration: "2022 - 2023",
    },

    {
      institution: "University of Afghanistan",
      degree: "Bachelor of Computer Science",
      duration: "2019 - 2022",
    },
  ],
};

// skills data
const skills = {
  title: "My Skills",
  description:
    "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed vel velit vitae felis tempus ultricies. Integer tempor velit sed nunc consectetur, id luctus nunc consectetur. Sed placerat, mauris vel dignissim tempus, enim neque tristique mauris, in laoreet ipsum ligula in metus.",
  skillList: [
    {
      skillName: "HTML5",
      icon: <FaHtml5 />,
    },
    {
      skillName: "CSS3",
      icon: <FaCss3 />,
    },
    {
      skillName: "JavaScript",
      icon: <FaJs />,
    },
    {
      skillName: "React",
      icon: <FaReact />,
    },
    {
      skillName: "Next.js",
      icon: <SiNextdotjs />,
    },
    {
      skillName: "Tailwind CSS",
      icon: <SiTailwindcss />,
    },
  ],
};
export default function ResumePage() {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: { delay: 2.4, duration: 0.4, ease: "easeIn" },
      }}
      className="min-h-[80vh] flex items-center justify-center py-12 xl:py-0"
    >
      <div className="container mx-auto">
        <Tabs defaultValue="experience" className="flex flex-col xl:flex-row gap-[60px]">
          <TabsList className="flex flex-col w-full max-w-[380px] xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">

          <TabsContent value="experience">
            Make changes to your account here.
          </TabsContent>
          <TabsContent value="education">Change your password here.</TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
