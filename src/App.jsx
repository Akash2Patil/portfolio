import React from 'react'
import Projects from './page/Projects'
import Home from './page/Home'
import Routing from './utils/Routing'
import Navbar from './component/Navbar'

const App = () => {
  return (
    <>
    <div className='w-full bg-black flex justify-center'>
    <div className='w-full max-w-6xl'>
    <Navbar/>
    <Routing/>
    </div>
    </div>
    </>
  )
}

export default App
