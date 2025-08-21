import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../page/Projects'
import Home from '../page/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/projects" element={<Projects/>} />
    </Routes>
  )
}

export default Routing
