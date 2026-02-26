import Image from "next/image";
import Project from "@/Models/Project";
import Link from "next/link";

const ProjectCard = ({ project }: { project: Project }) => {
  return (
    <Link href={`/project/${project.projectSlug}`} className="group w-full md:w-[45%] lg:w-[30%] flex flex-col">
      <div className="relative overflow-hidden rounded-2xl w-full bg-white/5 border border-white/10 shadow-lg backdrop-blur-sm transition-all duration-300 transform group-hover:-translate-y-2 group-hover:shadow-2xl group-hover:shadow-primary-blue/30 group-hover:border-white/20 flex-grow flex flex-col">
        <div className="relative w-full h-56 md:h-64 overflow-hidden bg-black/50">
          <Image src={project.imgUrl} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" alt={project.projectTitle} width={640} height={320} />
          <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-80 group-hover:opacity-40 transition-opacity duration-300"></div>
        </div>
        <div className="p-5 flex-grow flex flex-col justify-between">
          <h1 className="text-xl md:text-2xl font-bold text-white text-left line-clamp-2">{project.projectTitle}</h1>
          <div className="mt-4 flex items-center text-primary-blue font-medium text-sm self-start group-hover:text-white transition-colors duration-300">
            View Details
            <svg className="w-4 h-4 ml-2 transform group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M14 5l7 7m0 0l-7 7m7-7H3"></path></svg>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ProjectCard;