import React from 'react'
import "./input.css"
import { Routes, Route } from "react-router-dom"

// Page
import HomePage from './pages/HomePage'
import ProjectPage from './pages/ProjectPage'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
      <Route path='/ProjectPage' element={<ProjectPage />} />
    </Routes>
    </div>
  )
}

export default App
