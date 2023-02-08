import { useState } from 'react'
import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import {Routes, Route} from "react-router-dom"
import Footer from "./components/footer"
import Header from "./components/header"

function App() {
  return (
    <div className="App">
      <div className="wrapper-carousel mx-auto">
        <Header/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App