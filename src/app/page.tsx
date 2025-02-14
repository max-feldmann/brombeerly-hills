import DroneflightHero from "@/app/sections/DroneFlightHero/DroneflightHero";
import Image from "next/image";
import Link from "next/link";
import Headline from "./components/Headline/Headline";
import Paragraph from "./components/Paragraph/Paragraph";

export default function Home() {
  return (
    <>
      <DroneflightHero />

      <section className="">
        <div className="">
          <div className="grid grid-cols-2 grid-rows-3">

            <div className="col-span-2 lg:col-span-1 row-span-1 | flex justify-end | border-b border-r border-gray-700">
              <div className="grid grid-cols-2 " style={{ maxWidth: "752px"}}>
                <div className="ml-4 xl:ml-0 py-20 pr-4 | col-span-2 lg:col-span-1" >
                  <Headline as="h2">1 Das Paradies geht verloren!</Headline>
                  <Paragraph>Unsere heimischen Streuobstwiesen, ein enorm wichtiges Ökosystem, sind vom Aussterben bedroht.</Paragraph>
                  <Link href="/" className="btn btn-outline btn-sm btn-primary">Warum das so ist</Link>
                </div>
                <div className="col-span-2 lg:col-span-1 | relative | lg:border-l border-gray-700">
                  <div
                    className='
                    bg-gradient-to-b from-base-100/90 via-base-100/70 to-base-100/15 
                    h-full w-full absolute top-0 r-0'
                  ></div>
                  <Image src={"/image/demofoto1.webp"} width={1920} height={1080} alt="Demo" className="image-full"/>
                </div>
              </div>
            </div>

            <div className="px-4 py-20 md:p-10 lg:p-20 | col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 | border-b lg:border-b-0 border-gray-700">
              <div style={{ maxWidth: "752px"}}>
                <Headline as="h2">2 Ich bin eine Headline zweiter Rangordnung. Du wirst mich weiter unten finden.</Headline>
                <Paragraph>Ja hier wird wsl. auch text stehen oder so. Zumindest würde ich sagen ist das basierend auf extrem plausiblen Erfahrungen der Vergangenheit sehr wahrscheinlich.</Paragraph>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 | border-r-0 lg:border-r border-b  border-gray-700 | flex justify-end">
              <div className="px-4 xl:px-0 py-20" style={{ maxWidth: "752px"}}>
                <Headline as="h2">3 Ich bin eine Headline zweiter Rangordnung. Du wirst mich weiter unten finden.</Headline>
                <Paragraph>Ja hier wird wsl. auch text stehen oder so. Zumindest würde ich sagen ist das basierend auf extrem plausiblen Erfahrungen der Vergangenheit sehr wahrscheinlich.</Paragraph>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 row-span-1 | flex flex-col items-start | border-b border-t-0 lg:border-t border-gray-700">
              <div className="px-4 py-20 md:p-10 lg:p-20" style={{ maxWidth: "752px"}}>
                <Headline as="h2">4 Hier au noch Content hin</Headline>
                <Paragraph>Lets go Content writing whoop whoop</Paragraph>                
              </div>
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
