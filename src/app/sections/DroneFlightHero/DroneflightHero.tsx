'use client'

import React, { useEffect } from 'react'
import { useRef, useState } from "react"

const DroneflightHero = () => {
  const videoRef = useRef<HTMLVideoElement>(null)
  const [isPlaying, setIsPlaying] = useState(true)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.addEventListener("ended", () => {
        setIsPlaying(false)
      })
      videoRef.current.muted = true // Mute the video initially
      videoRef.current.play() // Start playing the video when the component mounts
    }
  }, [])

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
    <section className=' border-b border-gray-200 py-40 relative overflow-hidden'>
      <div className="z-20 relative">
          <div className='p-4 container mx-auto h-full'>
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 md:col-span-9 flex flex-col justify-center">
                <div>

                  <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold'>Hier wird eine Headline zu unserem mega super tollen Projekt stehen.</h1>
                  <button onClick={togglePlay} className="btn btn-primary btn-outline inline-flex items-center mt-8">
                    {isPlaying ? "Pause Video" : "Play Video"}
                  </button>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='absolute top-0 lg:-top-1/2 right-0 z-0' >
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
          style={{}}
          className=""
          aria-label="Promotional video about our company"
          loop
        >
          <source src="/video/demovideo-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
      </div>
    </section>
  )
}

export default DroneflightHero