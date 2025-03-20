import React from 'react';
import Headline from '../components/Headline/Headline';
import Paragraph from '../components/Paragraph/Paragraph';
import { cormorantGaramond } from '../../../public/styles/fonts';
import Image from 'next/image';
import FeaturedCard from '../components/FeaturedCard/FeaturedCard';

const page = () => {
  return (
    <>
        <section className='mb-20'>
            <div className='container mx-auto lg:my-28 | border-b lg:border border-gray-700'>
                <div className="p-6 md:p-10 lg:p-20 | flex flex-col lg:items-center items-start">
                    <div className='max-w-2/3 flex flex-col items-start lg:items-center'>
                        <span className={`${cormorantGaramond.className} bg-primary/10 rounded-lg font-semibold py-2 px-5`}>Aktiver Naturschutz</span>
                        <Headline as="h1" className='mt-8'>Hilf uns ein Stück Kulturlandschaft zu erhalten!</Headline>
                        <Paragraph>Gemeinsam restaurieren wir eine alte Streuobstwiese in Bamberg. Bei unserem Projekt gibt es jede Menge zu tun! Von Bäumebeschneiden bis Bodenbearbeitung - Wir freuen uns über helfende Hände.</Paragraph>
                        <Image
                            src={'/image/test.png'}
                            width={1920}
                            height={1080}
                            alt="Demo"
                            className="lg:w-2/3"
                            />
                    </div>
                </div>
                <div className="grid grid-cols-3">
                    <div className="col-span-3 lg:col-span-1 | lg:border-r border-gray-700">
                        <FeaturedCard
                            headline="Sachspenden"
                            paragraph="Du hast Bauholz oder Werkzeug übrig? Wir nehmen es gerne entgegen!"
                            cardLink='/hub/helfen/sachspenden'
                            imageUrl="/image/sachspenden.webp"
                        />
                    </div>
                    <div className="col-span-3 lg:col-span-1 | lg:border-r border-gray-700">
                        <FeaturedCard
                            headline="Finanzielle Unterstützung"
                            paragraph="Für Pacht, Werkzeug und Material benötigen wir finanzielle Unterstützung."
                            cardLink='/hub/helfen/finanzielle-unterstuetzung'
                            imageUrl="/image/finanzielle-unterstuetzung.webp"
                        />
                    </div>
                    <div className="col-span-3 lg:col-span-1">
                        <FeaturedCard
                            headline="Anpacken"
                            paragraph="Du möchtest aktiv mithelfen? Wir freuen uns über jede helfende Hand!"
                            cardLink='/hub/helfen/anpacken'
                            imageUrl="/image/anpacken-2.webp"
                        />
                    </div>
                </div>
            </div>
        </section>
    </>
  );
};

export default page;

