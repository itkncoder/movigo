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
import { useDispatch } from "react-redux"

import Adminpanel from "./pages/adminpanel/Adminpanel"

import {API_BASE} from "./utils/config"

function App() {

  const dispatch = useDispatch()

  useEffect(() => {   

    dispatch(categoryFetching())
    axios.get(`${API_BASE}/api/category/`).then(res => {
      dispatch(categoryFetched(res.data.data))
    }).catch(() => dispatch(categoryFetchingError()))

    dispatch(sliderFetching())
    axios.get(`${API_BASE}/api/slider/getSliders`).then(res => {
      dispatch(sliderFetched(res.data.data))
    }).catch(() => dispatch(sliderFetchingError()))

    dispatch(moviesFetching())
    axios.get(`${API_BASE}/api/films`).then(res => {
      dispatch(moviesFetched(res.data.data))
    }).catch(() => dispatch(moviesFetchingError()))

    dispatch(moviesByCategory([
      {
        "_id": "63f7e64e07880ee3a92705a8",
        "title": "3 Premyera",
        "description": "Qichqiriq Premyera Uzbek tilida",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://ice-eu-53588.icedrive.io/download?p=AsHHEOXr4AKL.EXTM3C5l8BPqY9_2xqXQPRV7mmVJttmokb2xp4vsjrMizfoguvy6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9QzjNfl0mAuRUc0ouFWqsrRIhqnpwI5VSQ_SDmU_kzwSt4aFf6KnqyqvdGZEs8CP5nm9pfTzXqRRKmtc13tindi5kfzCeYtDonO9hsEg2446FzfVesFvqidIUtfmduD79g-",
        "category": "63e4c43afbc11b6b68eb49bb",
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/4db5c587-78c1-4ac0-ba93-adabc4d08a72/300x450",
        "year": 2022,
        "genres": "Qo'rqinchili",
        "likes": 5,
        "trailer": "https://youtu.be/beToTslH17s",
        "age": 18,
        "viewCount": 1,
        "duration": "107",
        "createdAt": "2023-02-23T22:18:54.613Z",
        "updatedAt": "2023-02-26T14:50:39.457Z",
        "__v": 0
      }
    ]))

    dispatch(moviesByCategory([
      {
        "_id": "63f7e64e07880ee3a92705a8",
        "title": "1 Premyera",
        "description": "Qichqiriq Premyera Uzbek tilida",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://ice-eu-53588.icedrive.io/download?p=AsHHEOXr4AKL.EXTM3C5l8BPqY9_2xqXQPRV7mmVJttmokb2xp4vsjrMizfoguvy6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9QzjNfl0mAuRUc0ouFWqsrRIhqnpwI5VSQ_SDmU_kzwSt4aFf6KnqyqvdGZEs8CP5nm9pfTzXqRRKmtc13tindi5kfzCeYtDonO9hsEg2446FzfVesFvqidIUtfmduD79g-",
        "category": "63e4c43afbc11b6b68eb49bb",
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/4db5c587-78c1-4ac0-ba93-adabc4d08a72/300x450",
        "year": 2022,
        "genres": "Qo'rqinchili",
        "likes": 5,
        "trailer": "https://youtu.be/beToTslH17s",
        "age": 18,
        "viewCount": 1,
        "duration": "107",
        "createdAt": "2023-02-23T22:18:54.613Z",
        "updatedAt": "2023-02-26T14:50:39.457Z",
        "__v": 0
      }
    ]))

    dispatch(moviesByCategory([
      {
        "_id": "63f7e64e07880ee3a92705a8",
        "title": "2 Premyera",
        "description": "Qichqiriq Premyera Uzbek tilida",
        "language": "UZ",
        "country": "AQSH",
        "video": "https://ice-eu-53588.icedrive.io/download?p=AsHHEOXr4AKL.EXTM3C5l8BPqY9_2xqXQPRV7mmVJttmokb2xp4vsjrMizfoguvy6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9QzjNfl0mAuRUc0ouFWqsrRIhqnpwI5VSQ_SDmU_kzwSt4aFf6KnqyqvdGZEs8CP5nm9pfTzXqRRKmtc13tindi5kfzCeYtDonO9hsEg2446FzfVesFvqidIUtfmduD79g-",
        "category": "63e4c43afbc11b6b68eb49bb",
        "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/4db5c587-78c1-4ac0-ba93-adabc4d08a72/300x450",
        "year": 2022,
        "genres": "Qo'rqinchili",
        "likes": 5,
        "trailer": "https://youtu.be/beToTslH17s",
        "age": 18,
        "viewCount": 1,
        "duration": "107",
        "createdAt": "2023-02-23T22:18:54.613Z",
        "updatedAt": "2023-02-26T14:50:39.457Z",
        "__v": 0
      }
    ]))

    // axios.get(`${API_BASE}/api/films/${category.filter(i => i.name === name)[0]?._id}`).then(res => {
      //     dispatch(moviesByCategory([
      //         {
      //             "_id": "63f7e64e07880ee3a92705a8",
      //             "title": "Qichqiriq Premyera",
      //             "description": "Qichqiriq Premyera Uzbek tilida",
      //             "language": "UZ",
      //             "country": "AQSH",
      //             "video": "https://ice-eu-53588.icedrive.io/download?p=AsHHEOXr4AKL.EXTM3C5l8BPqY9_2xqXQPRV7mmVJttmokb2xp4vsjrMizfoguvy6fxxG9FWl3OMJ.a88fJBiLRptm1_RC0sSEmZdHYsf9QzjNfl0mAuRUc0ouFWqsrRIhqnpwI5VSQ_SDmU_kzwSt4aFf6KnqyqvdGZEs8CP5nm9pfTzXqRRKmtc13tindi5kfzCeYtDonO9hsEg2446FzfVesFvqidIUtfmduD79g-",
      //             "category": "63e4c43afbc11b6b68eb49bb",
      //             "poster": "https://avatars.mds.yandex.net/get-kinopoisk-image/6201401/4db5c587-78c1-4ac0-ba93-adabc4d08a72/300x450",
      //             "year": 2022,
      //             "genres": "Qo'rqinchili",
      //             "likes": 5,
      //             "trailer": "https://youtu.be/beToTslH17s",
      //             "age": 18,
      //             "viewCount": 1,
      //             "duration": "107",
      //             "createdAt": "2023-02-23T22:18:54.613Z",
      //             "updatedAt": "2023-02-26T14:50:39.457Z",
      //             "__v": 0
      //         }
      //     ]))
    // })
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