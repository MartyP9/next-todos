import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='py-5 bg-blue-400'>
         <Link href='/' className='px-2 py-1 bg-white text-blue-600 rounded-lg'>Home</Link>
    </header>
  )
}

export default Header