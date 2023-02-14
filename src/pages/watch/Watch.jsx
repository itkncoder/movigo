import AdsHome from "../../components/AdsHome"
import ReactPlayer from 'react-player';
import { Link, useParams } from "react-router-dom"
import { useState, useEffect, lazy } from "react"

import { useSelector, useDispatch } from "react-redux"

import axios from "axios"

import Spinner from "../../components/Spinner"

import Helmet from "react-helmet"

const Watch = () => {

    const dispatch = useDispatch()

    const [ tab, setTab ] = useState(true)

    const { name } = useParams()

    const { movies, moviesLoadingStatus } = useSelector(store => store)
    const [ watchingMovieItem, setWatching ] = useState()

    useEffect(() => {
        window.scroll(0, 0)
        setWatching(movies.filter((i) => name.toString() === i.title)[0])
    }, [ movies ])

    useEffect(() => {
        axios.get(`https://movigo.onrender.com/api/movies/${movies.filter((i) => name.toString() === i.title)[0]?._id}`)
    }, [])

    return (
        <>
            <Helmet>
                <title>Movigo - {`${watchingMovieItem?.title}`}</title>
                <meta name="title" content={`${watchingMovieItem?.title}`}/>
                <meta name="description" content={`Movigo - ${watchingMovieItem?.description}`}/>
                <meta name="keywords" content="movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="English"/>
                <meta name="author" content="Movigo"/>
            </Helmet>
            {moviesLoadingStatus !== "loading" ? <div className="px-2 max-widther mx-auto mt-32 xl:px-0">
                <div>
                    <div>
                        <div className="mb-2 md:mb-4 mt-6">
                            <h1 className="poppins my-3 text-3xl font-semibold">{watchingMovieItem?.title}</h1>
                        </div>
                        <div className="flex items-start justify-start gap-8 mt-8 flex-col md:flex-row">
                            <div className="shadow-gray-900 rounded-md py-2 w-full md:w-fit flex flex-col justify-center items-center">
                                <img src={watchingMovieItem?.poster} alt="movie" className="flex items-center w-72 md:items-start rounded-md h-96 object-cover" />
                            </div>
                            <div className="flex flex-col gap-5">
                                <table>
                                    <tbody className="flex justify-start flex-col mt-8 gap-2">
                                        <tr>
                                            <td className="w-28 text-gray-400 font-semibold text-lg">Yil:</td>
                                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><Link to="./">{watchingMovieItem?.year}</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="w-28 text-gray-400 font-semibold text-lg">Davlat:</td>
                                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><Link to="./">{watchingMovieItem?.country}</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="w-28 text-gray-400 font-semibold text-lg">Janr:</td>
                                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold hover:text-gray-300"><Link to="./">{watchingMovieItem?.genres}</Link></td>
                                        </tr>
                                        <tr>
                                            <td className="w-28 text-gray-400 font-semibold text-lg">Vaqt:</td>
                                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">{watchingMovieItem?.duration}</td>
                                        </tr>
                                        <tr>
                                            <td className="w-28 text-gray-400 font-semibold text-lg">Til:</td>
                                            <td className="bg-gray-800 rounded-md py-1 px-3 font-semibold">{watchingMovieItem?.language}</td>
                                        </tr>
                                    </tbody>
                                </table>
                                <div>
                                    <p className="text-gray-300 text-sm max-w-2xl">{watchingMovieItem?.description}</p>
                                </div>
                            </div>
                        </div>
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
                    {tab ? 
                    <ReactPlayer
                        className="video"
                        url={watchingMovieItem?.video}
                        width="100%"
                        height="90vh"
                        controls
                        light="https://res.cloudinary.com/file-upload/image/upload/v1676240802/Group_1_loswzg.png"
                    /> 
                    : 
                    <ReactPlayer
                        className="video"
                        url={watchingMovieItem?.trailer}
                        width="100%"
                        height="90vh"
                        controls
                    /> 
                    }
                    <div className="py-3 flex items-center justify-start gap-6 my-2 bg-gray-800 rounded-lg px-5">
                        <div className="flex items-center justify-start gap-2">
                            <i className="fa-solid fa-eye cursor-pointer bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl cursor-pointer transition-all hover:text-gray-200 text-gray-100"></i>
                            <p className="text-gray-200">{watchingMovieItem?.viewCount}</p>
                        </div>
                        <div className="flex items-center justify-start gap-2">
                            <i className="bg-[#151A20] w-10 h-10 flex justify-center items-center rounded-md text-xl fa-solid fa-thumbs-up cursor-pointer hover:text-gray-200 text-gray-100 active:text-yellow-500 tooltip relative hover:ring-2 ring-gray-700">
                                <p className="text-gray-200 absolute text-sm opacity-0 transition-all duration-300 mb-0 border-gray-700 border">{watchingMovieItem?.likes}</p>
                            </i>
                        </div>
                    </div>
                </div>
                <div className="mt-10">
                    <AdsHome/>
                </div>
            </div> : <div className="px-2 h-96 flex justify-center items-center max-widther mx-auto mt-32 xl:px-0">
                <Spinner/>
            </div>}
        </>
    )
}

export default Watch