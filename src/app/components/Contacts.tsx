'use client';

import {FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaXTwitter} from "react-icons/fa6";
import Chips from "@/components/Chips";
import {MdEmail} from "react-icons/md";
import Image from "next/image";
import gsap from "gsap";
import {useGSAP} from "@gsap/react";

const Contacts = ({photoUrl, address, className}: { photoUrl: string, address: string, className: string }) => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  }

  useGSAP(() => {
    gsap.fromTo(
      "#photoProfile",
      {opacity: 0, y: 200},
      {opacity: 1, y: 0, duration: 3, ease: "power4.out"}
    );
    gsap.fromTo(
      ".this-chips",
      {opacity: 0, y: 200},
      {
        opacity: 1, y: 0, duration: 2, ease: "power4.out", stagger: 0.2,
      }
    );
  }, []);

  return (
    <div className={"flex items-start justify-center gap-8"}>
      <Image src={photoUrl} width={140} height={140} alt="profice pict" className="rounded-3xl opacity-0" id={"photoProfile"}/>
      <div id="contacts" className={`${className}`}>
        <p className="text-white text-xl flex items-center gap-2"><FaLocationDot/>{address}</p>
        <div className="mt-4 flex gap-2 flex-wrap transition-all">
          <Chips className="this-chips opacity-0 text-white hover:scale-105" onClick={() => goToLink('https://github.com/rivferd')}><FaGithub/>Github</Chips>
          <Chips className="this-chips opacity-0 text-white hover:scale-105"
                 onClick={() => goToLink('https://www.linkedin.com/in/virgy-ferdian-surya-firmansyah-b69870221/')}><FaLinkedin/>LinkedIn</Chips>
          <Chips className="this-chips opacity-0 text-white hover:scale-105" onClick={() => goToLink('mailto:virgyferdian213@gmail.com')}><MdEmail/>Email</Chips>
          <Chips className="this-chips opacity-0 text-white hover:scale-105" onClick={() => goToLink('https://twitter.com/rivferd0')}><FaXTwitter/>Twitter</Chips>
          <Chips className="this-chips opacity-0 text-white hover:scale-105" onClick={() => goToLink('https://instagram.com/rivferd')}><FaInstagram/>Instagram</Chips>
        </div>
      </div>
    </div>
  )
}

export default Contacts;