import { useEffect, useState, useRef } from 'react'
import CatalogCard from "../../components/catalog-card/CatalogCard"
import AdsHome from "../../components/AdsHome"
import { useSelector } from "react-redux"
import { useParams, Link } from "react-router-dom"
import Spinner from "../../components/Spinner"
import {Helmet} from "react-helmet"
import axios from "axios"
import {API_BASE} from "../../utils/config"

const Category = () => {
    const { movies, moviesLoadingStatus, category, moviesPages } = useSelector(store => store)

    const [dropdown, setDropdown] = useState(false)
    const dropBlock = useRef(null)

    const {name} = useParams()
    const [selectedUI, setSelectedUI] = useState('Barchasi')
    const [selectedUIFilter, setSelectedUIFilter] = useState('Yangilari')
    const [filteredMovies, setFilteredMovies] = useState([])

    const [paginationCount, setPaginationCount] = useState()
    const [paginationCountNow, setPaginationCountNow] = useState(1)

    const [loader, setLoader] = useState(false)

    const params = new URLSearchParams(document.location.search)

    window.addEventListener("click", (e) => {
        if (!e.target.classList.contains("drowdown-item")) {
            setDropdown(false)
        }
    })

    function filterMovies(type) {
        if (type === "likes") {
            const filtered = filteredMovies.sort((a, b) => b.likes - a.likes)
            setFilteredMovies(filtered)
        } 
        else if(type === "viewCount") {
            const filtered = filteredMovies.sort((a, b) => b.viewCount - a.viewCount)
            setFilteredMovies(filtered)
        } 
    }

    useEffect(() => {
        window.scroll(0, 0)
        setPaginationCount(moviesPages)
        if (params.get("page")) {
            setSelectedUI(name)
            paginator(Number(params.get("page")))
            if (name !== "Barchasi") {
                setSelectedUI(name)
                axios.get(`${API_BASE}/api/films/category/${category?.filter(i => i.name === name)[0]?._id}`).then(res => {
                    setPaginationCount(res.data.pages)
                })
            }
        } else {
            paginator(1)
            if (name !== "Barchasi") {
                setSelectedUI(name)
                setLoader(true)
                axios.get(`${API_BASE}/api/films/category/${category?.filter(i => i.name === name)[0]?._id}`).then(res => {
                    setPaginationCount(res.data.pages)
                    setFilteredMovies(res.data.data)
                    setLoader(false)
                })
            }
        }
    }, [name, movies, params.get("page")])

    const paginator = (page) => {
        setPaginationCountNow(page)
        if (page !== 1 || !page) {
            setLoader(true)
            if (name !== "Barchasi") {
                axios.get(`${API_BASE}/api/films/category/${category?.filter(i => i.name === name)[0]?._id}?page=${page}`).then(res => {
                    setFilteredMovies(res.data.data)
                    setLoader(false)
                })
            } else {
                axios.get(`${API_BASE}/api/films/?page=${page}`).then(res => {
                    setFilteredMovies(res.data.data)
                    setLoader(false)
                })
            }
        } else {
            setSelectedUI("Barchasi")
            const filtered = movies.filter(i => i)
            setFilteredMovies(filtered)
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
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i className="fa-solid fa-eye"></i> Ko'rishlar</p>
                                <p onClick={() => {
                                    filterMovies("likes")
                                    setSelectedUIFilter("Reyting")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i className="fa-solid fa-thumbs-up"></i> Reyting</p>
                            </div>}
                        </div>
                    </div>
                </div>
                <div className="flex flex-col items-center w-full">
                    {!loader ? <div className="relative w-full flex items-center flex-wrap justify-center">
                        {
                            moviesLoadingStatus !== "loading"
                            ?
                            filteredMovies.map((item) => 
                                <div className="flex justify-center" key={item._id}>
                                    <CatalogCard category={true} props={item}/>
                                </div>
                            )
                            :
                            <div className="flex flex-col items-center gap-3 py-8">
                                <i className="text-5xl text-yellow-500 fa-solid fa-film"></i>
                                <h1 className="text-2xl text-gray-200 font-semibold">{name === "Barchasi" ? "Xech qanday film" : name} mavjud emas :(</h1>
                            </div>
                        }
                        {
                            !filteredMovies.length
                            &&
                            <div className="flex flex-col items-center gap-3 py-8">
                                <i className="text-5xl text-yellow-500 fa-solid fa-film"></i>
                                <h1 className="text-xl m:text-2xl text-gray-200 font-semibold text-center">{name === "Barchasi" ? "Xech qanday film" : name} mavjud emas :(</h1>
                            </div>
                        }
                    </div> : <div className="px-2 h-96 flex justify-center items-center max-widther mx-auto mt-32 xl:px-0">
                        <Spinner/>
                    </div>}
                </div>
                <div className="flex justify-center items-center gap-2.5">
                    {paginationCount >= 2 && <Link onClick={() => paginator(paginationCount - 1)} to={`/category/${selectedUI}?page=${paginationCount - 1}`} 
                        className="mr-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#60;</Link>}
                    <div className="flex justify-center items-center gap-1.5">
                        {Array.from(Array(paginationCount), (e, i) => {
                            return <Link 
                                onClick={() => paginator(i + 1)} 
                                to={`/category/${selectedUI}?page=${i + 1}`}    
                                className={`${paginationCountNow === i + 1 && "bg-yellow-700 "} hover:bg-yellow-700 cursor-pointer bg-yellow-600 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200`}>{i + 1}
                        </Link>
                        })}
                    </div>
                    {paginationCountNow <= paginationCount && <Link onClick={() => paginator(paginationCount + 1)} to={`/category/${selectedUI}?page=${paginationCount + 1}`} 
                        className="mr-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#62;</Link>}
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