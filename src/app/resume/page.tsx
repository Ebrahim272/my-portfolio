"use client";
import { FaHtml5, FaCss3, FaJs, FaReact, FaNpm, FaFigma } from "react-icons/fa";
import { SiTailwindcss, SiNextdotjs,SiAntdesign } from "react-icons/si";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { RiFirebaseFill } from "react-icons/ri";
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
    "I am Ebrahim, a passionate front-end developer with 3 years of experience in building responsive and user-friendly web applications. My expertise lies in crafting modern and efficient interfaces using the latest web technologies. I enjoy turning complex problems into simple, beautiful solutions that enhance the user experience.",
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
      fieldName: "Freelance",
      fieldValue: "Available",
    },
    {
      fieldName: "Languages",
      fieldValue: "Farsi, English ",
    },
    {
      fieldName: "Email",
      fieldValue: "ebrahim.hossenzade@gmail.com",
    },
  ],
};

// experience data
const experience = {
  title: "Experience",
  description:
    "With over 3 years of experience as a front-end developer, I have worked on a variety of web projects, focusing on creating intuitive and responsive user interfaces. I have hands-on experience with modern JavaScript frameworks like React and Next.js, as well as proficiency in CSS frameworks such as Tailwind CSS and Ant Design. My work includes collaborating with cross-functional teams to deliver high-quality, scalable solutions that meet client needs and drive business outcomes.",

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
    "Graduated from Heart University with a degree in Computer Science. During my studies, I gained a solid foundation in web development, algorithms, and software engineering principles. My education provided me with the technical skills and problem-solving abilities that I continue to apply in my career as a front-end developer.",
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
    "As a front-end developer, I have a strong command of modern web technologies. My skill set includes expertise in HTML5, CSS3, and JavaScript, as well as proficiency in frameworks like React and Next.js. I am also experienced in working with CSS libraries such as Tailwind CSS and Ant Design to create responsive and visually appealing interfaces. In addition to development, I am skilled in version control with Git, and have experience collaborating in Agile environments. My focus is on delivering clean, maintainable code while ensuring excellent user experience.",
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
    {
      skillName: "Ant Design",
      icon: <SiAntdesign />,
    },
    {
      skillName: "Firebase",
      icon: <RiFirebaseFill />
      ,
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
        <Tabs
          defaultValue="experience"
          className="flex flex-col xl:flex-row gap-[60px]"
        >
          <TabsList className="flex flex-col w-full max-w-[380px] mx-auto xl:mx-0 gap-6">
            <TabsTrigger value="experience">Experience</TabsTrigger>
            <TabsTrigger value="education">Education</TabsTrigger>
            <TabsTrigger value="skills">Skills</TabsTrigger>
            <TabsTrigger value="about">About me</TabsTrigger>
          </TabsList>
          <div className="min-h-[70vh] w-full">
            {/* experience */}
            <TabsContent value="experience" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{experience.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 capitalize">
                  {experience.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {experience.item.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center py-6 px-10 h-[184px] rounded-xl bg-[#232329] lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.position}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.companyName}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* education */}
            <TabsContent value="education" className="w-full">
              <div className="flex flex-col gap-[30px] text-center xl:text-left">
                <h3 className="text-4xl font-bold">{education.title}</h3>
                <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 capitalize">
                  {education.description}
                </p>
                <ScrollArea className="h-[400px]">
                  <ul className="grid grid-cols-1 lg:grid-cols-2 gap-[30px]">
                    {education.item.map((item, index) => (
                      <li
                        key={index}
                        className="flex flex-col items-center justify-center py-6 px-10 h-[184px] rounded-xl bg-[#232329] lg:items-start gap-1"
                      >
                        <span className="text-accent">{item.duration}</span>
                        <h3 className="text-xl max-w-[260px] min-h-[60px] text-center lg:text-left">
                          {item.degree}
                        </h3>
                        <div className="flex items-center gap-3">
                          <span className="w-[6px] h-[6px] rounded-full bg-accent"></span>
                          <p className="text-white/60 text-sm">
                            {item.institution}
                          </p>
                        </div>
                      </li>
                    ))}
                  </ul>
                </ScrollArea>
              </div>
            </TabsContent>
            {/* skills */}
            <TabsContent value="skills" className="w-full h-full">
              <div className="flex flex-col gap-[30px]">
                <div className="flex flex-col gap-[30px] text-center xl:text-left">
                  <h3 className="text-4xl font-bold">{skills.title}</h3>
                  <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 capitalize">
                    {skills.description}
                  </p>
                </div>
                <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:gap-[30px] gap-4">
                  {skills.skillList.map((skill, index) => (
                    <li key={index} className="flex items-center gap-3">
                      <TooltipProvider delayDuration={100}>
                        <Tooltip>
                          <TooltipTrigger className="w-full h-[150px] bg-[#232329] rounded-xl flex justify-center items-center group">
                            <div className="text-6xl group-hover:text-accent transition-all duration-300">{skill.icon}</div>
                          </TooltipTrigger>
                          <TooltipContent>
                            <p>{skill.skillName}</p>
                          </TooltipContent>
                        </Tooltip>
                      </TooltipProvider>
                    </li>
                  ))}
                </ul>
              </div>
            </TabsContent>
            {/* about */}
            <TabsContent value="about" className="w-full text-center xl:text-left">
            <div className="flex flex-col gap-[30px]">
              <h3 className="text-4xl font-bold">{about.title}</h3>
              <p className="max-w-[600px] text-white/60 mx-auto xl:mx-0 capitalize">{about.description}</p>
              <ul className="grid grid-cols-1 xl:grid-cols-2 gap-y-6 max-w-[620px] mx-auto xl:mx-0">
                {about.info.map((item, index) => (
                  <li key={index} className="flex items-center gap-4 justify-center xl:justify-start">
                    <span className="text-white/60 text-sm">{item.fieldName}</span>
                    <span className="text-xl">{item.fieldValue}</span>
                  </li>
                ))}
              </ul>
              </div>  
            </TabsContent>
          </div>
        </Tabs>
      </div>
    </motion.div>
  );
}
