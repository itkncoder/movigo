import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { useRef, useMemo } from 'react'
import CatalogCard from "../../components/catalog-card"
import img from "../../assets/images/card-img.png"
import HomeTop from "../../components/home-top"
import AdsHome from "../../components/AdsHome"

import first from "../../assets/images/home-top.jpg"
import second from "../../assets/images/home-top2.jpg"
import third from "../../assets/images/home-top3.png"
import four from "../../assets/images/home-top4.jpg"

const Category = () => {

    window.scroll(0, 0);

    const data = useMemo(() => (
        [
            {
                img: img,
                name: "Happy birthday without me, without KNCoder",
                link: '/category'
            },
            {
                img: img,
                name: "Dune / Dune part one, new films",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/category'
            },
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
                    {data.map((item, index) => 
                        <CatalogCard props={item}/>
                    )}
                </div>
            </div>
        </div>
    )
}

export default Category