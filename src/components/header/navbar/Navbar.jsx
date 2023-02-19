import { useRef, useEffect } from "react"
import {Link} from "react-router-dom"
import {memo} from "react"

import { useSelector } from "react-redux"

const Navbar = () => {

    const { category, categoryLoadingStatus } = useSelector(state => state)

    const nav = useRef(null)
    const icon = useRef(null)

    return (  
        <>
            <nav ref={nav} className="flex hidden fixed md:static md:flex bg-gray-900 z-40 md:bg-transparent md:rounded-2xl md:h-fit h-screen p-12 right-0 top-0 w-full md:w-fit">
                <ul onClick={() => {
                    nav.current.classList.toggle("hidden")
                    icon.current.classList.toggle("fa-xmark")
                }} className="gap-10 flex flex-col items-center w-full md:justify-center md:flex-row md:items-center">
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="/">Asosiy</Link></li>
                    {category.map((i) => 
                        <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to={`/category/${i.name}`}>{i.name}</Link></li>
                    )}
                </ul>
            </nav>
            <p onClick={(e) => {
                nav.current.classList.toggle("hidden")
                icon.current.classList.toggle("fa-xmark")
            }} className="absolute right-4 md:hidden flex cursor-pointer z-50"><i ref={icon} className="text-3xl fa-solid fa-bars"></i></p>
        </>
    );
}
 
export default memo(Navbar);