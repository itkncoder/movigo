import logo from "../../assets/logo.png"
import "./Logo.scss"
import {Link} from "react-router-dom"

const Logo = () => {
    return (  
        <div>
            <Link className="flex justify-center items-center" to="./">
                <img className="logo" src={logo} alt="logo" />
            </Link>
        </div>
    );
}
 
export default Logo;