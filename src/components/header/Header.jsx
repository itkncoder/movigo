import Logo from "../logo"
import Navbar from "./navbar/Navbar"
import {memo} from "react"

const Header = () => {
    return (  
        <header className="flex justify-start items-center px-2 w-full h-[86px] absolute top-0 z-10 max-w-[1170px]">
            <Logo/>
            <Navbar/>
        </header>
    );
}
 
export default memo(Header);