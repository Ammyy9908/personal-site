import React from 'react'

function NotFound() {
  return (
    <div className='flex flex-col items-center justify-center h-screen'>
        <div className='flex flex-col items-center justify-center gap-16'>
            <div>
            <h3 className='text-4xl font-bold sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl'>Oops!</h3>
            <p className='text-gray-500 sm:text-lg md:text-xl lg:text-2xl xl:text-3xl'>You seem to be lost.</p>
            </div>
            <div>
                <img src="/404.svg" alt="404" className='w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 xl:w-104 xl:h-104' />
            </div>
        </div>
    </div>
  )
}

export default NotFound