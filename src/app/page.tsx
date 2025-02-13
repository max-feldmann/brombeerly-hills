import DroneflightHero from "@/app/sections/DroneFlightHero/DroneflightHero";
import Image from "next/image";
import Link from "next/link";
import Headline from "./components/Headline/Headline";
import Paragraph from "./components/Paragraph/Paragraph";

export default function Home() {
  return (
    <>
      <DroneflightHero />

      <section className="border-b border-gray-700">
        <div className="container mx-auto">
          <div className="grid grid-cols-2">
            <div className="col-span-2 lg:col-span-1 border-r border-gray-700">
              <div className="grid grid-cols-2">
                <div className="col-span-2 lg:col-span-1 px-4 py-20 pr-4">
                  <Headline as="h2">Das Paradies geht verloren!</Headline>
                  <Paragraph>Unsere heimischen Streuobstwiesen, ein enorm wichtiges Ökosystem, sind vom Aussterben bedroht.</Paragraph>
                  <Link href="/" className="btn btn-outline btn-sm btn-primary">Warum das so ist</Link>
                </div>
                <div className="col-span-2 lg:col-span-1 border-l border-gray-700 relative">
                  <div
                    className='
                    bg-gradient-to-b from-base-100/90 via-base-100/70 to-base-100/15 
                    h-full w-full absolute top-0 r-0'
                  ></div>
                  <Image src={"/image/demofoto1.webp"} width={1920} height={1080} alt="Demo" className="image-full"/>
                </div>
              </div>
            </div>
            <div className="px-4 py-20 md:p-10 lg:p-20 col-span-2 lg:col-span-1">
              <Headline as="h2">Ich bin eine Headline zweiter Rangordnung. Du wirst mich weiter unten finden.</Headline>
              <Paragraph>Ja hier wird wsl. auch text stehen oder so.</Paragraph>
            </div>
          </div>
        </div>
      </section>



      <div className="my-96 opacity-0">.</div>
      <div className="my-96 opacity-0">.</div>
      <div className="my-96 opacity-0">.</div>
      <div className="my-96 opacity-0">.</div>
      <div className="my-96 opacity-0">.</div>
    </>
  );
}
