import { useState, useEffect } from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Watch from "./pages/watch/Watch"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import axios from "axios"

import { moviesFetching, moviesFetched, moviesFetchingError } from "./redux/actions"
import { useSelector, useDispatch } from "react-redux"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {   
    dispatch(moviesFetching())
    axios.get("https://movigo.onrender.com/api/movies/").then(res => {
      dispatch(moviesFetched(res.data.data))
    }).catch(() => dispatch(moviesFetchingError()))
  }, [])  

  return (
    <div className="App">
      <div className="wrapper-carousel mx-auto">
        <Header/>
      </div>

      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/category" element={<Category/>} />
        <Route path="/watch/:name" element={<Watch/>} />
      </Routes>

      <div>
        <Footer/>
      </div>
    </div>
  )
}

export default App