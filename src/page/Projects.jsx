import React from 'react'
import Projectcard from '../component/Projectcard'
import Techbtn from '../component/Techbtn'
import Navbar from '../component/Navbar'

const Projects = () => {
  return (
    <>
    
    <div className='flex flex-col bg-black p-5 gap-6 min-h-screen'>
      <div className='flex flex-col justify-center items-center gap-2'>
        <div className='inline-block bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg px-3 py-1 text-white text-sm'>
        Project Showcase
        </div>
        <h2 className='text-white text-3xl sm:text-5xl font-bold tracking-tight'>Building Digital Solutions</h2>
        <p className='bg-clip-text bg-gradient-to-br from-white/70 via-40% via-white/70 to-white/30 w-full md:w-[35%] text-transparent lg:text-base/relaxed md:text-xl/relaxed xl:text-xl/relaxed text-center'>Transforming ideas into elegant digital solutions that make a difference.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-white mx-auto max-w-[800px]'>
          <Projectcard
            projecttitle={"ToDo App"}
            description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas"} vidurl={'asdas'}
            gitlink={'https://github.com/Akash2Patil/todolist'}
            sitelink={'https://todo13app.netlify.app/'}>
            <Techbtn title={"react js"}/>
            <Techbtn title={"tailwindcss"}/>
          </Projectcard>
          <Projectcard
            projecttitle={"Intellore"}
            description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas"} vidurl={'asdas'}
            gitlink={'asdasd'}
            sitelink={'asdasd'}>
            <Techbtn title={"react js"}/>
            <Techbtn title={"next js"}/>
            <Techbtn title={"vue js"}/>
          </Projectcard>
          <Projectcard
            projecttitle={"Intellore"}
            description={"lorem asasdas asdasdrwertwe werwerwer erwerewrer asdasdasdasdas"} vidurl={'asdas'}
            gitlink={'asdasd'}>
            <Techbtn title={"react js"}/>
            <Techbtn title={"next js"}/>
            <Techbtn title={"vue js"}/>
          </Projectcard>
         
        </div>

      </div>
    </div>
    </>
  )
}

export default Projects
