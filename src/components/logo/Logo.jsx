import logo from "../../assets/logo.png"
import {Link} from "react-router-dom"

const Logo = () => {
    return (  
        <div>
            <Link className="flex justify-center items-center" to="./">
                <img className="transition-all w-40 hover:-rotate-2" src={logo} alt="logo" />
            </Link>
        </div>
    );
}
 
export default Logo;