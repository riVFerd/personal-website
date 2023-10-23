import Image from "next/image";
import Project from "@/Models/Project";
import Link from "next/link";

const ProjectCard = ({project}: { project: Project }) => {
  return (
    <Link href={`/project/${project.projectSlug}`}>
      <div className="overflow-hidden rounded-xl w-full border-4 border-secondary shadow-md shadow-primary-blue/75 transition-all lg:hover:shadow-lg lg:hover:scale-105 lg:hover:shadow-primary-blue">
        <Image src={project.imgUrl} className="w-full lg:h-80 object-cover" alt="project-img" width={640} height={320}/>
        <h1 className="text-xl font-bold text-primary text-left bg-secondary p-2">{project.projectTitle}</h1>
      </div>
    </Link>
  )
}

export default ProjectCard;