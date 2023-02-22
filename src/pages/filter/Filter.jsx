import { useEffect, useState, useRef } from 'react'
import CatalogCard from "../../components/catalog-card/CatalogCard"
import AdsHome from "../../components/AdsHome"
import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Spinner from "../../components/Spinner"
import {Helmet} from "react-helmet"
import axios from "axios"

const Filter = () => {

    const { movies, moviesLoadingStatus } = useSelector(store => store)
    const [filteredMovies, setFilteredMovies] = useState([])
    const params = new URLSearchParams(document.location.search)

    const {type} = useParams()

    window.addEventListener("click", (e) => {
        if (!e.target.classList.contains("drowdown-item")) {
            setDropdown(false)
        }
    })

    const [dropdown, setDropdown] = useState(false)
    const dropBlock = useRef(null)

    const [selectedUIFilter, setSelectedUIFilter] = useState('Sana')
    
    useEffect(() => {
        window.scroll(0, 0)
        if (params.get("id")) {
            axios.get(`https://movigo.onrender.com/api/films/${type}/${params.get('id')}`).then(res => {
                setFilteredMovies(res.data.data)
            })
        }
    }, [])

    function filterMovies(type) {
        if (type === "likes") {
            const filtered = filteredMovies.filter(i => i)
            setFilteredMovies(filtered)
        } 
        else if(type === "viewCount") {
            const filtered = filteredMovies.filter(i => i)
            setFilteredMovies(filtered)
        } 
        else if(type === "sana") {
            console.log(true);
            setFilteredMovies([...filteredMovies.reverse()])
        }
    }
        
    return (
        <div className="px-2 xl:px-0 wrapper-carousel">
            {moviesLoadingStatus !== "loading" ? <><div className="mt-32 mx-auto">
                <AdsHome />
            </div>
            <div className="mt-14">
                <div className="flex items-center justify-between gap-4 my-6">
                    <h1 className="text-3xl font-semibold w-fit">{type == "country" ? "Davlat" : "Janr"}: {params.get('id')}</h1>
                    <div>
                        <div onClick={() => setDropdown(prev => !prev)} className="relative cursor-pointer drowdown-item dropdown-top bg-gray-800 py-2 px-6 pr-5 ring-2 ring-gray-700 rounded-lg active:bg-gray-600 transition-all hover:bg-gray-700 flex items-center justify-center gap-3">{selectedUIFilter} <i className="fa-solid fa-angle-down"></i>
                            {dropdown && <div ref={dropBlock} className="absolute z-20 top-12 flex flex-col gap-1 right-0 bg-gray-700 px-2 py-3 rounded-lg">
                                <p onClick={() => {
                                    filterMovies("viewCount")
                                    setSelectedUIFilter("Ko'rishlar")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i className="fa-solid fa-eye"></i> Ko'rishlar</p>
                                <p onClick={() => {
                                    filterMovies("likes")
                                    setSelectedUIFilter("Reyting")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i class="fa-solid fa-thumbs-up"></i> Reyting</p>
                                <p onClick={() => {
                                    filterMovies("sana")
                                    setSelectedUIFilter("Sana")
                                }} className="drowdown-item min-w-20 py-1.5 px-5 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4 flex items-center justify-start gap-2"><i class="fa-solid fa-clock"></i>  Sana</p>
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
                <div className="mt-20 block">
                    <AdsHome/>
                </div>
            </div></> : <div className="px-2 h-96 flex justify-center items-center max-widther mx-auto mt-32 xl:px-0">
                <Spinner/>
            </div>}
        </div>
    )
}

export default Filter