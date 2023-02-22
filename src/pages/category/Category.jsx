import { useEffect, useState, useRef } from 'react'
import CatalogCard from "../../components/catalog-card/CatalogCard"
import AdsHome from "../../components/AdsHome"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Spinner from "../../components/Spinner"
import {Helmet} from "react-helmet"
import axios from "axios"

const Category = () => {
    const { movies, moviesLoadingStatus, category } = useSelector(store => store)

    const [dropdown, setDropdown] = useState(false)
    const dropBlock = useRef(null)

    const {name} = useParams()
    const [selectedUI, setSelectedUI] = useState('Hammasi')
    const [selectedUIFilter, setSelectedUIFilter] = useState('Sana')
    const [filteredMovies, setFilteredMovies] = useState([])

    window.addEventListener("click", (e) => {
        if (!e.target.classList.contains("drowdown-item")) {
            setDropdown(false)
        }
    })

    useEffect(() => {
        window.scroll(0, 0)
        if (name) {
            setSelectedUI(name)
            const filtered = movies.filter(i => i.category?.name == name)
            setFilteredMovies(filtered)
        }
    }, [name])

    function filterMovies(type) {
        if (type === "likes") {
            const filtered = filteredMovies.sort((a,b) => b.likes - a.likes)
            setFilteredMovies(filtered)
        } 
        else if(type === "viewCount") {
            const filtered = filteredMovies.sort((a,b) => b.viewCount - a.viewCount)
            setFilteredMovies(filtered)
        } 
        else if(type === "sana") {
            const reversed = filteredMovies.reverse()
            setFilteredMovies(reversed)
        }
    }

    return (
        <div className="px-2 xl:px-0 wrapper-carousel">
            <Helmet>
                <title>{`Movigo - Category`}</title>
                <meta name="title" content="Movigo - Category"/>
                <meta name="description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar"/>
                <meta name="keywords" content="movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="Movigo"/>

                <meta property="og:title" content="Movigo" />
                <meta property="og:site_name" content="Movigo"/>
                <meta property="og:description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar" />
                <meta property="og:image" content="../../assets/logo.png" />
            </Helmet>
            {moviesLoadingStatus !== "loading" ? <><div className="mt-32 mx-auto">
                <AdsHome />
            </div>
            <div className="mt-14">
                <div className="flex items-center justify-between gap-4 my-6">
                    <h1 className="text-3xl font-semibold w-fit uppercase">{selectedUI}</h1>
                    <div className="flex items-center justify-end gap-4">
                        <div onClick={() => setDropdown(prev => !prev)} className="relative cursor-pointer drowdown-item dropdown-top bg-gray-800 py-2 px-6 pr-5 ring-2 ring-gray-700 rounded-lg active:bg-gray-600 transition-all hover:bg-gray-700 flex items-center justify-center gap-3">{selectedUIFilter} <i className="fa-solid fa-angle-down"></i>
                            {dropdown && <div ref={dropBlock} className="absolute z-20 top-12 flex flex-col gap-1 right-0 bg-gray-700 px-2 py-3 rounded-lg">
                                <p onClick={() => {
                                    filterMovies("viewCount")
                                    setSelectedUIFilter("Ko'rishlar")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4">Ko'rishlar</p>
                                <p onClick={() => {
                                    filterMovies("likes")
                                    setSelectedUIFilter("Reyting")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4">Reyting</p>
                                <p onClick={() => {
                                    filterMovies("sana")
                                    setSelectedUIFilter("Sana")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4">Sana</p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    <div className="relative w-full flex items-center flex-wrap justify-center">
                        {filteredMovies.map((item) => 
                            <div className="flex justify-center" key={item._id}>
                                <CatalogCard category={true} props={item}/>
                            </div>
                        )}
                    </div>
                </div>
                <div className="flex justify-center items-center gap-1.5">
                    <p className="mr-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#60;</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">1</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">2</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">3</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">4</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">5</p>
                    <p className="ml-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#62;</p>
                </div>
                <div className="mt-20 block">
                    <AdsHome/>
                </div>
            </div></> : <div className="px-2 h-96 flex justify-center items-center max-widther mx-auto mt-32 xl:px-0">
                <Spinner/>
            </div>}
        </div>
    )
}

export default Category