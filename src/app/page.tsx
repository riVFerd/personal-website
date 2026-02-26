import Image from 'next/image';
import Contacts from "@/app/components/Contacts";
import TechsStack from "@/app/components/TechsStack";
import SanityClient from "@/lib/SanitiyClient";
import Project from "@/Models/Project";
import ProjectCard from "@/components/ProjectCard";
import Link from 'next/link';
import developerImg from '/public/developer.png';
import TitleComponent from "@/app/components/TitleComponent";

async function getData() {
  const res = await SanityClient.getClient()?.fetch(`*[_type == "profile"]{name, bio, address, "imgUrl": image.asset->url}`);
  return res[0];
}

export default async function Home() {
  const data = await getData();
  const projectList = await Project.getFeaturedProjects();

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-6 py-20 xl:py-24 w-screen overflow-x-hidden">
      <div id="main-section" className="flex flex-col justify-center items-center w-full min-h-[90vh] gap-12 lg:gap-16">
        <TitleComponent name={`${data['name']}`} />
        <Contacts photoUrl={`${data['imgUrl']}?fit=crop&h=200&w=200`} address={data['address']} className={"mt-0"} />
        <div className="flex flex-col w-full xl:flex-row xl:gap-16 xl:px-32 max-w-5xl mx-auto">
          <div id="short-desc" className="">
            <p className="text-white text-justify mt-2">
              {data['bio']}
            </p>
          </div>
        </div>
      </div>
      <TechsStack />
      <div id="projects" className="flex flex-col items-center w-full min-h-screen mt-16 lg:px-16 max-w-7xl mx-auto">
        <h1 className="text-3xl md:text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 my-12">Featured Projects</h1>
        <div id="project-list" className="flex flex-col w-full gap-8 md:flex-row md:flex-wrap justify-center">
          {
            projectList.map((project: any, index: number) => <ProjectCard project={project} key={index} />)
          }
        </div>
        <Link href='/project' className="mt-16 bg-white/10 backdrop-blur-md border border-white/20 text-white font-semibold text-center rounded-full py-3 px-8 transition-all duration-300 hover:bg-white hover:text-black hover:scale-105 hover:shadow-lg hover:shadow-white/20">
          View More Projects
        </Link>
      </div>
    </main>
  )
}
