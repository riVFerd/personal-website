'use client';

import Chips from "@/components/Chips";
import {SiFirebase, SiFlask, SiFlutter, SiLaravel, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss} from "react-icons/si";
import {GrMysql} from "react-icons/gr";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger)

const TechsStack = () => {
  const defaultClassName = "text-xl flex-col rounded-xl py-4 md:py-4 px-4 hover:bg-opacity-0 scale-90 lg:scale-100 hover:bg-opacity-5 tech-stacks relative";

  useGSAP(() => {
    gsap.to(
      "#tech-stack-title",
      {
        opacity: 1,
        y: 0,
        duration: 2,
        ease: "power4.out",
        scrollTrigger: "#tech-stack-title",
      }
    );
    gsap.fromTo(
      ".tech-stacks",
      {
        opacity: 0, bottom: -400,
      },
      {
        opacity: 1, bottom: 0, duration: 2, ease: "power4.out", stagger: 0.2,
        scrollTrigger: {
            trigger: ".tech-stacks",
          start: "top 150%",
        },
      }
    );
  }, []);

  return (
    <div id="about-section" className="w-full lg:px-16 mt-8">
      <h1 className="text-2xl text-white font-bold opacity-0 translate-y-1/2" id={"tech-stack-title"}>Tech Stack</h1>
      <h2 className="text-lg text-white my-4">The skills, tools and technologies I am good at:</h2>
      <div className="flex flex-wrap mt-4 lg:gap-4 items-center justify-center">
        <Chips className={defaultClassName}><span className="text-4xl text-blue-400"><SiFlutter/></span>Flutter</Chips>
        <Chips className={defaultClassName}><span className="text-4xl"><SiNextdotjs/></span>Next.js</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-500"><SiReact/></span>React.js</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-500"><SiTailwindcss/></span>TailwindCSS</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-red-500"><SiLaravel/></span>Laravel</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-gray-200"><SiFlask/></span>Flask</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-orange-500"><SiFirebase/></span>Firebase</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-green-700"><SiMongodb/></span>MongoDB</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-400"><GrMysql/></span>MySQL</Chips>
      </div>
    </div>
  )
}

export default TechsStack;