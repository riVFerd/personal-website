import Chips from "@/components/Chips";
import {SiFirebase, SiFlutter, SiLaravel, SiMongodb, SiNextdotjs, SiReact, SiTailwindcss} from "react-icons/si";
import {GrMysql} from "react-icons/gr";

const TechsStack = () => {
  const defaultClassName = "text-xl flex-col rounded-xl py-4 hover:bg-opacity-0 scale-90";

  return (
    <div id="about-section">
      <h1 className="text-2xl text-white font-bold mt-16">Tech Stack</h1>
      <div className="flex flex-wrap mt-4">
        <Chips className={defaultClassName}><span className="text-4xl text-blue-500"><SiTailwindcss/></span>TailwindCSS</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-500"><SiReact/></span>React.js</Chips>
        <Chips className={defaultClassName}><span className="text-4xl"><SiNextdotjs/></span>Next.js</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-red-500"><SiLaravel/></span>Laravel</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-400"><SiFlutter/></span>Flutter</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-orange-500"><SiFirebase/></span>Firebase</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-green-700"><SiMongodb/></span>MongoDB</Chips>
        <Chips className={defaultClassName}><span className="text-4xl text-blue-400"><GrMysql/></span>MySQL</Chips>
      </div>
    </div>
  )
}

export default TechsStack;