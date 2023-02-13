import Logo from "../logo/Logo"
import Navbar from "./navbar/Navbar"
import {memo, useRef} from "react"

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
        <header ref={head} className="flex justify-start items-center px-2 w-full h-[86px] absolute top-0 z-10 max-w-[1170px]">
            <Logo/>
            <Navbar/>
        </header>
    );
}
 
export default memo(Header);