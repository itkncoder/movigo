import Logo from "../logo/Logo"
import {memo} from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (  
        <footer className="flex items-center justify-between mt-10 px-4 bg-[#1E242C]">
            <div className="max-w-[1200px] mx-auto py-[55px] flex items-center w-full justify-between">
                <Logo/>
                <p className="text-gray-400 text-sm hidden lg:block">©️ 2023, <a href="./">movigo.uz</a>, Barcha huquqlar himoyalangan</p>
                <div className="flex jusitify-center items-center gap-4">
                    <a className="hover:text-gray-300" href="https://t.me/nodejs5">Reklama</a>
                </div>
            </div>
        </footer>
    );
}
 
export default memo(Footer);