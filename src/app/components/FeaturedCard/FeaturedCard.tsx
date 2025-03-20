'use client'

import React, { useState } from 'react'
import Headline from '../Headline/Headline'
import Paragraph from '../Paragraph/Paragraph'
import Link from 'next/link';
import { ArrowLongRightIcon } from '@heroicons/react/16/solid';

interface FeatureCardProps {
    headline: string;
    paragraph: string;
    cardLink: string;
    imageUrl: string;
}

const FeaturedCard = ({headline, paragraph, cardLink, imageUrl} : FeatureCardProps) => {
    const [isHovered, setIsHovered] = useState(false);

    return (
        <div
            className={`${isHovered && "cursor-pointer"} p-10 border-t relative border-gray-700 h-full bg-cover bg-center`}  
            style={{backgroundImage: `url('${imageUrl}')`,}}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
        >   
            <Link href={cardLink}>
                <div className={`${isHovered && "lg:opacity-85"} bg-linear-to-br from-gray-950 to-gray-950/30 absolute top-0 left-0 w-full h-full`}></div>
                <div className="relative aspect-square">
                    <div className="flex flex-col h-full justify-between">
                        <div>
                            <Headline as="h2" className='text-4xl'>{headline}</Headline>
                            <Paragraph size="lg">{paragraph}</Paragraph>
                        </div>

                        <div className={`${isHovered && "lg:gap-3"} flex gap-1 transition-all ease-in-out items-center`}>
                            <span className='text-lg'>Mehr Infos</span>
                            <ArrowLongRightIcon className='size-5' />
                        </div>
                    </div>
                </div>
            </Link>
        </div>
    )
}

export default FeaturedCard