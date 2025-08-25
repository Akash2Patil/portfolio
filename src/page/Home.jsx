import React from 'react'
import { Link } from 'react-router-dom'
import Container from '../component/Container'
import Techbtn from '../component/Techbtn'
import Projectcard from '../component/Projectcard'

const Home = () => {
  return (
    <div className='w-full min-h-screen bg-black flex justify-center'>
      <div className='w-full max-w-6xl'>
        <div className='mx-auto px-4 pt-8 max-sm:pb-6 w-full'>
          <div className='gap-5 sm:grid sm:grid-cols-2 sm:grid-cols-4 lg:grid-cols-6'>
            <div className='gap-5 flex flex-wrap sm:grid sm:grid-cols-2 sm:grid-cols-4 col-span-2 md:col-span-4'>
              <div className='w-[47%] sm:w-full sm:col-span-1 sm:row-span-1 h-40 sm:max-h-40'>
                <Container title={"Location"} subtitle={"India"}>
                  <div className='flex justify-center items-center h-full'>

                  </div>
                </Container>
              </div>
              <div className='w-[47%] sm:w-full sm:col-span-1 sm:row-span-1 h-40 sm:max-h-40'>
                <Container title={"Status"} subtitle={<><span className="relative flex size-[5px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-[5px] rounded-full bg-green-500"></span>
                </span></>}>
                  <p className='flex gap-2 font-medium text-white text-xs leading-5'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-4">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M2.25 12.75V12A2.25 2.25 0 0 1 4.5 9.75h15A2.25 2.25 0 0 1 21.75 12v.75m-8.69-6.44-2.12-2.12a1.5 1.5 0 0 0-1.061-.44H4.5A2.25 2.25 0 0 0 2.25 6v12a2.25 2.25 0 0 0 2.25 2.25h15A2.25 2.25 0 0 0 21.75 18V9a2.25 2.25 0 0 0-2.25-2.25h-5.379a1.5 1.5 0 0 1-1.06-.44Z" />
                  </svg>
                    Available for</p>
                  <ul className='font-medium text-xs leading-5'>
                    <li className='flex gap-1 text-neutral-500 hover:text-white cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg>
                      Freelance</li>
                    <li className='flex gap-1 text-neutral-500 hover:text-white cursor-pointer'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg> Fulltime</li>
                    <li className='flex gap-1 text-neutral-500 hover:text-white cursor-pointer'> <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.2" stroke="currentColor" class="size-4">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M19.5 14.25v-2.625a3.375 3.375 0 0 0-3.375-3.375h-1.5A1.125 1.125 0 0 1 13.5 7.125v-1.5a3.375 3.375 0 0 0-3.375-3.375H8.25m2.25 0H5.625c-.621 0-1.125.504-1.125 1.125v17.25c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V11.25a9 9 0 0 0-9-9Z" />
                    </svg> Contract</li>
                  </ul>
                </Container>
              </div>


              <div className='sm:col-span-2 row-span-1 sm:h-40 sm:max-h-40'>
                <Container title={"About"} subtitle={"Akash Ajay Patil"}>
                  <p className='font-medium text-white text-xs leading-5'>
                    I am a software developer passionate about crafting dynamic and user-centric web apps. With experience in modern technologies, I thrive on building scalable and intuitive web solutions. I embrace challenges as opportunities to learn and grow as a developer.
                  </p>
                </Container>
              </div>

              <div className='relative col-span-4 row-span-5 min-h-[50px] max-h-[540px]'>
                <Container title={"Projects"}>
                  <div className='flex gap-3'>
                    <Projectcard
                      projecttitle={"ToDo App"}
                      description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas mlorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas mlorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas m"} vidurl={'asdas'}
                      gitlink={'https://github.com/Akash2Patil/todolist'}
                      sitelink={'https://todo13app.netlify.app/'}>
                      <Techbtn title={"react js"} />
                      <Techbtn title={"tailwindcss"} />
                    </Projectcard>
                    <Projectcard className={"hidden sm:block"}
                      projecttitle={"Intellore"}
                      description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas mlorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas mlorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas m"} vidurl={'asdas'}
                      gitlink={'asdasd'}
                      sitelink={'asdasd'}>
                      <Techbtn title={"react js"} />
                      <Techbtn title={"next js"} />
                      <Techbtn title={"vue js"} />
                    </Projectcard>
                  </div>
                </Container>
                <div className='bottom-[0px] z-10 absolute bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent w-[99%] h-32 transition-all translate-x-1 duration-200 ease-in'>
                  <Link to={'/projects'} className='bottom-[20px] left-1/2 z-[11] absolute flex justify-center items-center gap-1 bg-neutral-700/40 p-1 px-2 border rounded-full text-white text-xs -translate-x-1/2' href="">Show more
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="3" stroke="currentColor" class="size-2.5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="m4.5 19.5 15-15m0 0H8.25m11.25 0v11.25" />
                    </svg>
                  </Link>
                </div>
              </div>

            </div>
            <div className='mt-5 sm:mt-0 gap-5 grid grid-cols-1 lg:grid-cols-2 col-span-2 md:col-span-4 lg:col-span-2'>

              <div className='col-span-2 row-span-2 h-[240px] max-h-[240px] overflow-hidden'>
                <Container title={"Experiences"}>
                  <div className='flex flex-col gap-5 mt-5'>
                    <div className='company gap-2'>
                      <div className="logo">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <h3 className='font-medium text-white text-sm'>
                          Plan-a
                        </h3>
                        <p className='font-normal text-white text-xs'>
                          Frontend developer
                        </p>
                      </div>
                    </div>
                    <div className='company gap-2'>
                      <div className="logo">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <h3 className='font-medium text-white text-sm'>
                          Technogiq IT solutions
                        </h3>
                        <p className='font-normal text-white text-xs'>
                          Fullstack developer
                        </p>
                      </div>
                    </div>
                    <div className='company gap-2'>
                      <div className="logo">
                        <img src="" alt="" />
                      </div>
                      <div>
                        <h3 className='font-medium text-white text-sm'>
                          Maceloid Pharmaceuticals
                        </h3>
                        <p className='font-normal text-white text-xs'>
                          Chemical Engineer
                        </p>
                      </div>
                    </div>

                  </div>

                </Container>
              </div>
              <div className='flex max-md:flex-col lg:flex-col gap-5 col-span-2 w-full'>
                {/* <div className='flex flex-col gap-5'> */}
                <Container title={"Tech Stack"}>
                  <div className='tech'>
                    <h3 className='font-medium text-white text-xs leading-5'>Web Technologies</h3>
                    <div className='flex flex-wrap gap-1 mt-1'>
                      <Techbtn title={"JavaScript"} />
                      <Techbtn title={"ReactJS"} />
                      <Techbtn title={"NextJS"} />
                      <Techbtn title={"TypeScript"} />
                      <Techbtn title={"TailwindCSS"} />
                      <Techbtn title={"GSAP"} />
                      <Techbtn title={"Vite"} />
                    </div>
                  </div>
                  <div className='tech mt-1'>
                    <h3 className='font-medium text-white text-xs leading-5'>Backend Technologies & Tools</h3>
                    <div className='flex flex-wrap gap-1 mt-1'>
                      <Techbtn title={"NodeJS"} />
                      <Techbtn title={"ExpressJS"} />
                      <Techbtn title={"JWT"} />
                      <Techbtn title={"Git"} />
                      <Techbtn title={"GitHub"} />
                      <Techbtn title={"Docker"} />
                      <Techbtn title={"AWS"} />

                    </div>
                  </div>
                  <div className='tech mt-1'>
                    <h3 className='font-medium text-white text-xs leading-5'>Databases</h3>
                    <div className='flex flex-wrap gap-1 mt-1'>
                      <Techbtn title={"PostgreSQL"} />
                      <Techbtn title={"MongoDB"} />
                      <Techbtn title={"MySQL"} />
                      <Techbtn title={"Prisma ORM"} />
                    </div>
                  </div>


                </Container>
                <Container title={"CV"} subtitle={"Hire Me"}>
                  <div className='flex justify-center items-center h-full p-4'>
                    <a className='flex gap-1 bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-lg font-normal text-neutral-200 text-sm transition duration-300 ease-in-out' href="https://drive.google.com/file/d/1BGiQzSFL9Bag8vrVP1a70EM7lMjHxFCk/view" target='_blank'><svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2.2" stroke="currentColor" class="size-5">
                      <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                      <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                    </svg>
                      View Resume</a>
                  </div>
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
