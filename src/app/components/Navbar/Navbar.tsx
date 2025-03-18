import Link from 'next/link'
import React from 'react'

const Navbar = () => {
  return (
    <header className='z-30 border-b border-gray-700'>
      <div className="navbar bg-base-100 container mx-auto">
        <div className="navbar-start">
          <Link href="/" className="btn btn-ghost text-xl">Brombeerly Hills</Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li><Link href="/hub">Hub</Link></li>
          </ul>
        </div>
        <div className="navbar-end">
          <a className="btn btn-primary btn-sm md:btn-md">Mitmachen</a>
        </div>
      </div>
    </header>
  )
}

export default Navbar