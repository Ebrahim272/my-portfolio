"use client";

import { FaEnvelope, FaMapMarkedAlt, FaPhoneAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import Swal from 'sweetalert2'

const info = [
  {
    icon: <FaPhoneAlt />,
    title: "Phone",
    description: "(+98) 794 574 243",
  },
  {
    icon: <FaEnvelope />,
    title: "Email",
    description: "ebrahim.hossenzade@gmail.com",
  },
  {
    icon: <FaMapMarkedAlt />,
    title: "Address",
    description: "Herat, Afghanistan",
  },
];
export default function ContactPage() {

  async function handleSubmit(event:any) {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "05b5e6ee-62fe-497b-8144-6b6d70175706");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    const response = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: json
    });
    const result = await response.json();
    if (result.success) {
      Swal.fire({
        title: "Success",
        text: "Message sent successfully",
        icon: "success"
      });    }
}
  return (
    <motion.section
      initial={{ opacity: 0 }}
      animate={{
        opacity: 1,
        transition: {
          delay: 2.4,
          duration: 0.4,
          ease: "easeIn",
        },
      }}
      className="py-6"
    >
      <div className="container mx-auto">
        <div className="flex flex-col xl:flex-row gap-[30px]">
          <div className="xl:w-[54%] order-2 xl:order-none">
            <form
            onSubmit={handleSubmit}
              action=""
              className="flex flex-col gap-6 p-10 bg-[#27272c] rounded-xl"
            >
              <h3 className="text-4xl text-accent">Let's work together</h3>
              <p className="text-white/60 capitalize">
                I specialize in crafting bespoke digital solutions tailored to
                your unique needs. Whether you're looking to build a responsive
                website, develop a modern web application, or enhance your
                online presence, I'm here to help. Let's collaborate to turn
                your ideas into reality and create something truly impactful.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Input type="firstName" placeholder="First Name" name="firstName" required/>
                <Input type="lastName" placeholder="Last Name" name="lastName" required/>
                <Input type="emailAddress" placeholder="Email Address" name="emailAddress" required/>
                <Input type="phoneNumber" placeholder="Phone Number" name="phoneNumber" required/>
              </div>
              <Select name="select" required>
                <SelectTrigger className="w-full">
                  <SelectValue placeholder="Select a service" />
                </SelectTrigger>
                <SelectContent>
                  <SelectGroup>
                    <SelectLabel>Select a service</SelectLabel>
                    <SelectItem value="web">Web Development</SelectItem>
                    <SelectItem value="ui/ux">UI/UX Design</SelectItem>
                    <SelectItem value="logo">Logo Design</SelectItem>
                  </SelectGroup>
                </SelectContent>
              </Select>
              <Textarea
              required
              name="message"
                className="h-[200px]"
                placeholder="Type your message here."
              />
              <div className="w-full flex items-center justify-center">
                <Button size="md" className="md:max-w-40 w-full">
                  Send Message
                </Button>
              </div>
            </form>
          </div>
          <div className="flex-1 flex items-center xl:justify-end order-1 xl:order-none mb-8 xl:mb-0">
            <ul className="flex flex-col gap-10">
              {info.map((item, index) => (
                <li key={index} className="flex items-center gap-6">
                  <div className="w-[52px] h-[52px] xl:w-[72px] xl:h-[72px] bg-[#27272c] text-accent rounded-md flex items-center justify-center">
                    <div className="text-[28px]">{item.icon}</div>
                  </div>
                  <div className="flex-1">
                    <p className="text-white/60">{item.title}</p>
                    <h3 className="text-xl">{item.description}</h3>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </motion.section>
  );
}
