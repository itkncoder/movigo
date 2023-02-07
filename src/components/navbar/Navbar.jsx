import "./Navbar.scss"
import { useRef } from "react"

const Navbar = () => {

    const isOpened = useRef(null)

    return (  
        <>
            <nav ref={isOpened} className="navbar absolute md:static bg-gray-900 md:bg-transparent rounded-2xl p-12 right-0 top-14">
                <ul className="flex flex-col md:justify-center md:flex-row md:items-center">
                    <li className="navbar-item text-center"><a href="./">home</a></li>
                    <li className="navbar-item text-center"><a href="./">films</a></li>
                    <li className="navbar-item text-center"><a href="./">cartoos</a></li>
                    <li className="navbar-item text-center"><a href="./">anime</a></li>
                    <li className="navbar-item text-center"><a href="./">news</a></li>
                </ul>
            </nav>
            <p onClick={() => isOpened.current.classList.toggle("isOpen")} className="absolute right-4 burger cursor-pointer"><i className="text-3xl fa-solid fa-bars"></i></p>
        </>
    );
}
 
export default Navbar;