import { useMemo } from 'react'
import CatalogCard from "../../components/catalog-card"
import img from "../../assets/images/card-img.png"
import AdsHome from "../../components/AdsHome"

const Category = () => {
    window.scroll(0, 0);

    const data = useMemo(() => (
        [
            {
                img: img,
                name: "Happy birthday without me, without KNCoder",
                link: '/watch'
            },
            {
                img: img,
                name: "Dune / Dune part one, new films",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
            },{
                img: img,
                name: "Happy birthday without me",
                link: '/watch'
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
                        <select className="py-2.5 hover:py-2 hover:bg-[#10141a] transition-all duration-300 mb-8 px-8 bg-[#151A20] ring-2 ring-gray-500 outline-0 rounded-lg text-gray-200" name="" id="">
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
                <div className="flex justify-center items-center gap-1.5">
                    <p className="mr-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#60;</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">1</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">2</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">3</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">4</p>
                    <p className="hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full text-xs text-gray-200">5</p>
                    <p className="ml-1 hover:bg-yellow-600 cursor-pointer bg-yellow-500 w-6 h-6 flex justify-center items-center rounded-full font-semibold text-sm text-gray-200">&#62;</p>
                </div>
                <div className="mt-20 block">
                    <AdsHome/>
                </div>
            </div>
        </div>
    )
}

export default Category