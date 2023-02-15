import { useState, useEffect } from 'react'
import {Routes, Route, Link} from "react-router-dom"

import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Watch from "./pages/watch/Watch"
import Add from "./pages/adminpanel/Add"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import axios from "axios"

import { moviesFetching, moviesFetched, moviesFetchingError } from "./redux/actions"
import { useSelector, useDispatch } from "react-redux"

import Adminpanel from "./pages/adminpanel/Adminpanel"

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
          <Route path="/admin/adminpanelmovigo/add/:name" element={<Add/>} />
          <Route path="/admin/adminpanelmovigo/" element={<Adminpanel/>} />
          <Route path="/watch/:name" element={<Watch/>} />
          <Route path="*" element={
            <div className="h-96 flex flex-col items-center justify-center mt-32">
              <h1 className="text-2xl font-semibold">Bunday sahifa / film mavjud emas :(</h1>
              <Link className="mt-4 font-semibold px-5 py-2 rounded-lg bg-gray-800 ring-2 ring-gray-700 active:bg-gray-600 transition-all" to="/">Bosh sahifaga qaytish</Link>
            </div>
          } />
        </Routes>
  
        <div>
          <Footer/>
        </div>
      </div>
    )
  }

export default App