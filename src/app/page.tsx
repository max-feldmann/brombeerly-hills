import DroneflightHero from "@/app/sections/DroneFlightHero/DroneflightHero";
import Image from "next/image";
import Link from "next/link";
import Headline from "./components/Headline/Headline";
import Paragraph from "./components/Paragraph/Paragraph";
import TreeCountStatistic from "./components/TreeCountStatistic/TreeCountStatistic";
import SliderFullWidth from "./components/SliderFullWidth/SliderFullWidth";

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
                  <Headline as="h2">Das Paradies ist in Gefahr!</Headline>
                  <Paragraph>Unsere heimischen Streuobstwiesen, ein enorm wichtiges Ökosystem, sind vom Aussterben bedroht.</Paragraph>
                  <Link href="/hub/allgemein/streuobst-in-gefahr" className="btn btn-outline btn-sm btn-primary">Warum das so ist</Link>
                </div>
                <div className="col-span-2 lg:col-span-1 | relative | lg:border-l border-gray-700">
                  <div
                    className='
                    bg-linear-to-b from-base-100/90 via-base-100/70 to-base-100/15 
                    h-full w-full absolute top-0 r-0'
                  ></div>
                  <Image src={"/image/demofoto1.webp"} width={1920} height={1080} alt="Demo" className="image-full"/>
                </div>
              </div>
            </div>

            <div className="px-4 py-20 md:p-10 lg:p-20 | col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 | border-b lg:border-b-0 border-gray-700">
              <div style={{ maxWidth: "752px"}}>
                <Headline as="h2">Der Bestand an Streuobst in Deutschland geht seit den 50ern verloren</Headline>
                <Paragraph>Wenn wir nicht aufpassen, isses bald ganz weg, gell.</Paragraph>
                <div className="mt-16">
                  <TreeCountStatistic />
                </div>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 row-span-1 lg:row-span-2 | border-r-0 lg:border-r border-b  border-gray-700 | flex justify-end">
              <div className="px-4 xl:px-0 py-20" style={{ maxWidth: "752px"}}>
                <Headline as="h2">Warum Streuobstwiesen so geil sind</Headline>
                <Paragraph>Ja hier wird wsl. auch text stehen oder so. Zumindest würde ich sagen ist das basierend auf extrem plausiblen Erfahrungen der Vergangenheit sehr wahrscheinlich.</Paragraph>
                <Link href="/hub/allgemein/streuobst-vorteile" className="btn btn-outline btn-sm btn-primary">Warum das so ist</Link>
              </div>
            </div>

            <div className="col-span-2 lg:col-span-1 row-span-1 | flex flex-col items-start | border-b border-t-0 lg:border-t border-gray-700">
              <div className="px-4 py-20 md:p-10 lg:p-20" style={{ maxWidth: "752px"}}>
                <Headline as="h2">Was du tun kannst</Headline>
                <Paragraph>Lets go Content writing whoop whoop</Paragraph>                
              </div>
            </div>

          </div>
        </div>
      </section>

      <section className="border-b border-gray-700">
        <div className="container mx-auto flex flex-col items-center py-20">
          <div className="flex flex-col md:items-center sm:w-3/4">
            <Headline as="h2">Unser Projekt in Bamberg</Headline>
            <Paragraph>Schau doch mal!</Paragraph>
          </div>
          <div className="flex justify-center">
            <div className="md:w-3/5 border border-gray-700 sm:rounded-lg overflow-hidden">
              <SliderFullWidth />
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
