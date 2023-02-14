import { memo, useRef, useMemo, useEffect } from "react"
import CatalogCard from "../catalog-card/CatalogCard"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import {Link} from "react-router-dom"
import { useSelector } from "react-redux"
import Spinner from "../Spinner"

const MovieSwiper = ({name}) => {

    const {movies, moviesLoadingStatus} = useSelector(store => store) || dispatch()

    const swiperRef = useRef(null)

    return (
        <section className="px-2">
            <div>
                <h1 className="text-3xl font-semibold mt-5 mb-10 w-fit hover:underline"><Link to="/category">{name}</Link></h1>
                <div className="relative flex items-center">
                    <div onClick={() => swiperRef.current?.slidePrev()} className="cursor-pointer hidden lg:flex absolute mb-14 w-[50px] h-[50px] rounded-full bg-[#ffc30dda] left-0 z-40 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-left"></i>
                    </div>
                    <Swiper
                        className="h-fit mb-6"
                        breakpoints={{
                            640: {
                                slidesPerView: 2.5,
                            },
                            768: {
                            slidesPerView: 2.75,
                            },
                            1080: {
                                slidesPerView: 4.5,
                            },
                        }}
                        spaceBetween={30}
                        slidesPerView={1.5}
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
                            {movies.map((item) => 
                                <SwiperSlide key={item._id}>
                                    <CatalogCard props={item}/>
                                </SwiperSlide>
                            )}
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