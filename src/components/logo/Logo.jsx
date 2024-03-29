import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"
import { memo } from "react"

const Logo = () => {
    return (  
        <div>
            <Link className="flex justify-center items-center" to="./">
                <img className="transition-all w-32 md:w-40 md:hover:-rotate-2" src={logo} alt="logo" />
            </Link>
        </div>
    );
}
 
export default memo(Logo);