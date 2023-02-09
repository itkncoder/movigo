import "./HomeCatalogs.scss"
import { useEffect, useRef } from 'react'
import CatalogCard from "../catalog-card"
import img from "../../assets/images/card-img.png"
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import {Link} from "react-router-dom"
import AdsHome from "../AdsHome"

const HomeCatalogs = () => {

    const films = useRef(null);
    const popular = useRef();
    const cartoons = useRef();
    const anime = useRef();


    const data = [
        {
            img: img,
            name: "Happy birthday without me, without KNCoder",
            link: '/watch',
            premium: "premium"
        },
        {
            img: img,
            name: "Dune / Dune part one, new films",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },{
            img: img,
            name: "Happy birthday without me",
            link: '/watch',
            premium: "premium"
        },
    ]

    return (  
        <div className="wrapper-category">
            <section className="px-2">
                <div>
                    <h1 className="category-title w-fit hover:underline"><Link to="/category">FILMS</Link></h1>
                    <div className="relative flex items-center">
                        <div onClick={() => films.current?.slidePrev()} className="cursor-pointer hidden lg:flex absolute mb-14 next left-0 z-50 flex m-1 justify-center items-center">
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
                                    slidesPerView: 4.8,
                                },
                            }}
                            spaceBetween={20}
                            slidesPerView={1.75}
                            autoplay={{
                                delay: 2500,
                                disableOnInteraction: false,
                            }}
                            modules={[Autoplay]}
                            onBeforeInit={(swiper) => {
                                films.current = swiper;
                            }}
                            >
                            <div className="flex relative items-center justify-center">
                                {data.map((i) => 
                                    <SwiperSlide>
                                        <CatalogCard props={i}/>
                                    </SwiperSlide>
                                )}
                            </div>
                        </Swiper>
                        <div onClick={() => films.current?.slideNext()} className="cursor-pointer hidden lg:flex absolute mb-14 next right-0 z-50 flex m-1 justify-center items-center">
                            <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                        </div>
                    </div>
                </div>
            </section>
            <div className="mt-10">
                <AdsHome/>
            </div>
        </div>
    );
}
 
export default HomeCatalogs;