import React from 'react'
import Home from './Pages/Home'
import Course from './Pages/Course'
import {Routes,Route} from "react-router-dom"
import Contact from './Pages/Contact'
import About from './Pages/About'

function App() {
  return (
    <>
    {/* <Home/>
    <Course/> */}
    <Routes>
      <Route path="/" element={<Home/>}/>
      <Route path="/course" element={<Course/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/about" element={<About/>}/>

    </Routes>
    </>
  )
}

export default App
