import Photo from "@/components/home/Photo";
import Social from "@/components/home/Social";
import Stats from "@/components/home/Stats";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { FiDownload } from "react-icons/fi";

export default function Home() {
  return (
    <section className="h-full">
      <div className="container mx-auto h-full">
        <div className="flex flex-col xl:flex-row items-center justify-between xl:pt-8 xl:pb-24">
          <div className="text-center xl:text-left order-2 xl:order-none">
            <span>Software Developer</span>
            <h1 className="h1 mb-6">
              Hello I&apos;m <br />{" "}
              <span className="text-accent">Ebrahim Hossenzada</span>{" "}
            </h1>
            <p className="max-w-[500px] mb-9 text-white/80">
              I&apos;m a passionate software developer with a background in
              computer science and a love for technology.
            </p>
            <div className="flex flex-col xl:flex-row item-center gap-8">
              <Link href={"Ebrahim_Hossainzada_Resume.pdf"} download>
                <Button
                  variant={"outline"}
                  size={"lg"}
                  className="uppercase flex items-center gap-2"
                >
                  <span>Download CV</span>
                  <FiDownload className="text-xl" />
                </Button>
              </Link>
              <div className="mb-8 xl:mb-0 flex items-center justify-center">
                <Social />
              </div>
            </div>
          </div>
          <div className="order-1 xl:order-none mb-8 xl:mb-0">
            <Photo />
          </div>
        </div>
      </div>
      <Stats />
    </section>
  );
}
