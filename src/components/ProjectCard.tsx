import Image from "next/image";
import Project from "@/Models/Project";
import Link from "next/link";

const ProjectCard = ({project}: { project: Project }) => {
  return (
    <Link href={`/project/${project.projectSlug}`}>
      <div className="overflow-hidden rounded-xl w-full shadow-lg shadow-cyan-500/50 lg:hover:scale-105">
        <Image src={project.imgUrl} className="w-full lg:h-80 object-cover" alt="project-img" width={640} height={320}/>
        <h1 className="text-xl font-bold text-black text-left bg-gray-100 p-2">{project.projectTitle}</h1>
      </div>
    </Link>
  )
}

export default ProjectCard;