import {useState, useEffect, useRef} from "react"
import "./HomeTop.scss"
import Header from "../header"
import SliderTitle from "../slider-title"
import first from "../../assets/images/home-top.jpg"
import second from "../../assets/images/home-top2.jpg"
import third from "../../assets/images/home-top2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';

const HomeTop = () => {

    const swiperRef = useRef();

    const slides = [
        {
            type: 'Serial',
            name: 'DUNE / dune ( 2021)',
            version: 'Dune: Part One',
            desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
            kp: '7.7',
            imbd: '8.2',
            pg: '16+',
            time: '02:25',
            img: "1"
        },
        {
            type: 'Serial',
            name: 'DUNE / dune ( 2021)',
            version: 'Dune: Part One',
            desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
            kp: '7.7',
            imbd: '8.2',
            pg: '16+',
            time: '02:215',
            img: "2"
        }
    ];

    return (  
        <div className="home-top px-2">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
                onBeforeInit={(swiper) => {
                    swiperRef.current = swiper;
                }}
            >
                <div className="flex relative items-center justify-center">
                    {slides.map((i) => 
                        <SwiperSlide>
                            <section className="wrapper-carousel relative flex justify-between items-center">
                                <div className={`slider-img${i.img}`}></div>
                                <div className="lg:mt-20 mt-16 sm:mt-6 sm:ml-5 ml-2 flex w-full justify-between items-end">
                                    {/* <i onClick={() => swiperRef.current?.slidePrev()} className="ml-60 hidden md:flex cursor-pointer p-3 text-5xl absolute left-3 text-gray-200 hover:text-gray-300 fa-solid fa-angle-left"></i> */}
                                    <SliderTitle props={i} />
                                    <i onClick={() => swiperRef.current?.slideNext()} className="hidden md:flex cursor-pointer p-3 text-5xl absolute right-3 text-gray-200 hover:text-gray-300 fa-solid fa-angle-right"></i>
                                 </div>
                            </section>
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
            <div className="flex justify-center">
                <Header/>
            </div>
        </div>
    );
}
 
export default HomeTop;