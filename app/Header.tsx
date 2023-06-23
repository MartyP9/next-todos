import Link from 'next/link'
import React from 'react'

function Header() {
  return (
    <header className='py-5 bg-blue-400' >
         <Link href='/' className='mx-5 px-2 py-1 bg-white text-blue-600 rounded-lg'>Home</Link>
         <Link href='/search' className='mx-5 px-2 py-1 bg-white text-blue-600 rounded-lg'>Search</Link>
         <Link href='/todos' className='mx-5 px-2 py-1 bg-white text-blue-600 rounded-lg'>Todos</Link>
    </header>
  )
}

export default Header