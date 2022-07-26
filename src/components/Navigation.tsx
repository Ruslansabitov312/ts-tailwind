import React from 'react'
import { Link } from 'react-router-dom'

export function Navigation() {
  return (
    <nav className='h-[60px] flex justify-between px-5 bg-gray-500 items-center text-white'>
      <span className='font-bold text-orange-300'>
        React & TypeScript & TailwindCSS
      </span>

      <span>
        <Link to='/' className='mr-2 text-orange-300'>
          Products
        </Link>
        <Link to='/about' className='text-orange-300'>
          About
        </Link>
      </span>
    </nav>
  )
}
