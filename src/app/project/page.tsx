import Project from "@/Models/Project";
import ProjectCard from "@/components/ProjectCard";

export default async function ProjectList(){
  const projectList = await Project.getProjects();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24">
      <div id="projects" className="flex flex-col w-full min-h-screen lg:px-16">
        <h1 className="text-2xl font-bold text-white mt-8">Projects</h1>
        <h2 className="text-lg text-white my-4">Some of the projects I have built:</h2>
        <div id="project-list" className="flex flex-col w-full flex-wrap gap-8 md:flex-row justify-center">
          {
            projectList.map((project: any, index: number) => <ProjectCard project={project} key={index}/>)
          }
        </div>
      </div>
    </main>
  )
}