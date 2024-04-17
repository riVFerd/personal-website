'use client';

import Image from "next/image";
import developerImg from "/public/developer.png";
import {useEffect} from "react";
import gsap from "gsap";
import {TextPlugin} from "gsap/TextPlugin";
import {useGSAP} from "@gsap/react";

gsap.registerPlugin(TextPlugin);

const TitleComponent = ({name}: { name: string }) => {

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
    <div className={"flex flex-col md:flex-row md:gap-20 lg:gap-36"}>
      <div className={"flex flex-col text-white"}>
        <h1 className="text-4xl font-bold relative opacity-0" id="name">{name}</h1>
        <h2 id={"subtitle"} className={"mt-2"}>af;sdfl] *dafe]\daf l;ae/fei e[ mve/sdf \aef[c][[</h2>
      </div>
      <Image id={"imageGif"} src={developerImg} alt={"Developer gif"} className="my-16 self-center md:w-72 relative opacity-0"/>
    </div>
  );
}

export default TitleComponent;