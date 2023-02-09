import { useRef } from "react"
import {Link} from "react-router-dom"
import {memo} from "react"

const Navbar = () => {

    const isOpened = useRef(null)

    return (  
        <>
            <nav ref={isOpened} className="ml-32 flex fixed md:static hidden md:flex bg-gray-900 z-40 md:bg-transparent rounded-2xl md:h-fit h-screen p-12 right-0 top-0 w-full md:w-fit">
                <ul className="gap-10 flex flex-col items-center w-full md:justify-center md:flex-row md:items-center">
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="/">home</Link></li>
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="/category">films</Link></li>
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="./">cartoos</Link></li>
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="./">anime</Link></li>
                    <li className="hover:before:visible hover:before:left-0 before:invisible before:w-6 before:h-1 hover:before:bg-[#FFC30D] before:transition-all before:rounded-sm before:bg-gray-400 before:content-[''] before:absolute before:left-2.5 before:top-5 relative font-semibold text-sm hover:text-gray-300 text-center"><Link to="./">news</Link></li>
                </ul>
            </nav>
            <p onClick={(e) => {
                isOpened.current.classList.toggle("hidden")
                e.target.classList.toggle("fa-xmark")
            }} className="fixed right-4 md:hidden flex cursor-pointer z-50"><i className="text-3xl fa-solid fa-bars"></i></p>
        </>
    );
}
 
export default memo(Navbar);