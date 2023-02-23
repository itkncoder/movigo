import { memo, useRef, useEffect } from "react"
import CatalogCard from "../catalog-card/CatalogCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../Spinner"

const MovieSwiper = ({name, movies}) => {

    useEffect(() => {
        if (movies.length > 8) {
            movies.length = 8
        }
    }, [])

    const { moviesLoadingStatus} = useSelector(store => store) || dispatch()

    const swiperRef = useRef(null)

    return (
        <section className="px-2">
            <div>
                <div className="flex items-center justify-between">
                    <h1 className="text-3xl font-semibold mt-5 mb-10 w-fit hover:underline uppercase"><Link to={`/category/${name}`}>{name}</Link></h1>
                    <Link className="bg-gray-800 invisible md:visible px-6 py-2 flex items-center justify-center gap-2 ring-2 ring-gray-700 text-sm rounded-lg hover:bg-gray-700 uppercase" to={`/category/${name}`}>Barchasi <i className="text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i></Link>
                </div>
                <div className="relative flex items-center">
                    <div onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer hidden lg:flex absolute mb-14 w-[50px] h-[50px] rounded-full bg-[#ffc30dda] left-0 z-40 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-left"></i>
                    </div>
                    <Swiper
                        className="h-fit mb-6"
                        breakpoints={{
                            340: {
                                slidesPerView: 1.5,
                            },
                            360: {
                                slidesPerView: 1.6,
                            },
                            400: {
                                slidesPerView: 1.75,
                            },
                            440: {
                                slidesPerView: 1.9,
                            },
                            480: {
                                slidesPerView: 2,
                            },
                            500: {
                                slidesPerView: 2.2,
                            },
                            540: {
                                slidesPerView: 2.35,
                            },
                            580: {
                                slidesPerView: 2.55,
                            },
                            620: {
                                slidesPerView: 2.75,
                            },
                            660: {
                                slidesPerView: 2.9,
                            },
                            700: {
                                slidesPerView: 3.1,
                            },
                            768: {
                                slidesPerView: 3.25,
                            },
                            800: {
                                slidesPerView: 3.45,
                            },
                            850: {
                                slidesPerView: 3.6,
                            },
                            900: {
                                slidesPerView: 3.9,
                            },
                            950: {
                                slidesPerView: 4.25,
                            },
                            1080: {
                                slidesPerView: 4.75,
                            },
                        }}
                        spaceBetween={30}
                        slidesPerView={1.4}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        onBeforeInit={(swiper) => {
                            swiperRef.current = swiper;
                        }}
                        >
                        <div className="flex relative items-center justify-center">
                            {
                            movies.length ?
                            movies.map((item) => 
                                <SwiperSlide key={item._id}>
                                    <CatalogCard props={item}/>
                                </SwiperSlide>
                            )
                            :   
                            <div>
                                {moviesLoadingStatus !== "loading" && <div className="flex flex-col items-center gap-3 py-8">
                                    <i className="text-5xl text-yellow-500 fa-solid fa-film"></i>      
                                    <h1 className="text-2xl text-gray-200 font-semibold">{name} mavjud emas :(</h1>
                                </div>}
                            </div>    
                            }
                            {moviesLoadingStatus === "loading" ? <div className="w-full">
                                <Spinner/>
                            </div> : ''}
                        </div>
                    </Swiper>
                    <div onClick={() => swiperRef.current?.slideNext()} className="cursor-pointer hidden lg:flex absolute mb-14 w-[50px] h-[50px] rounded-full bg-[#ffc30dda] right-0 z-40 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default memo(MovieSwiper)