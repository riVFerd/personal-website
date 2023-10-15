import Image from 'next/image';
import Contacts from "@/app/Contacts";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24">
      <div id="main-section" className="flex flex-col justify-center items-center w-full">
        <Image src="https://source.unsplash.com/random/320x320/?formal-face" width={180} height={180} alt="profice pict" className="rounded-full"/>
        <div className="flex flex-col w-full mt-8 xl:flex-row xl:gap-16 xl:px-16">
          <div id="short-desc" className="xl:w-1/2">
            <h1 className="text-2xl font-bold text-white" id="#about">{"Hi, I'm Virgy Ferdian 👋"}</h1>
            <p className="text-white text-justify mt-2">
              {"I'm a third-year Information Technology college student at Politeknik Negeri Malang. Currently focusing on becoming a mobile developer, but also have some experience in front-end web and backend development."}
            </p>
          </div>
          <Contacts/>
        </div>
      </div>
    </main>
  )
}
