import Project from "@/Models/Project";
import {PortableText, PortableTextReactComponents} from "@portabletext/react";
import Image from "next/image";
import SanityImgUrl from "@/helper/SanityImgUrl";

// components customization for portable text
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({value}): React.ReactElement => {
      return (
        <div className={"flex overflow-hidden justify-center my-4"}>
          <Image src={SanityImgUrl.getUrlBuilder(value).url()} alt="project-img" width={640} height={320}
                 className="rounded-xl border-2 w-auto max-w-[90vw] lg:max-w-[50vw] max-h-[80vh]"/>
        </div>
      );
    }
  }
}

export default async function ProjectDetailPage({params}: { params: { slug: string } }) {
  const project = await Project.getProjectBySlug(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-2xl text-white font-bold mt-12 lg:text-3xl">{project.projectTitle}</h1>
      <Image src={project.imgUrl} className="rounded-xl border-2 my-4 w-auto max-w-[90vw] lg:max-w-[50vw] max-h-[80vh]" alt="project-img" width={640} height={320}/>
      <div className="flex flex-col text-white w-full lg:w-3/4 text-justify">
        <PortableText value={project.projectContent} components={components}/>
      </div>
    </main>
  )
}