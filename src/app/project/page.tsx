import Project from "@/Models/Project";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectList() {
  const projectList = await Project.getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-6 py-24 w-screen overflow-x-hidden">
      <div id="projects" className="flex flex-col w-full min-h-screen lg:px-16 max-w-7xl mx-auto">
        <div className="mb-12 text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 mt-8 pb-4">Projects</h1>
          <h2 className="text-lg md:text-xl text-gray-400 font-light">A collection of my recent work and personal projects.</h2>
        </div>
        <div id="project-list" className="flex flex-col w-full gap-8 md:flex-row md:flex-wrap justify-center md:justify-start">
          {
            projectList.map((project: any, index: number) => <ProjectCard project={project} key={index} />)
          }
        </div>
      </div>
    </main>
  )
}