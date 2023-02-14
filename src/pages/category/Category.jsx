import { useMemo, useEffect, useState } from 'react'
import CatalogCard from "../../components/catalog-card/CatalogCard"
import AdsHome from "../../components/AdsHome"
import { useSelector } from "react-redux"

import Spinner from "../../components/Spinner"

import Helmet from "react-helmet"

const Category = () => {
    useEffect(() => {
        window.scroll(0, 0)
    }, [])

    const [ dropdown, setDropdown ] = useState(false)

    const { movies, moviesLoadingStatus } = useSelector(store => store)

    window.addEventListener("click", (e) => {
        if (!e.target.classList.contains("drowdown-item")) {
            setDropdown(false)
        }
    })

    return (
        <div className="px-2 xl:px-0 wrapper-carousel">
            <Helmet>
                <meta name="title" content="Movigo - category"/>
                <meta name="description" content="Movigo - category"/>
                <meta name="keywords" content="movigo, online, kino, movi go, muvigo, muvi, kinoteatr, online kino, filmlar, multfilmlar, anime, yangi kinolar, yangi seriallar, seriallar"/>
                <meta name="robots" content="index, follow"/>
                <meta http-equiv="Content-Type" content="text/html; charset=utf-8"/>
                <meta name="language" content="Uzbek"/>
                <meta name="author" content="Movigo"/>

                <meta property="og:title" content="Movigo - Categoryes" />
                <meta property="og:site_name" content="Movigo"/>
                <meta property="og:description" content="Movigo - Category" />

                <title>Movigo - category</title>
            </Helmet>
            {moviesLoadingStatus !== "loading" ? <><div className="mt-32 mx-auto">
                <AdsHome />
            </div>
            <div className="mt-14 mx-auto">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="text-3xl font-semibold mt-5 mb-10 w-fit">FILMLAR</h1>
                    <div>
                        <div onClick={() => setDropdown(prev => !prev)} className="relative cursor-pointer drowdown-item bg-gray-800 py-2 pl-8 ring-2 ring-gray-700 pr-5 rounded-lg active:bg-gray-600 transition-all hover:bg-gray-700 flex items-center justify-center gap-3">Select<i onClick={() => setDropdown(prev => !prev)} className="fa-solid fa-angle-down"></i>
                            {dropdown ? <div className="absolute z-20 flex flex-col gap-1 left-0 top-12 bg-gray-700 px-2 py-3 rounded-lg">
                                <p className="drowdown-item min-w-20 py-1.5 px-8 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4">Hello</p>
                                <p className="drowdown-item min-w-20 py-1.5 px-8 bg-gray-800 rounded-md hover:ring-2 ring-gray-600 active:ring-4">World</p>
                            </div> : ''}
                        </div>
                    </div>
                </div>
                <div className="relative flex items-center flex-wrap gap-4 justify-center lg:justify-evenly">
                    {movies.map((item) => 
                        <CatalogCard key={item._id} props={item}/>
                    )}
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