import React from 'react'
import Projectcard from '../component/Projectcard'
import Techbtn from '../component/Techbtn'

const Projects = () => {
  return (
    <>
    
    <div className='flex flex-col bg-black p-5 gap-6 min-h-screen'>
      <div className='flex flex-col justify-center items-center gap-2'>
        {/* <div className='inline-block bg-gradient-to-r from-gray-700 to-gray-900 rounded-lg px-3 py-1 text-white text-sm'>
        My Project
        </div> */}
        <h2 className='text-white text-2xl sm:text-5xl font-bold tracking-tight'>My Projects</h2>
        <p className='text-lg text-zinc-400 leading-relaxed max-w-3xl'>Showcasing my personal and professional projects built with React, Tailwind, and modern web technologies. Each project highlights my skills in creating responsive, user-friendly, and performance-optimized applications.</p>

        <div className='grid grid-cols-1 sm:grid-cols-2 gap-3 text-white mx-auto max-w-[800px] mt-3'>
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
