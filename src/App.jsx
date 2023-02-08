import { useState } from 'react'
import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import {Routes, Route} from "react-router-dom"

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>
    </div>
  )
}

export default App