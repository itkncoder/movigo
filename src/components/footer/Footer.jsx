import Logo from "../logo/Logo"
import {memo} from "react"
import {Link} from "react-router-dom"

const Footer = () => {
    return (  
        <footer className="flex flex-col items-end mt-10 p-1 bg-[#1E242C]">
            <div className="w-full flex items-center justify-between px-4">
                <div className="max-w-[1200px] mx-auto py-[40px] flex items-center w-full justify-between">
                    <Logo/>
                    <p className="text-gray-400 text-sm hidden lg:block">©️ 2023, <a href="./">movigo.uz</a>, Barcha huquqlar himoyalangan</p>
                    <div className="flex jusitify-center items-center gap-4">
                        <a className="text-xs text-center sm:text-base hover:text-gray-300" target="_blank" href="https://t.me/nodejs5">Texnik xizmatlar</a>
                        <a className="text-xs text-center sm:text-base hover:text-gray-300" target="_blank" href="https://t.me/nodejs5">Reklama</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
 
export default memo(Footer);
