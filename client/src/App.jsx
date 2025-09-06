import React from 'react'
import Home from './Pages/Home'
import Course from './Pages/Course'
import {Routes,Route} from "react-router-dom"
import Contact from './Pages/Contact'
import About from './Pages/About'
import Signup from './components/Signup'

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
      <Route path="/signup" element={<Signup/>}/>

    </Routes>
    </>
  )
}

export default App
