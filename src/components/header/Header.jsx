import Logo from "../logo/Logo"
import Navbar from "./navbar/Navbar"
import {memo, useRef} from "react"
import {Link} from "react-router-dom"

const Header = () => {
    const head = useRef(null)

    window.onscroll = (() => {
        if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
            head.current.classList.add("navbar")
        } else {
            head.current.classList.remove("navbar")
        }
    })

    return (  
        <header ref={head} className="flex justify-between items-center px-2 w-full h-[86px] absolute top-0 z-50 max-w-[1170px]">
            <Logo/>
            <Navbar/>
            <div>
                <Link to="/donate" className="px-6 font-semibold py-1.5 rounded-md ring-1 ring-gray-300 hover:bg-yellow-500 transition-all hover:ring-yellow-600">Donate</Link>
            </div>
        </header>
    );
}
 
export default memo(Header);