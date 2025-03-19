import React from 'react'
import Headline from '../components/Headline/Headline'
import Paragraph from '../components/Paragraph/Paragraph'
import { cormorantGaramond } from '../../../public/styles/fonts'
import Image from 'next/image'

const page = () => {
  return (
    <>
        <section>
            <div className="container mx-auto lg:my-28 border-b lg:border border-gray-700">
                <div className='p-6 md:p-10 lg:p-20 flex flex-col items-start lg:items-center'>
                    <span className={`${cormorantGaramond.className} mb-8 bg-primary/10 rounded-lg font-semibold py-2 px-5`}>Aktiver Naturschutz</span>
                    <Headline as='h1'>Hilf uns ein Stück Kulturlandschaft zu erhalten!</Headline>
                    <Paragraph>Bei unserem Projekt gibt es jede Menge zu tun! Von Bäume beschneiden bis Bodenbearbeitung - Wir freuen uns über helfende Hände.</Paragraph>
                    <div className='flex gap-4 mt-8'>
                        <button className='btn btn-primary'>Mitmachen</button>
                        <button className='btn btn-outline btn-primary'>Mehr erfahren</button>
                    </div>
                    <Image 
                        src={"/image/test.png"}
                        width={1920}
                        height={1080}
                        alt="Demo"
                        className='lg:w-1/3'
                    />
                </div>

                <div>

                </div>
            </div>
        </section>
    </>
  )
}

export default page