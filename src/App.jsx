import { useState } from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Watch from "./pages/watch/Watch"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

function App() {
  return (
    <div className="App">
      <div className="wrapper-carousel mx-auto">
        <Header/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/watch" element={<Watch/>} />
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App