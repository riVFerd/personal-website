'use client';

import {FaGithub, FaInstagram, FaLinkedin, FaLocationDot, FaXTwitter} from "react-icons/fa6";
import Chips from "@/components/Chips";
import {MdEmail} from "react-icons/md";

const Contacts = ({address}: {address: string}) => {
  const goToLink = (link: string) => {
    window.open(link, "_blank");
  }

  return (
    <div id="contacts" className="mt-8">
      <p className="text-white text-xl flex items-center gap-2"><FaLocationDot/>{address}</p>
      <div className="mt-4 flex gap-2 flex-wrap">
        <Chips className="text-white" onClick={() => goToLink('https://github.com/rivferd')}><FaGithub/>Github</Chips>
        <Chips className="text-white" onClick={() => goToLink('https://www.linkedin.com/in/virgy-ferdian-surya-firmansyah-b69870221/')}><FaLinkedin/>LinkedIn</Chips>
        <Chips className="text-white" onClick={() => goToLink('mailto:1virgyferdian213@gmail.com')}><MdEmail/>Email</Chips>
        <Chips className="text-white" onClick={() => goToLink('https://twitter.com/rivferd0')}><FaXTwitter/>Twitter</Chips>
        <Chips className="text-white" onClick={() => goToLink('https://instagram.com/rivferd')}><FaInstagram/>Instagram</Chips>
      </div>
    </div>
  )
}

export default Contacts;