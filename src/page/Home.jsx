import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../component/Container'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-black flex justify-center'>
      <div className='w-full max-w-6xl'>
        <div className='mx-auto px-4 pt-8 max-sm:pb-6 w-full'>
          <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
            <div className='gap-5 grid grid-cols-2 sm:grid-cols-4 col-span-2 md:col-span-4'>

              <div className='col-span-1 row-span-1 sm:h-40'>
                <Container title={"Status"} subtitle={<><span class="relative flex size-[5px]">
  <span class="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
  <span class="relative inline-flex size-[5px] rounded-full bg-green-500"></span>
</span></>}>
                  <p className='font-medium text-white text-xs leading-5'>Available for</p>
                  <ul className='font-medium text-neutral-500 text-xs leading-5'>
                    <li>Freelance</li>
                    <li>Fulltime</li>
                    <li>contract</li>
                  </ul>
                </Container>
  
              </div>


               <div className='col-span-1 row-span-1 sm:h-40'>
                  <Container title={"CV"} subtitle={"Hire Me"}>
                <div className='flex justify-center items-center h-full'>
                    <a className='bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-lg font-normal text-neutral-200 text-sm transition duration-300 ease-in-out' href="">View Resume</a>
                </div>
                  </Container>
              </div>

              <div className='sm:col-span-2 row-span-1'>
                <Container title={"About"} subtitle={"Akash Ajay Patil"}>
                  <p className='font-medium text-white text-xs leading-5'>
                    I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable and intuitive web solutions. I embrace challenges as opportunities to learn and grow as a developer.
                  </p>
                </Container>
              </div>


             

              <div className='relative col-span-4 row-span-5 min-h-[50px] max-h-[540px]'>
                <Container title={"Projects"}>

                </Container>
              </div>

            </div>
            <div className=' gap-5 grid grid-cols-1 lg:grid-cols-2 col-span-2 md:col-span-4 lg:col-span-2'>

              <div className='col-span-2 row-span-2 max-h-[240px]'>
                <Container title={"Experiences"}>


                </Container>
              </div>
              <div className='col-span-2 row-span-2 max-h-[240px]'>
                <Container title={"Tech Stack"}>


                </Container>
              </div>


            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
