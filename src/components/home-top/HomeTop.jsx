import {useState, useEffect} from "react"
import "./HomeTop.scss"
import SliderTitle from "../slider-title"
import first from "../../assets/images/home-top.jpg"
import second from "../../assets/images/home-top2.jpg"
import third from "../../assets/images/home-top2.jpg"
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from "swiper";
import 'swiper/css';
import {useMemo} from "react"

const HomeTop = () => {

    const slides = useMemo(() => (
        [
            {
                type: 'Serial',
                name: 'DUNE / dune ( 2021)',
                version: 'Dune: Part One',
                desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
                kp: '7.7',
                imbd: '8.2',
                pg: '16+',
                time: '02:25',
                img: first
            },
            {
                type: 'Movie',
                name: 'Who am I',
                version: 'Who am I:First',
                desc: 'lorem ipsum dolor sit amet, lorem ipsum dolor sit amet',
                kp: '1.6',
                imbd: '9.3',
                pg: '14+',
                time: '03:21',
                img: second
            }
        ]
    ))

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
            >
                <div className="flex relative items-center justify-center">
                    {slides.map((i) => 
                        <SwiperSlide>
                            <SliderTitle props={i} />
                        </SwiperSlide>
                    )}
                </div>
            </Swiper>
            <div className="flex justify-center">
            </div>
        </div>
    );
}
 
export default HomeTop;