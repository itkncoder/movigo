import AdsHome from "../../components/AdsHome"
import ReactPlayer from 'react-player';
import { useParams } from "react-router-dom"
import { useState, useEffect, useRef } from "react"

import { useSelector } from "react-redux"

import axios from "axios"

import Spinner from "../../components/Spinner"

import {Helmet} from "react-helmet";
import WatchInfo from "./WatchInfo";

import {API_BASE} from "../../utils/config"

const Watch = () => {

    const [ tab, setTab ] = useState(true)

    const likesBtn = useRef(null)

    const video = useRef(null)

    const { name } = useParams()

    const { moviesLoadingStatus } = useSelector(store => store)
    const [ watchingMovieItem, setWatching ] = useState()

    const [loader, setLoader] = useState(true)

    const params = new URLSearchParams(document.location.search)

    const [likes, setLikes] = useState("")

    useEffect(() => {
        window.scroll(0, 0)
        axios.get(`${API_BASE}/api/films/${params.get("id")}`).then(res => {
            setLikes(res.data.data.likes)
            setWatching(res.data.data)
            setLoader(false)
            setTimeout(() => likesBtn.current.addEventListener("click", like), 1000)
        }).catch(err => setLoader("Error"))
    }, [])

    const like = () => {
        setLikes(prev => prev + 1)
        axios.post(`${API_BASE}/api/films/${params.get('id')}/like`, true)
        likesBtn.current.removeEventListener('click', like)
        likesBtn.current.classList.add("bg-gray-700")
        likesBtn.current.classList.add("ring-gray-700")
    }

    return (
        <>
            <Helmet>
                <title>{`Movigo - ${watchingMovieItem?.title || ""}`}</title>
                <meta name="title" content={`Movigo - ${watchingMovieItem?.title}`}/>
                <meta name="description" content={`Movigo - ${watchingMovieItem?.description}`}/>
                <meta name="keywords" content={`movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar, ${watchingMovieItem?.title}`}/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="Movigo"/>

                <meta property="og:title" content={`Movigo - ${watchingMovieItem?.title || ""}`} />
                <meta property="og:site_name" content={`Movigo - ${watchingMovieItem?.title || ""}`}/>
                <meta property="og:description" content="Movigo - online kinolar, tarjima qilingan holda va HD sifatda, yuklab olish imkoniyati va ko'plab kinolar" />
                <meta property="og:image" content="../../assets/logo.png" />
            </Helmet>
     
            {!loader ? 
            <div className="px-2 max-widther mx-auto mt-32 xl:px-0">
                <div>
                    <div>
                        <div className="mb-2 md:mb-4 mt-6">
                            <h1 className="poppins my-3 text-4xl font-semibold">{watchingMovieItem?.title}</h1>
                        </div>
                        <WatchInfo watchingMovieItem={watchingMovieItem} />
                        <div className="mt-4">
                            <a type="download" href={watchingMovieItem?.video} className="hover:bg-gray-700 px-6 cursor-pointer py-2.5 bg-gray-800 rounded-lg ring-2 active:bg-gray-600 transition-all font-semibold ring-gray-700">Yuklab olish <i className="ml-2 fa-solid fa-download"></i></a>
                        </div>
                    </div>
                </div>
                <div className="mt-6">
                    <div className="my-10">
                        <AdsHome/>
                    </div>
                    <div className="flex items-center justify-start gap-3">
                        <div onClick={() => setTab(true)} className={tab ? "py-2 px-5 bg-gray-800 rounded-t-md hover:bg-gray-800 cursor-pointer" : "py-2 px-5 bg-gray-700 rounded-t-lg hover:ring-2 ring-gray-600 cursor-pointer"}>
                            <p className="sm:text-lg font-semibold">Filmni ko'rish</p>
                        </div>
                        <div onClick={() => setTab(false)} className={!tab ? "py-2 px-5 bg-gray-800 rounded-t-md hover:bg-gray-800 cursor-pointer" : "py-2 px-5 bg-gray-700 rounded-t-lg hover:ring-2 ring-gray-600 cursor-pointer"}>
                            <p className="sm:text-lg font-semibold">Treylerni ko'rish</p>
                        </div>
                    </div>
                    {
                        <>
                            {
                                tab ? 
                                <>
                                    {watchingMovieItem?.video.toString().includes("embed")
                                    ?
                                    <>
                                        <iframe className="video" style={{width: "100%", height: "660px"}} src={watchingMovieItem?.video} frameborder="0" allowfullscreen></iframe>
                                    </>
                                    :
                                    <ReactPlayer
                                        ref={video}
                                        className="video"
                                        url={watchingMovieItem?.video}
                                        width="100%"
                                        height="90vh"
                                        controls
                                        light="https://res.cloudinary.com/file-upload/image/upload/v1676240802/Group_1_loswzg.png"
                                    /> }
                                </>
                                : 
                                <ReactPlayer
                                    className="video"
                                    url={watchingMovieItem?.trailer}
                                    width="100%"
                                    height="90vh"
                                    controls
                                /> 
                            }
                        </>
                    }
                    <div className="py-3 flex items-center justify-start gap-6 my-2 bg-gray-800 rounded-lg px-5">
                        <div className="flex items-center justify-start gap-2">
                            <i className="fa-solid fa-eye cursor-pointer bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl transition-all hover:text-gray-200 text-gray-100"></i>
                            <p className="text-gray-200">{watchingMovieItem?.viewCount}</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <i ref={likesBtn} className="bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl fa-solid fa-thumbs-up cursor-pointer hover:text-gray-200 text-gray-100 active:text-yellow-500 tooltip relative hover:ring-2 ring-gray-700">
                                <p className="text-gray-200 absolute text-sm opacity-0 transition-all duration-300 mb-0 border-gray-700 border">{likes}</p>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <AdsHome/>
                </div>
            </div>
            :            
            <div className="px-2 h-96 flex justify-center items-center max-widther mx-auto mt-32 xl:px-0">
                <Spinner/>
            </div>
            }
        </>
    )
}

export default Watch