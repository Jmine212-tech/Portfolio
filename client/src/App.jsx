import React from 'react'
import "./input.css"
import { Routes, Route } from "react-router-dom"

// Page
import HomePage from './pages/HomePage'

const App = () => {
  return (
    <div>
    <Routes>
      <Route path='/' element={<HomePage />} />
    </Routes>
    </div>
  )
}

export default App
