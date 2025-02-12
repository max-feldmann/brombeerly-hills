'use client'

import React from 'react'
import { useRef, useState } from "react"

const DroneflightHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(false)

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause()
      } else {
        videoRef.current.play()
      }
      setIsPlaying(!isPlaying)
    }
  }

  return (
    <section className='border-b border-gray-200'>
      <div className="z-20 relative " style={{ height: '650px' }}>
          <div className='container mx-auto h-full'>
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-7 flex flex-col justify-center">
                <div>

                  <h1 className='text-6xl font-semibold'>Hier wird eine Headline zu unserer Streuobstwiese stehen.</h1>
                  <button onClick={togglePlay} className="btn btn-primary inline-flex items-center mt-8">
                    {isPlaying ? "Pause Video" : "Play Video"}
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='absolute top-0 right-0 z-0
      ' style={{ height: '650px' }}>
        <div
          className='
          bg-gradient-to-br from-base-100 via-base-100/70 to-base-100/15 
          h-full w-full absolute top-0 r-0'
        ></div>
                <div
          className='
          bg-gradient-to-r from-base-100 via-base-100/70 to-base-100/15 
          h-full w-full absolute top-0 r-0'
        ></div>
        <video
          ref={videoRef}
          className="h-full"
          poster=""
          aria-label="Promotional video about our company"
        >
          <source src="/video/demovideo-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default DroneflightHero