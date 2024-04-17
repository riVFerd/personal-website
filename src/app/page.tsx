import Image from 'next/image';
import Contacts from "@/app/components/Contacts";
import TechsStack from "@/app/components/TechsStack";
import SanityClient from "@/utils/SanitiyClient";
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
    <main className="flex min-h-screen flex-col items-center px-6 py-20 xl:py-24 w-screen overflow-x-hidden">
      <div id="main-section" className="flex flex-col justify-around items-center w-full min-h-[90vh]">
        <TitleComponent name={`${data['name']}`}/>
        <Contacts photoUrl={`${data['imgUrl']}?fit=crop&h=200&w=200`} address={data['address']} className={"mt-0"}/>
        <div className="flex flex-col w-full mt-8 xl:flex-row xl:gap-16 xl:px-32">
          <div id="short-desc" className="">
            <p className="text-white text-justify mt-2">
              {data['bio']}
            </p>
          </div>
        </div>
      </div>
      <TechsStack/>
      <div id="projects" className="flex flex-col items-center w-full min-h-screen mt-8 lg:px-16">
        <h1 className="text-2xl font-bold text-white my-8">Featured Projects</h1>
        <div id="project-list" className="flex flex-col w-full flex-wrap gap-8 md:flex-row justify-center">
          {
            projectList.map((project: any, index: number) => <ProjectCard project={project} key={index}/>)
          }
        </div>
        <Link href='/project' className="bg-primary text-white text-center rounded-lg my-8 p-2 w-1/2 lg:w-1/4 hover:bg-[#11222aff] hover:scale-95">More
          project...</Link>
      </div>
    </main>
  )
}
