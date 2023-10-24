import Project from "@/Models/Project";
import {PortableText, PortableTextReactComponents} from "@portabletext/react";
import Image from "next/image";
import SanityImgUrl from "@/components/helper/SanityImgUrl";

// components customization for portable text
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({value}): React.ReactElement => {
      return (
        <Image src={SanityImgUrl.getUrlBuilder(value).url()} alt="project-img" width={640} height={320} className="rounded-xl border-2 my-2"/>
      );
    }
  }
}

export default async function ProjectDetailPage({params}: { params: { slug: string } }) {
  const project = await Project.getProjectBySlug(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 py-8 md:px-8 lg:px-16">
      <h1 className="text-2xl text-white font-bold mt-12 lg:text-3xl">{project.projectTitle}</h1>
      <Image src={project.imgUrl} className="rounded-xl border-2 my-4" alt="project-img" width={640} height={320}/>
      <div className="text-white w-full">
        <PortableText value={project.projectContent} components={components}/>
      </div>
    </main>
  )
}