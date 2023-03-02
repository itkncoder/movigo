import { useEffect } from 'react'
import {Routes, Route} from "react-router-dom"

import Home from "./pages/home/Home"
import Category from "./pages/category/Category"
import Watch from "./pages/watch/Watch"
import Add from "./pages/adminpanel/Add"
import Error from "./pages/404/error404"
import Donate from "./pages/donate/Donate"
import Filter from "./pages/filter/Filter"
import Slider from "./pages/adminpanel/Slider"

import Footer from "./components/footer/Footer"
import Header from "./components/header/Header"

import axios from "axios"

import { moviesFetching, moviesFetched, moviesFetchingError, categoryFetching, categoryFetched, categoryFetchingError, sliderFetching, sliderFetched, sliderFetchingError, moviesByCategory } from "./redux/actions"
import { useSelector, useDispatch } from "react-redux"

import Adminpanel from "./pages/adminpanel/Adminpanel"

import {API_BASE} from "./utils/config"

function App() {

    const dispatch = useDispatch()

    const { category } = useSelector(state => state)

    useEffect(() => {   

        dispatch(sliderFetching())
        axios.get(`${API_BASE}/api/slider/getSliders`).then(res => {
        dispatch(sliderFetched(res.data.data))
        })
        .catch(() => dispatch(sliderFetchingError()))

        dispatch(moviesFetching())
        axios.get(`${API_BASE}/api/films`).then(res => {
        dispatch(moviesFetched(res.data))
        })
        .catch(() => dispatch(moviesFetchingError()))

        categoryAndSwiper()

    }, [])

    async function categoryAndSwiper() {

        await dispatch(categoryFetching())
        await axios.get(`${API_BASE}/api/category/`).then(res => {
            dispatch(categoryFetched(res.data.data))
        }).catch(() => dispatch(categoryFetchingError()))

        await axios.get(`${API_BASE}/api/films/category/63e4c43afbc11b6b68eb49bb`).then(res => {
            dispatch(moviesByCategory(res.data.data))
        }).catch(() => dispatch(moviesByCategory([])))
        await axios.get(`${API_BASE}/api/films/category/63e4c448fbc11b6b68eb49bd`).then(res => {
            dispatch(moviesByCategory(res.data.data))
        }).catch(() => dispatch(moviesByCategory([])))
        await axios.get(`${API_BASE}/api/films/category/63e4c452fbc11b6b68eb49bf`).then(res => {
            dispatch(moviesByCategory(res.data.data))
        }).catch(() => dispatch(moviesByCategory([])))
    }

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
                <Route path="/admin/adminpanelmovigo/slider" element={<Slider/>} />
                <Route path="/filter/:type" element={<Filter/>} />
                <Route path="*" element={<Error/>} />
            </Routes>
    
            <div>
                <Footer/>
            </div>
      </div>
    )
  }

export default App