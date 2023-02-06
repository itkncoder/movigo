import "./HomeCatalogs.scss"
import {useEffect} from 'react'
import CatalogCard from "../catalog-card"
import img from "../../assets/images/card-img.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";

const HomeCatalogs = () => {

    const data = [
        {
            img: img,
            link: './'
        },
        {
            img: img,
            link: './'
        },{
            img: img,
            link: './'
        },{
            img: img,
            link: './'
        },
        {
            img: img,
            link: './'
        },
        {
            img: img,
            link: './'
        },{
            img: img,
            link: './'
        },{
            img: img,
            link: './'
        },
    ]

    return (  
        <section className="px-2">
            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">FILMS</a></h1>
                <div className="relative flex items-center">
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
                                slidesPerView: 4.25,
                            },
                        }}
                        spaceBetween={20}
                        slidesPerView={1.25}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        >
                        <div className="flex relative items-center justify-center">
                            {data.map((i) => 
                                <SwiperSlide>
                                    <CatalogCard img={img} link="./"/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="hidden lg:flex absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">POPULAR</a></h1>
                <div className="relative flex items-center">
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
                                slidesPerView: 4.25,
                            },
                        }}
                        spaceBetween={20}
                        slidesPerView={1.25}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        >
                        <div className="flex relative items-center justify-center">
                            {data.map((i) => 
                                <SwiperSlide>
                                    <CatalogCard img={img} link="./"/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="hidden lg:flex absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">CARTOONS</a></h1>
                <div className="relative flex items-center">
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
                                slidesPerView: 4.25,
                            },
                        }}
                        spaceBetween={20}
                        slidesPerView={1.25}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        >
                        <div className="flex relative items-center justify-center">
                            {data.map((i) => 
                                <SwiperSlide>
                                    <CatalogCard img={img} link="./"/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="hidden lg:flex absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">ANIME</a></h1>
                <div className="relative flex items-center">
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
                                slidesPerView: 4.25,
                            },
                        }}
                        spaceBetween={20}
                        slidesPerView={1.25}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        >
                        <div className="flex relative items-center justify-center">
                            {data.map((i) => 
                                <SwiperSlide>
                                    <CatalogCard img={img} link="./"/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="hidden lg:flex absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">NEWS</a></h1>
                <div className="relative flex items-center">
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
                                slidesPerView: 4.25,
                            },
                        }}
                        spaceBetween={20}
                        slidesPerView={1.25}
                        autoplay={{
                            delay: 2500,
                            disableOnInteraction: false,
                        }}
                        modules={[Autoplay]}
                        >
                        <div className="flex relative items-center justify-center">
                            {data.map((i) => 
                                <SwiperSlide>
                                    <CatalogCard img={img} link="./"/>
                                </SwiperSlide>
                            )}
                        </div>
                    </Swiper>
                    <div className="hidden lg:flex absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HomeCatalogs;