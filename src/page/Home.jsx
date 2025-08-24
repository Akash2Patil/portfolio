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
                <Container title={"Status"} subtitle={<><span className="relative flex size-[5px]">
                  <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75"></span>
                  <span className="relative inline-flex size-[5px] rounded-full bg-green-500"></span>
                </span></>}>
                  <p className='font-medium text-white text-xs leading-5'>Available for</p>
                  <ul className='font-medium text-neutral-500 text-xs leading-5'>
                    <li>Freelance</li>
                    <li>Fulltime</li>
                    <li>contract</li>
                  </ul>
                </Container>
              </div>

              <div className='w-[47%] sm:w-full sm:col-span-1 sm:row-span-1 h-40 sm:max-h-40'>
                <Container title={"CV"} subtitle={"Hire Me"}>
                  <div className='flex justify-center items-center h-full'>
                    <a className='bg-neutral-700 hover:bg-neutral-600 px-4 py-2 rounded-lg font-normal text-neutral-200 text-sm transition duration-300 ease-in-out' href="">View Resume</a>
                  </div>
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
                      description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas"} vidurl={'asdas'}
                      gitlink={'https://github.com/Akash2Patil/todolist'}
                      sitelink={'https://todo13app.netlify.app/'}>
                      <Techbtn title={"react js"} />
                      <Techbtn title={"tailwindcss"} />
                    </Projectcard>
                    <Projectcard className={"hidden sm:block"}
                      projecttitle={"Intellore"}
                      description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas"} vidurl={'asdas'}
                      gitlink={'asdasd'}
                      sitelink={'asdasd'}>
                      <Techbtn title={"react js"} />
                      <Techbtn title={"next js"} />
                      <Techbtn title={"vue js"} />
                    </Projectcard>
                  </div>
                </Container>
                <div className='bottom-[0px] z-10 absolute bg-gradient-to-t from-[#1E1E1E] via-[#1e1e1eef] to-transparent w-[99%] h-32 transition-all translate-x-1 duration-200 ease-in'>
                  <a className='bottom-[20px] left-1/2 z-[11] absolute flex justify-center items-center gap-1 bg-neutral-700/40 p-1 px-2 border rounded-full text-white text-xs -translate-x-1/2' href="">Show more</a>
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
                <Container title={"CV"}>
                  <p>this isthe socils icons</p>
                </Container>
                {/* </div> */}
              </div>



            </div>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Home
