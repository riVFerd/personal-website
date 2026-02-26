import Project from "@/Models/Project";
import { PortableText, PortableTextReactComponents } from "@portabletext/react";
import Image from "next/image";
import SanityImgUrl from "@/helper/SanityImgUrl";

// components customization for portable text
const components: Partial<PortableTextReactComponents> = {
  types: {
    image: ({ value }): React.ReactElement => {
      return (
        <div className={"flex overflow-hidden justify-center rounded-2xl shadow-xl shadow-black/50 border border-white/10"}>
          <Image src={SanityImgUrl.getUrlBuilder(value).url()} alt="project-img" width={800} height={1200}
            className="w-full h-auto max-h-[80vh] object-contain m-0 rounded-2xl" />
        </div>
      );
    }
  }
}

export default async function ProjectDetailPage({ params }: { params: { slug: string } }) {
  const project = await Project.getProjectBySlug(params.slug);

  return (
    <main className="flex min-h-screen flex-col items-center px-4 md:px-6 py-20 lg:py-24 w-screen overflow-x-hidden">
      <div className="flex flex-col items-center w-full max-w-4xl mx-auto">
        <h1 className="text-4xl md:text-5xl lg:text-6xl text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 font-bold mt-12 pb-8 text-center tracking-tight leading-tight">{project.projectTitle}</h1>

        {/*<div className="w-full relative rounded-3xl overflow-hidden shadow-2xl shadow-primary-blue/20 border border-white/10 mb-12">*/}
        {/*  <Image src={project.imgUrl} className="w-full h-[40vh] md:h-[50vh] lg:h-[60vh] object-cover" alt={project.projectTitle} width={1280} height={720} />*/}
        {/*  <div className="absolute inset-0 bg-gradient-to-t from-[#111111] via-transparent to-transparent opacity-60"></div>*/}
        {/*</div>*/}

        <article className="flex flex-col prose prose-invert prose-lg md:prose-xl prose-img:m-2 prose-img:rounded-xl prose-img:shadow-lg prose-headings:text-white prose-a:text-primary-blue hover:prose-a:text-white prose-a:transition-colors w-full max-w-none px-6 md:px-12 bg-white/5 backdrop-blur-md border border-white/10 rounded-3xl py-12   shadow-inner">
          <Image src={project.imgUrl} className="w-full h-auto max-h-[80vh] object-contain !shadow-none rounded-2xl" alt={project.projectTitle} width={800} height={1200} />
          <PortableText value={project.projectContent} components={components} />
        </article>
      </div>
    </main>
  )
}