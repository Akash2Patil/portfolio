import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Projects from '../page/Projects'
import Hero from '../page/Home'

const Routing = () => {
  return (
    <Routes>
        <Route path="/" element={<Hero/>} />
        <Route path="/projects" element={<Projects/>} />
    </Routes>
  )
}

export default Routing
