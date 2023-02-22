import Logo from "../logo/Logo"
import Navbar from "./navbar/Navbar"
import DonateBtn from "./DonateBtn"
import {memo, useRef} from "react"

const Header = () => {
    const head = useRef(null)

    window.onscroll = (() => {
        if (document.body.scrollTop > 25 || document.documentElement.scrollTop > 50) {
            head.current.classList.add("navbar")
        } else {
            head.current.classList.remove("navbar")
        }
    })

    return (  
        <header ref={head} className="flex justify-between items-center px-2 w-full h-[86px] absolute top-0 z-50 max-w-[1170px]">
            <Logo/>
            <Navbar/>
            <DonateBtn/>
        </header>
    );
}
 
export default memo(Header);