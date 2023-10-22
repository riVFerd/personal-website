import Image from 'next/image';
import Contacts from "@/app/Contacts";
import TechsStack from "@/app/TechsStack";
import SanityClient from "@/utils/SanitiyClient";

async function getData() {
  const res = await SanityClient.getClient()?.fetch(`*[_type == "profile"]{name, bio, address, "imgUrl": image.asset->url}`);
  console.log(res[0]);
  return res[0];
}

export default async function Home() {
  const data = await getData();

  return (
    <main className="flex min-h-screen flex-col items-center px-6 py-24">
      <div id="main-section" className="flex flex-col justify-around items-center w-full h-[80vh]">
        <Image src={`${data['imgUrl']}?fit=crop&crop=top&h=200&w=200`} width={200} height={200} alt="profice pict" className="rounded-full"/>
        <div className="flex flex-col w-full mt-8 xl:flex-row xl:gap-16 xl:px-16">
          <div id="short-desc" className="xl:w-1/2">
            <h1 className="text-2xl font-bold text-white" id="#about">{`Hi, I'm ${data['name']} 👋`}</h1>
            <p className="text-white text-justify mt-2">
              {data['bio']}
            </p>
          </div>
          <Contacts address={data['address']}/>
        </div>
      </div>
      <TechsStack/>
    </main>
  )
}
