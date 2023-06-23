import React, { Suspense } from 'react'
import TodosList from './(user)/todos/TodosList'

function Home() {
  return (
    <div>
      <p className='my-5 text-blue-800'>Click buttons above to navigate to other demo features using Next.JS 13</p>
      <h1 className='mb-5 text-blue-800'>Suspense demo test below</h1>
      <Suspense fallback={<p>loading the todos...</p>}>
        <div className="flex space-x-2"><TodosList /></div>
      </Suspense>

      <Suspense fallback={<p>loading the shopping cart...</p>}>
        <div className="flex space-x-2"><TodosList /></div>
      </Suspense>
    </div>
  )
}

export default Home