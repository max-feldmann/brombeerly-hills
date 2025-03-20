import { Metadata } from 'next'
import React from 'react'

export const metadata: Metadata = {
  title: "Knowledge Hub",
  description: "Hier findest du alle Informationen, die du brauchst, um aktiv zu werden.",
}

const page = () => {
  return (
    <>
        <h1>Hello World</h1>
    </>
  )
}

export default page