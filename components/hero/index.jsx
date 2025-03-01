import React from 'react'
 // Assuming the avatar image is in the same directory

function Hero() {
  return (
    <div 
      className='w-full h-[55vh] cursor-pointer relative flex items-center justify-center'
      id='hero'
    >
        <div className='w-[85%] mx-auto flex flex-col items-center'>
            <div className='flex flex-col items-start'>
                <img src={'/author.png'} alt="Avatar" className='rounded-full mb-4 w-32 h-32' />
                <p className='text-4xl md:text-6xl font-bold leading-16'>I’m Sumit creative backend engineer <span className='text-gray-500'>crafting innovative solutions for a better tomorrow</span></p>
            </div>
        </div>
    </div>
  ) 
}

export default Hero