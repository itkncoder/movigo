import { useState, useEffect } from 'react'
import {Routes, Route, Link} from "react-router-dom"

import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Watch from "./pages/watch/Watch"
import Add from "./pages/adminpanel/Add"
import Error from "./pages/404/error404"
import Donate from "./pages/donate/Donate"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import axios from "axios"

import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError } from "./redux/actions"
import { useSelector, useDispatch } from "react-redux"

import Adminpanel from "./pages/adminpanel/Adminpanel"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {   
    dispatch(moviesFetching())

    axios.get("https://movigo.onrender.com/api/movies/").then(res => {
      dispatch(moviesFetched(res.data.data))
    }).catch(() => dispatch(moviesFetchingError()))

    dispatch(categoryFetching())

    axios.get("https://movigo.onrender.com/api/category/").then(res => {
      dispatch(categoryFetched(res.data.data))
    }).catch(() => dispatch(categoryFetchingError()))
  }, [])  

    return (
      <div className="App">
        <div className="wrapper-carousel mx-auto">
          <Header/>
        </div>
  
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/category/:name" element={<Category/>} />
          <Route path="/admin/adminpanelmovigo/add/:name" element={<Add/>} />
          <Route path="/admin/adminpanelmovigo/" element={<Adminpanel/>} />
          <Route path="/watch/:name" element={<Watch/>} />
          <Route path="/donate" element={<Donate/>} />
          <Route path="*" element={<Error/>} />
        </Routes>
  
        <div>
          <Footer/>
        </div>
      </div>
    )
  }

export default App