import React from 'react'
import Navbar from '../component/Navbar'
import Routing from '../utils/Routing'

const Hero = () => {
  return (
   <div className='w-full min-h-screen bg-black flex justify-center'>
      <div className='w-full max-w-6xl'>
      <Navbar/>
      <div className='mx-auto px-4 pt-8 max-sm:pb-6 w-full bg-red-300'>
        <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 bg-green-300'>
          <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 col-span-2 md:col-span-4 bg-blue-300'>
asdasd
          </div>
          <div className='bg-yellow-300 gap-5 grid grid-cols-1 lg:grid-cols-2 col-span-2 md:col-span-4 lg:col-span-2'>
asdasda
          </div>
        </div>
      </div>
      <Routing/>
      </div>
    </div>
  )
}

export default Hero
