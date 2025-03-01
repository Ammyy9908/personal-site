import React from 'react'

function ImageSection() {
  return (
    <section className='w-full h-[40vh] md:h-[60vh] lg:h-[70vh] cursor-pointer relative hover:child'>
        <div className='w-full h-full relative'>
           <img src="/author_1.jpg" alt="" className='w-full h-full object-cover absolute filter hue-rotate-180' />
           <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-white/30 to-transparent -translate-x-[100%] transition-transform duration-1000 ease-in-out z-10'></div>
           <div className='w-full h-full absolute top-0 left-0 bg-gradient-to-r from-transparent via-blue-500/50 to-transparent -translate-x-[100%] transition-transform duration-1000 ease-in-out z-10'></div>
        </div>
    </section>
  )
}

export default ImageSection
