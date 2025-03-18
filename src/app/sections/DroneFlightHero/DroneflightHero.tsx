'use client'

import Link from 'next/link'
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
    <section className=' border-b border-gray-700 py-40 relative overflow-hidden'>
      <div className="z-20 relative">
          <div className='p-4 container mx-auto h-full'>
            <div className="grid grid-cols-12 h-full">
              <div className="col-span-12 md:col-span-5 flex flex-col justify-center">
                <div>
                  <h1 className='text-3xl md:text-5xl lg:text-7xl font-semibold'>Paradise lost.</h1>
                  <p className='mt-4'>Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.</p>
                  <div className='mt-8 flex gap-2'>
                    <Link href="/" className="btn btn-sm md:btn-md btn-primary">Mitmachen</Link>
                    <button onClick={togglePlay} className="btn btn-sm md:btn-md btn-primary btn-outline">
                      {isPlaying ? "Video pausieren" : "Video abspielen"}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
      </div>

      <div className='absolute top-0 right-0 z-0' >
        <div
          className='
          bg-linear-to-br from-base-95 via-base-100/70 to-base-100/15 
          h-full w-full absolute top-0 r-0'
        ></div>
        <div
          className='
          bg-linear-to-r from-base-100 via-base-100/70 to-base-100/15 
          h-full w-full absolute top-0 r-0'
        ></div>
        <video
          ref={videoRef}
          playsInline
          style={{minHeight: "1000px"}}
          className="object-cover object-center"
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