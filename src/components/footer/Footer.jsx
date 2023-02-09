import Logo from "../logo/Logo"
import {memo} from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (  
        <footer className="mt-96 md:mt-10 flex items-center justify-between px-4 bg-[#1E242C]">
            <div className="max-w-[1200px] mx-auto py-[55px] flex items-center w-full justify-between">
                <Logo/>
                <p className="text-gray-400 text-sm hidden lg:block">©️ 2023, <a href="./">muvi.uz</a>, Barcha huquqlar himoyalangan</p>
                <div className="flex jusitify-center items-center gap-4">
                    <Link className="hover:text-gray-300" to="./">Quation</Link>
                    <Link className="hover:text-gray-300" to="./">Lisence</Link>
                </div>
            </div>
        </footer>
    );
}
 
export default memo(Footer);