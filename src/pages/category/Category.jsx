import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from "swiper";
import { useRef } from 'react'
import CatalogCard from "../../components/catalog-card"
import img from "../../assets/images/card-img.png"
import HomeTop from "../../components/home-top"
import AdsHome from "../../components/AdsHome"
import {useMemo} from "react"

const Category = () => {

    window.scroll(0, 0);

    const films = useRef(null);

    const data = useMemo(() =>
        [
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
    )

    return (
        <div className="px-2 xl:px-0">
            <div className="mt-32 max-w-screen-lg mx-auto">
                <AdsHome />
            </div>
            <div className="wrapper-carousel mx-auto mt-14">
                <div className="flex items-center justify-between gap-4">
                    <h1 className="category-title w-fit">
                        <h1 href="./">FILMS</h1>
                    </h1>
                    <div>
                        <select className="py-2.5 hover:py-2 transition-all duration-300 mb-8 px-8 bg-[#151A20] ring-2 ring-gray-500 outline-0 rounded-lg text-gray-200" name="" id="">
                            <option className="py-3 px-4 text-gray-200 block" value="">Hello</option>
                            <option className="py-3 px-4 text-gray-200" value="">World</option>
                        </select>
                    </div>
                </div>
                <div className="relative flex items-center flex-wrap gap-4 justify-around lg:justify-between">
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                    <CatalogCard img={data[0].img} link="./"/>
                </div>
            </div>
        </div>
    )
}

export default Category