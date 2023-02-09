import {useState, useEffect} from "react"
import SliderTitle from "../slider-item/SliderItem"

import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import {useMemo} from "react"

import first from "../../assets/images/home-top.jpg"
import second from "../../assets/images/home-top2.jpg"
import third from "../../assets/images/home-top3.png"
import four from "../../assets/images/home-top4.jpg"

const HomeTop = () => {

    const slides = useMemo(() => (
        [
            {
                type: 'Serial',
                name: 'DUNE / dune ( 2021)',
                version: 'Dune: Part One',
                desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
                time: '02:25',
                img: second
            },
            {
                type: 'Movie',
                name: 'Who am I',
                version: 'Who am I:First',
                desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
                time: '03:21',
                img: first
            },
            {
                type: 'Movie',
                name: 'Broken boy',
                version: 'Broken boy: Part One',
                desc: 'The real movie, about KNCoder :(',
                time: '9:02',
                img: third
            },
            {
                type: 'Serial',
                name: 'Happy birthday without me',
                version: 'Broken boy: Part two',
                desc: 'The real movie, about KNCoder 2',
                time: '9:02',
                img: four
            }
        ]
    ))

    return (  
        <div className="home-top px-2 max-h-200">
            <Swiper
                spaceBetween={0}
                slidesPerView={1}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay]}
            >
                <div className="flex relative items-center justify-center max-h-200">
                    {slides.map((item, index) => 
                        <SwiperSlide key={index} className="max-h-200">
                            <SliderTitle props={item} />
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
        </div>
    );
}
 
export default HomeTop;