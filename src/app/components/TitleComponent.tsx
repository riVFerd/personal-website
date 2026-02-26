'use client';

import Image from "next/image";
import developerImg from "/public/developer.png";
import { useEffect } from "react";
import gsap from "gsap";
import { TextPlugin } from "gsap/TextPlugin";
import { useGSAP } from "@gsap/react";

gsap.registerPlugin(TextPlugin);

const TitleComponent = ({ name }: { name: string }) => {

  useGSAP(() => {
    gsap.to(
      document.getElementById("subtitle"),
      {
        duration: 2,
        text: {
          value: "Software Developer passionated in Mobile Development",
          padSpace: true,
        },
      }
    );
    gsap.fromTo(
      "#name",
      {
        left: -500,
        opacity: 0,
      },
      {
        left: 0,
        duration: 2,
        opacity: 1,
        ease: "power4.out",
      }
    );
    gsap.fromTo(
      "#imageGif",
      {
        opacity: 0,
        right: -500,
      },
      {
        right: 0,
        duration: 3,
        opacity: 1,
        ease: "power4.out",
      }
    );
  }, []);

  return (
    <div className={"flex flex-col-reverse md:flex-row items-center justify-center md:gap-20 lg:gap-36 w-full"}>
      <div className={"flex flex-col text-white text-center md:text-left z-10"}>
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold relative opacity-0 tracking-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400" id="name">{name}</h1>
        <h2 id={"subtitle"} className={"mt-4 text-xl md:text-2xl text-tertiary font-light tracking-wide"}>af;sdfl] *dafe]\daf l;ae/fei e[ mve/sdf \aef[c][[</h2>
      </div>
      <Image id={"imageGif"} src={developerImg} alt={"Developer gif"} className="mb-12 md:mb-0 w-64 md:w-80 lg:w-96 relative opacity-0 drop-shadow-2xl" />
    </div>
  );
}

export default TitleComponent;