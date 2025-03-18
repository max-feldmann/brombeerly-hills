import Image from 'next/image'
import React from 'react'

const SliderFullWidth = () => {
  return (
    <div className="carousel h-full">
        <div className="carousel-item w-full">
            <div className="carousel-item w-full">
                <Image 
                    src="/image/orchardemo1.webp"
                    alt="Orchard"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="carousel-item w-full">
                <Image 
                    src="/image/orchardemo2.webp"
                    alt="Orchard"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="carousel-item w-full">
                <Image 
                    src="/image/orchardemo3.webp"
                    alt="Orchard"
                    width={1920}
                    height={1080}
                />
            </div>
            <div className="carousel-item w-full">
                <Image 
                    src="/image/orchardemo4.webp"
                    alt="Orchard"
                    width={1920}
                    height={1080}
                />
            </div>
        </div>
    </div>
  )
}

export default SliderFullWidth