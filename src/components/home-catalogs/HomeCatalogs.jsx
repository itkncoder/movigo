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
        <section className="wrapper-category">

            <div>
                <h1 className="category-title w-fit hover:underline"><a href="./">FILMS</a></h1>
                <div className="relative flex items-center">
                    <Swiper
                        spaceBetween={20}
                        slidesPerView={4.15}
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
                    <div className="absolute mb-60 next right-0 z-50 flex m-1 justify-center items-center">
                        <i className="p-3 text-2xl text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                    </div>
                </div>
            </div>
        </section>
    );
}
 
export default HomeCatalogs;