import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { useRef } from 'react'
import CatalogCard from "../../components/catalog-card"
import img from "../../assets/images/card-img.png"
import HomeTop from "../../components/home-top"
import AdsHome from "../../components/AdsHome"
import {useMemo} from "react"

import first from "../../assets/images/home-top.jpg"
import second from "../../assets/images/home-top2.jpg"
import third from "../../assets/images/home-top3.png"
import four from "../../assets/images/home-top4.jpg"

const Category = () => {

    window.scroll(0, 0);

    const data = useMemo(() => (
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
                img: second
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
                img: first
            },
            {
                type: 'Movie',
                name: 'Broken boy',
                version: 'Broken boy: Part One',
                desc: 'The real movie, about KNCoder :(',
                kp: '7.5',
                imbd: '2.8',
                pg: '7+',
                time: '9:02',
                img: third
            },
            {
                type: 'Serial',
                name: 'Happy birthday without me',
                version: 'Broken boy: Part two',
                desc: 'The real movie, about KNCoder 2',
                kp: '7.5',
                imbd: '2.8',
                pg: '7+',
                time: '9:02',
                img: four
            }
        ]
    ))

    return (
        <div className="px-2 xl:px-0">
            <div className="mt-32 max-w-screen-lg mx-auto">
                <AdsHome />
            </div>
            <div className="wrapper-carousel mx-auto mt-14">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="category-title w-fit">FILMS</h1>
                    <div>
                        <select className="py-2.5 hover:py-2 transition-all duration-300 mb-8 px-8 bg-[#151A20] ring-2 ring-gray-500 outline-0 rounded-lg text-gray-200" name="" id="">
                            <option className="py-3 px-4 text-gray-200 block" value="">Hello</option>
                            <option className="py-3 px-4 text-gray-200" value="">World</option>
                        </select>
                    </div>
                </div>
                <div className="relative flex items-center flex-wrap gap-4 justify-around lg:justify-between">
                    {
                        data.map((item, index) => 
                            <CatalogCard key={index} props={item}/>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default Category